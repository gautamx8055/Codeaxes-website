export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgakoyol';

type SubmitOptions = {
  status: HTMLElement;
  successMessage: string;
  fallbackEmail: string;
  onFieldErrors?: (errors: Record<string, string>) => void;
};

const pending = new WeakSet<HTMLFormElement>();

/** Keep form values on failure and clear them only after Formspree accepts them. */
export async function submitFormspree(form: HTMLFormElement, data: FormData, options: SubmitOptions): Promise<void> {
  if (pending.has(form)) return;
  pending.add(form);
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = button?.textContent ?? '';
  const disabled = button?.disabled ?? false;
  if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  form.setAttribute('aria-busy', 'true');
  options.status.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => null) as {
        error?: string;
        errors?: Array<{ field?: string; message?: string }>;
      } | null;
      const errors = Array.isArray(payload?.errors) ? payload.errors : [];
      const fields: Record<string, string> = {};
      const messages: string[] = [];
      errors.forEach((error) => {
        if (typeof error?.message !== 'string') return;
        messages.push(error.message);
        if (typeof error.field === 'string') fields[error.field] = error.message;
      });
      options.onFieldErrors?.(fields);
      options.status.textContent = messages.join(' ') || (typeof payload?.error === 'string' ? payload.error : `Could not send your submission. Please try again or email ${options.fallbackEmail}.`);
      return;
    }
    form.reset();
    options.status.textContent = options.successMessage;
  } catch {
    options.status.textContent = `Could not connect. Your details are still here. Please try again or email ${options.fallbackEmail}.`;
  } finally {
    pending.delete(form);
    form.removeAttribute('aria-busy');
    if (button) { button.disabled = disabled; button.textContent = label; }
  }
}

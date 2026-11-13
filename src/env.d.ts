/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENAI_API_KEY?: string;
  readonly OPENAI_BASE_URL?: string;
  readonly OPENAI_MODEL?: string;
  readonly JOBS_API_KEY?: string;
  readonly JOBS_APP_ORIGIN?: string;
  readonly JOBS_DATA_PATH?: string;
  readonly INBOX_DATA_DIR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

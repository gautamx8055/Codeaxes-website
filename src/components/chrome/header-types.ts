export type HeaderLink = {
  label: string;
  href: string;
  description?: string;
};

export type HeaderGroup = {
  id: string;
  label: string;
  description: string;
  href: string;
  links: HeaderLink[];
};

export type HeaderNavItem = HeaderLink & {
  id: string;
  groups?: HeaderGroup[];
};

export type HeaderSearchEntry = HeaderLink & {
  category: string;
  keywords?: string;
};

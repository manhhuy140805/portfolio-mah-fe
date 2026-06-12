export const SITE_CONFIG = {
  name: "MA-H Portfolio",
  description: "Personal portfolio website for digital design and frontend work",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/blog", label: "Blog", hasDropdown: true },
  { href: "/projects", label: "Project", hasDropdown: true },
  { href: "/contact", label: "Contact" },
] as const;

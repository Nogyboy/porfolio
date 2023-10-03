import { iconPaths } from "./IconPaths";

/** Personal Info */
export const personalInfo = {
    name: 'Christian Guaman',
    email: 'guamanc9@gmail.com'
}

/** Main menu items */
export const textLinks: { label: string; href: string }[] = [
    { label: "menu.home", href: "/" },
    { label: "menu.work", href: "/work/" },
    { label: "menu.about", href: "/about/" },
  ];

  /** Icon links to social media — edit these with links to your profiles! */
export const socialMediaIconLinks: {
    label: string;
    href: string;
    icon: keyof typeof iconPaths;
  }[] = [
    { label: "Twitter", href: "https://twitter.com/me", icon: "twitter-logo" },
    { label: "GitHub", href: "https://github.com/me", icon: "github-logo" },
    { label: "LinkedIn", href: "https://linkedin.com/in/me", icon: "linkedin-logo" },
    { label: "Email", href: `mailto:${personalInfo.email}`, icon: "email" },
  ];
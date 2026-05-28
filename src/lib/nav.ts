// Navigation registry for the W3A site. One source of truth, consumed
// by both the header and the footer so the two cannot drift.

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Members', href: '/members' },
  { label: 'Papers', href: '/papers' },
  { label: 'Docs', href: '/docs' },
  { label: 'Join', href: '/join' },
];

export const footerNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Members', href: '/members' },
  { label: 'Papers', href: '/papers' },
  { label: 'Docs', href: '/docs' },
  { label: 'Join', href: '/join' },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/osagebrothers/w3a-site' },
  { label: 'Email', href: 'mailto:hello@w3a.foundation' },
];

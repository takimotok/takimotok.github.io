import type { SiteMetadata } from '@/types/consts'
import type { NavItem } from '@/types/nav'

/**
 * SITE_METADATA
 */
export const SITE_METADATA: SiteMetadata = {
  url: 'https://takimotok.github.io/takimotok.github.io',
  repo: 'https://github.com/takimotok/takimotok.github.io',
  title: "Kengo's Resume",
  description: "Kengo's Resume resume created with Astro and Tailwind.css",
  language: 'en_US',
  robots: 'index, follow', // Options: index, noindex, follow, nofollow
}

/**
 * Navigation items
 */
export const NAVIGATION: NavItem[] = [
  { href: '/', title: 'Home' },
  { href: '/resume', title: 'Resume' },
] as const

import type { BodyScroolUtils } from '@/types/bodyScroll'

export const BodyScrool: BodyScroolUtils = {
  lock(): void {
    document.body.style.overflow = 'hidden'
  },

  unlock(): void {
    document.body.style.overflow = ''
  },

  save(): string {
    return document.body.style.overflow
  },
} as const

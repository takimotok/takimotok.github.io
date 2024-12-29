import { BodyScrool } from '@/utils/bodyScroll'
import { type Accessor, createEffect } from 'solid-js'

export function useBodyScrool(isMenuOpen: Accessor<boolean>): void {
  createEffect(() => {
    const originalState = BodyScrool.save()

    // update scroll state
    isMenuOpen() ? BodyScrool.lock() : BodyScrool.unlock()

    // restore original scroll state when unmount
    return () => {
      document.body.style.overflow = originalState
    }
  })
}

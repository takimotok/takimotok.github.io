import HamburgerMenuImage from '@/assets/hamburger-menu.svg'
import { type Component, createEffect, createSignal } from 'solid-js'
import { MenuButton } from './MenuButton'
import { MenuOverlay } from './MenuOverlay'

const MobileNav: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  // @TODO: learn more about reactive programming: side effect
  // Handle body scroll lock
  createEffect(() => {
    document.body.style.overflow = isMenuOpen() ? 'hidden' : ''
  })

  return (
    <div class='block sm:hidden'>
      <MenuButton
        icon={HamburgerMenuImage.src}
        label='Open Menu'
        className='sm:hidden'
        onClick={() => setIsMenuOpen(true)}
      />
      <MenuOverlay isOpen={isMenuOpen()} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}

export default MobileNav

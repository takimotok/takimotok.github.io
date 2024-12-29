import HamburgerMenuImage from '@/assets/hamburger-menu.svg'
import { useBodyScrool } from '@/hooks/useBodyScroll'
import { type Component, createSignal } from 'solid-js'
import { MenuButton } from './MenuButton'
import { MenuOverlay } from './MenuOverlay'

const MobileNav: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  useBodyScrool(isMenuOpen)

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

import CloseMenuImage from '@/assets/close-menu.svg'
import type { MenuOverlayProps } from '@/solid/MobileNav/types'
import { type Component, Show } from 'solid-js'
import { MenuButton } from './MenuButton'
import { NavigationLinks } from './NavigationLinks'

export const MenuOverlay: Component<MenuOverlayProps> = props => {
  return (
    <Show when={props.isOpen}>
      <div
        class={`
          fixed left-0 top-0 h-full w-full transform 
          bg-white dark:bg-gray-950 
          opacity-95 dark:opacity-[0.98] 
          z-20 transition-transform duration-300
          ${props.isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div class='flex justify-end'>
          <MenuButton
            icon={CloseMenuImage.src}
            label='Close Menu'
            className='mr-8 mt-11 h-8 w-8'
            onClick={props.onClose}
          />
        </div>
        <NavigationLinks />
      </div>
    </Show>
  )
}

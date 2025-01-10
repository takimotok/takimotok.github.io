import type { MenuButtonProps } from '@/solid/MobileNav/types'
import type { Component } from 'solid-js'

export const MenuButton: Component<MenuButtonProps> = props => {
  return (
    <button
      type='button'
      aria-label={props.label}
      class={props.className}
      onClick={props.onClick}
    >
      <img
        src={props.icon}
        alt={props.label}
        width={24}
        height={24}
      />
    </button>
  )
}

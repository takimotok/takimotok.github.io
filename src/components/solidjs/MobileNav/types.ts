export interface MenuButtonProps {
  icon: string
  label: string
  className?: string
  onClick: () => void
}

export interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

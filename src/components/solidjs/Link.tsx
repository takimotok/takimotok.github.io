interface LinkProps {
  href: string
  class: string
  children: string
}

export default function Link(props: LinkProps) {
  const isInternalLink = props?.href.startsWith('/')
  const isAnchorLink = props?.href.startsWith('#')

  if (isInternalLink || isAnchorLink) {
    return (
      <a href={props.href} class={props.class}>
        {props.children}
      </a>
    )
  }

  return (
    <a href={props.href} class={props.class} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  )
}

import { NAVIGATION } from '@/consts'
import Link from '@/solid/Link'
import { type Component, For } from 'solid-js'

export const NavigationLinks: Component = () => {
  return (
    <nav class='fixed mt-8 h-full'>
      <For each={NAVIGATION}>
        {({ href, title }) => (
          <div class='px-12 py-4'>
            <Link href={href} class='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100'>
              {title}
            </Link>
          </div>
        )}
      </For>
    </nav>
  )
}

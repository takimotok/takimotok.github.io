import { Image } from 'astro:assets'
import CloseMenuImage from '@/assets/close-menu.svg'
import HamburgerMenuImage from '@/assets/hamburger-menu.svg'

import { NAVIGATION } from '@/consts'
import Link from '@/solid/Link.tsx'

import { For } from 'solid-js'

export default function MobileNav() {
  let buttonRef!: HTMLButtonElement
  let menuRef!: HTMLDivElement

  const toggleMenu = () => {
    const isNavHidden = document.body.style.overflow === ''
    menuRef.classList.toggle('translate-x-full', !isNavHidden)
    menuRef.classList.toggle('translate-x-0', isNavHidden)
    document.body.style.overflow = isNavHidden ? 'hidden' : ''
  }

  return (
    <>
      <button
        type='button'
        aria-label={'components.mobileNav.toggleMenu'}
        class='sm:hidden'
        ref={buttonRef}
        onClick={toggleMenu}
      >
        <img src={HamburgerMenuImage.src} alt='Menu' width={24} height={24} />
      </button>
      <div
        ref={menuRef}
        class='translate-x-full fixed left-0 top-0 h-full w-full transform opacity-95 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-gray-950 z-20'
      >
        <div class='flex justify-end'>
          <button
            type='button'
            class='mr-8 mt-11 h-8 w-8'
            aria-label={'components.mobileNav.toggleMenu'}
            onClick={toggleMenu}
          >
            <img src={CloseMenuImage.src} alt='Close' width={24} height={24} />
          </button>
        </div>
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
      </div>
    </>
  )
}

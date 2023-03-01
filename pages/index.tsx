import React from 'react'

import { getTopShotClientGraphQLSdk } from '~/graphql/top-shot'
import { everything } from '~/graphql/top-shot/generated/'
import type * as TopShot from '~/graphql/top-shot/generated/schema'
import { cards } from '~/lib/utils'
import { HomeWizard } from '~/views/home/home-wizard'

export default function Home() {
  const [open, setOpen] = React.useState(true)
  const [backToTop, setBackToTop] = React.useState(false)

  React.useEffect(() => {
    if (!document) return

    document.body.style.overflowY = open ? 'hidden' : 'auto'
  }, [open])

  React.useEffect(() => {
    if (!document) return () => {}

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  // on scroll listener, to set a boolean to true when the user scrolls down higher than current screen
  // then, when the user clicks on the button, it will scroll to the top of the screen
  React.useEffect(() => {
    if (!document) return () => {}

    const handleScroll = () => {
      if (backToTop) return

      if (window.scrollY > window.innerHeight) {
        setBackToTop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setBackToTop(false)
  }

  return (
    <>
      <span className="fixed blur-[200px] p-20 max-w-[600px] max-h-[600px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>

      {open && <HomeWizard />}

      <a
        href="#"
        onClick={navigateToTop}
        id="back-to-top"
        className="fixed z-10 hidden text-lg leading-9 text-center text-white rounded-full back-to-top bottom-5 right-5 h-9 w-9 bg-violet-600"
      >
        <i className="uil uil-arrow-up"></i>
      </a>
    </>
  )
}

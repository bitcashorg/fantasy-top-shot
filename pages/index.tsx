import React from 'react'
import { getTopShotClientGraphQLSdk } from '~/graphql/top-shot'
import type * as TopShot from '~/graphql/top-shot/generated/schema'

import { HomeWizard } from '~/views/home/home-wizard'
import { everything } from '~/graphql/top-shot/generated/';
import { cards } from '~/lib/utils';

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
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>

      {!open && <HomeWizard />}

      {/* TODO: WIP... */}
      <video autoPlay width={200} height={200}>
      {Object.keys(cards).map((key) => {
        return (
          <div key={key}>
            <h1>{key}</h1>
            <div className="grid grid-cols-2 gap-4">
              {cards[key as keyof typeof cards].map((card, index) => {
                return (
                  <div key={index}>
                    <video src={`https://assets.nbatopshot.com/editions${card.video}`} width={200} height={200} />
                    <p>{card.player}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      </video>

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

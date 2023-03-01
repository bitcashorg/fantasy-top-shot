import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Form, Text } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { WizardStepProps } from '~/components/wizard'
import { Player } from '@lottiefiles/react-lottie-player'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'
import { cards } from '~/lib/utils';

import fireAnimation from '~/lib/lottie-files/fire.json'
import mindBlownAnimation from '~/lib/lottie-files/mind-blown.json'
import shockAnimation from '~/lib/lottie-files/shock.json'
import spinningAnimation from '~/lib/lottie-files/spinning-emoji.json'

const animations = {
  dunk: mindBlownAnimation,
  jumper: fireAnimation,
  layup: shockAnimation,
  assist: fireAnimation,
  block: shockAnimation,
  '3 pointer': mindBlownAnimation,
  handles: spinningAnimation,
}

export function PlayStep({ next, prev }: WizardStepProps) {
  const [score, setScore] = React.useState({ teamA: 0, teamB: 0 })
  const [gameStep, setGameStep] = React.useState(0)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const scoreAnimationRef = React.useRef<Player>(null)

  const gameplay = React.useCallback((e: Event) => {
    // @ts-ignore
    const interval = setInterval(() => {
      if (gameStep >= cards.length - 1 || !e.target) return clearInterval(interval)

      const { currentTime, src } = e.target as HTMLVideoElement

      const card = cards.find((card) => card.video.includes(src))
      
      if (!card) return
      
      if (currentTime >= 6.000) {
        clearInterval(interval)
        
        if (scoreAnimationRef.current) scoreAnimationRef.current.play()

        const roleKey = card.role as keyof typeof score
        const newScore = (prevState: any) => prevState[roleKey] + card.score

        setScore((prevState) => ({
          ...prevState,
          [roleKey]: newScore(prevState) <= 0 ? 0 : newScore(prevState),
        }))
        setGameStep((prevState) => prevState + 1)
      }
    }, 1000)
  }, [])

  React.useEffect(() => {
    if (!document || !videoRef.current) return

    videoRef.current.addEventListener('loadstart', (e) => {
      (e.target as HTMLVideoElement).currentTime = 1

      const timeout = setTimeout(() => {
        gameplay(e)

        clearTimeout(timeout)
      }, 100)
    })
  }, [videoRef.current])

  console.log('gameStep', gameStep)

  React.useEffect(() => {
    if (!videoRef.current || gameStep === 0) return

    videoRef.current.src = cards[gameStep] ? cards[gameStep].video : cards[0].video

    // Resets the game if jumps to a step that doesn't exist
    if (!cards[gameStep]) setGameStep(0)

    const timeout = setTimeout(() => {
      videoRef.current!.currentTime = 1
      videoRef.current!.addEventListener('playing', gameplay)

      clearTimeout(timeout)
    }, 100)

    return () => {
      if (!document || !videoRef.current) return

      videoRef.current.removeEventListener('playing', gameplay)
    }
  }, [gameStep])

  const playRole = cards[gameStep] ? cards[gameStep].role : ''
  const playType = cards[gameStep] ? cards[gameStep].type : ''
  const playPlayer = cards[gameStep] ? cards[gameStep].player : ''
  const currentAnimation = animations[playType as keyof typeof animations] || fireAnimation

  return (
    <div className="wizard-step-wrapper py-6">
      <HomeWizardPageTransition>
        <div className="flex flex-col justify-center px-[10%]">
          <div className="relative flex justify-center h-[620px] max-w-[360px]">
            <video
              className="relative object-cover"
              loop={true}
              playsInline
              preload="auto"
              autoPlay={true}
              ref={videoRef}
            >
              {cards.map((card, index) => gameStep === index ? (
                <source
                  src={card.video}
                  type="video/mp4"
                  key={card.player}
                />
              ) : (
                <source
                  src={card.video}
                  type="video/mp4"
                  key={card.player}
                />
              ))}
              <p>Your browser doesn’t support mp4 or webm html5 videos.</p>
            </video>
            <div className={clsx('flex flex-col w-10/12 whitespace-pre-line absolute bottom-0 p-2 h-auto mt-auto justify-center items-center bg-teal-50 rounded-xl', playRole === 'teamA' ? 'text-blue-500' : 'text-orange-600')}>
              <div className={clsx('score-animation', playRole === 'teamA' ? '-left-4' : '-right-4')}>
                <Player ref={scoreAnimationRef} src={currentAnimation} autoplay loop />
              </div>
              <span className="font-extrabold text-[20px]">
                {playType}
              </span>
              <b>{playPlayer}</b>
            </div>
          </div>
        </div>
        <div className="score-board">
          {/* TODO: Too much detail */}
          {/* <img src="/images/score-board.png" /> */}
          <div className="score-board__score">
            <picture>
              <img src="https://res.cloudinary.com/hxn7xk7oa/image/fetch/c_lfill,w_1200,h_1200,q_100,f_auto/https://images.ongaia.com/ipfs/QmaUhmEgy5Znagz2ayY2uyn5Xdbsvzm8PkBM1GghtsXihv/1137.png" width={80} height={80} />
            </picture>
            <span>
              {score.teamA}
            </span>
          </div>
          <div className="score-board__score">
            <picture>
              <img src="https://res.cloudinary.com/hxn7xk7oa/image/fetch/c_lfill,w_1200,h_1200,q_100,f_auto/https://images.ongaia.com/ipfs/QmZ6dDfmAzbKq7V37DyUeB8uxbn7yHA4LtP1tyFCwMkF3x/193.png" width={80} height={80} />
            </picture>
            <span>
              {score.teamB}
            </span>
          </div>
        </div>
      </HomeWizardPageTransition>
    </div>
  )
}

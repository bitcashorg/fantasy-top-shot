import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Form, Text } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { WizardStepProps } from '~/components/wizard'
import { DollarIcon } from '~/icons'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export function PlayStep({ next, prev }: WizardStepProps) {
  const { handleSubmit, register } = useForm<BetFormProps>()
  const onSubmit = (data: any) => {
    console.log({ data })
    next() // WIP: pending mint
  }
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardPageTransition>
        <Form>
          <div className="flex justify-center"></div>
          <div className="flex flex-col justify-center px-[10%]">
            <div className="flex justify-center">
              <video
                className="relative object-cover"
                loop={true}
                playsInline
                preload="auto"
                autoPlay={true}
                controls
              >
                <source
                  src="https://assets.nbatopshot.com/editions/1_cosmic_legendary/de32d3fb-0e6a-447e-b42a-08bbf1607b7d/play_de32d3fb-0e6a-447e-b42a-08bbf1607b7d_1_cosmic_legendary_capture_Animated_1080_1920_Black.mp4"
                  type="video/mp4"
                />
                <p>Your browser doesn’t support mp4 or webm html5 videos.</p>
              </video>
            </div>
          </div>
        </Form>
      </HomeWizardPageTransition>
    </div>
  )
}

type BetFormProps = {
  amount: string
}

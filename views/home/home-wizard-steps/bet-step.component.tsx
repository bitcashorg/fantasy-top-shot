import React from 'react'
import { useForm } from 'react-hook-form'

import { Form, Text } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { WizardStepProps } from '~/components/wizard'
import { BitEuro } from '~/icons/bit-euro.icon'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export function BetStep({ next, prev }: WizardStepProps) {
  const { handleSubmit, register } = useForm<BetFormProps>()
  const onSubmit = (data: any) => {
    console.log({ data })
    next() // WIP: pending mint
  }
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardPageTransition>
        <div className="py-10"></div>
        <Form>
          <div className="flex justify-center">
            <Text variant="display-1">Select Bet</Text>
          </div>
          <div className="flex justify-center pt-5">
            <div className="w-12 h-12">
              <BitEuro />
            </div>
            <div className="flex flex-col gap-6">
              <TextInput
                id="amount"
                inputType="number"
                placeholder="Amount"
                formProps={{
                  ...register('amount', { required: true }),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-5">
            <div className="py-10 text-center">
              <Text variant="display-1">Or Select NFT</Text>
            </div>
            <div className="flex justify-center">
              <video
                className="relative w-[150px] h-[150px] object-cover"
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
          <div className="p-20 ">
            <Button onClick={handleSubmit(onSubmit)} variant="primary" size="full" label="Next" />
          </div>
        </Form>
      </HomeWizardPageTransition>
    </div>
  )
}

type BetFormProps = {
  amount: string
}

import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Form, Text } from '~/components'
import { TextInput } from '~/components/form/text-input'
import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export function BetStep({ next, prev }: WizardStepProps) {
  const { handleSubmit, register } = useForm<BetFormProps>()
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardPageTransition>
        <div className="py-10"></div>
        <Form>
          <Text variant="display-1">Select Bet</Text>
          <div className="flex flex-col gap-6">
            <TextInput
              id="amount"
              placeholder="Amount"
              formProps={{
                ...register('amount', { required: true }),
              }}
            />
          </div>
        </Form>
      </HomeWizardPageTransition>
    </div>
  )
}

type BetFormProps = {
  amount: string
}

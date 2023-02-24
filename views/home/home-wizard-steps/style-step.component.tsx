import React from 'react'

import { WizardStepProps } from '~/components/wizard'

import { HomeWizardStepNav } from '../home-wizard-header'
import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export function StyleStep({ next, prev }: WizardStepProps) {
  return (
    <div className="wizard-step-wrapper ">
      <HomeWizardStepNav label="Style" prev={prev} step={2} />

      <HomeWizardPageTransition></HomeWizardPageTransition>
    </div>
  )
}

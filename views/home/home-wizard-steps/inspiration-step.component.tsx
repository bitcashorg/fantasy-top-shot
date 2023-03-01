import React from 'react'

import { WizardStepProps } from '~/components/wizard'
import { HomeWizardPageTransition } from '~/views/home/home-wizard/home-wizard-page-transition.component'

import { HomeWizardStepNav } from '../home-wizard-header'

export function InspirationStep({ prev, next }: WizardStepProps) {
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="Inspiration" prev={prev} step={3} />
      <HomeWizardPageTransition></HomeWizardPageTransition>
      <div className="py-5"></div>
    </div>
  )
}

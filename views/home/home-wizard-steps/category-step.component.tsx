import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export const categories = [
  { label: 'Cinema', value: 'cinema' },
  { label: 'Video Games', value: 'video_games' },
  { label: 'Interior Design', value: 'interior_design' },
  { label: 'Graphic Design', value: 'graphic_design' },
  { label: 'Illustration', value: 'illustration' },
  { label: 'Fashion Design', value: 'fashion_design' },
  { label: 'Food', value: 'food' },
]

export function CategoryStep({ next, prev }: WizardStepProps) {
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="Category" prev={prev} step={1} />

      <HomeWizardPageTransition></HomeWizardPageTransition>
    </div>
  )
}

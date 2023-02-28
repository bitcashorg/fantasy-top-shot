import { WizardStep } from '~/components/wizard'

import { BetStep } from './bet-step.component'

export * from './inspiration-step.component'

export const homeWizardSteps: WizardStep[] = [
  {
    name: 'bet',
    component: BetStep,
  },
  // {
  //   name: 'mint',
  //   component: MintStep,
  // },
]

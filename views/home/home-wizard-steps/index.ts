import { WizardStep } from '~/components/wizard'

import { BetStep } from './bet-step.component'
import { PlayStep } from './play.component'

export * from './inspiration-step.component'

export const homeWizardSteps: WizardStep[] = [
  {
    name: 'bet',
    component: BetStep,
  },
  {
    name: 'play',
    component: PlayStep,
  },
]

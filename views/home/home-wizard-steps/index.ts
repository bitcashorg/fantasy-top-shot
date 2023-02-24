import { WizardStep } from '~/components/wizard'

import { BetStep } from './bet-step.component'
import { ChatStep } from './chat-step.component'
import { InspirationStep } from './inspiration-step.component'
import { MintStep } from './mint-step.component'
import { StyleStep } from './style-step.component'

export * from './inspiration-step.component'

export const homeWizardSteps: WizardStep[] = [
  {
    name: 'bet',
    component: BetStep,
  },
  // {
  //   name: 'style',
  //   component: StyleStep,
  // },
  // {
  //   name: 'inspiration',
  //   component: InspirationStep,
  // },
  // {
  //   name: 'chat',
  //   component: ChatStep,
  // },
  // {
  //   name: 'mint',
  //   component: MintStep,
  // },
]

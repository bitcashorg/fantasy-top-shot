import clsx from 'clsx'
import React from 'react'
import { useEffectOnce } from 'react-use'

import { SendPromptIcon } from '~/components/icons'
import { wizartDescriptionHeader } from '~/lib/openai'

import { Text } from '../text/text'
import { OpenAIWizartChatProps } from './wizart-chat.types'

let replicateAssetRequested = false

// ? Can be other colors
const chatCardClass = (item: string) =>
  clsx('flex gap-3 relative', item === 'wizart' ? 'wizart-chat-globe-bg' : 'wizart-user-globe-bg')

export function WizartChat({ next }: OpenAIWizartChatProps) {
  return <div className="wizart-chat-wrapper"></div>
}

import { W, w } from 'windstitch'

import { t } from '~/lib/styles'

export const Text = w.button(t`font-bold `, {
  variants: {
    variant: {
      'display-1': t`text-2xl`,
      info: t`text-sm`,
      'info-2x': t`text-md`,
      loading: t`text-2xl text-black`,
    },
  },
  defaultVariants: {
    variant: 'display-1',
  },
})

export type TextProps = W.Infer<typeof Text>

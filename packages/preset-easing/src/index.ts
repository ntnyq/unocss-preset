import { camelCase, kekabCase } from '@ntnyq/utils'
import { easings } from './easings'
import type { PresetEasingOptions } from './types'
import type { Preset } from '@unocss/core'

export const presetEasing = ({ prefix = 'easing-' }: PresetEasingOptions = {}): Preset => {
  const selectorPattern = `${prefix}(${Object.keys(easings)
    .map(name => kekabCase(name))
    .join('|')})`

  return {
    name: 'unocss-preset-easing',

    rules: [
      [
        new RegExp(`^${selectorPattern}$`),
        ([, name]) => ({
          'transition-timing-function': easings[camelCase(name) as keyof typeof easings],
        }),
        {
          autocomplete: [selectorPattern],
        },
      ],
    ],
  }
}

export * from './types'
export * from './easings'

export default presetEasing

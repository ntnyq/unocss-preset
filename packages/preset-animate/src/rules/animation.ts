import { capitalize, kekabCase } from '@ntnyq/utils'
import { animations as animationMap } from '../animations'
import type { PresetAnimateOptions } from '../types'
import type { DynamicRule } from '@unocss/core'

export const createAnimationRules = (options: PresetAnimateOptions) => {
  const extendAnimations = Array.isArray(options.extendAnimations) ? options.extendAnimations : []
  const builtInAnimations = Object.values(animationMap)
  const animations = [...builtInAnimations, ...extendAnimations]
  const normalizedAnimation = animations.map(animation =>
    typeof animation === 'function' ? animation(options) : animation,
  )
  const rules = normalizedAnimation.map<DynamicRule>(animation => [
    new RegExp(`^animation-${kekabCase(animation.name)}$`),
    () => [
      `.animation-${kekabCase(animation.name)} {
         animation-name: unAnimation${capitalize(animation.name)};
          ${animation.extraStyle ?? ''}
      }`,
      `@keyframes unAnimation${capitalize(animation.name)} {
        ${animation.keyframes}
      }`,
    ],
    {
      autocomplete: [`animation-${kekabCase(animation.name)}`],
    },
  ])
  return rules
}

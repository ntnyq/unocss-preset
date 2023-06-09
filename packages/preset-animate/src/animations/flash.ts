import type { AnimationObject } from '../types'

export const flash: AnimationObject = {
  name: 'flash',
  keyframes: `
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  `,
}

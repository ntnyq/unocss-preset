import type { AnimationObject } from '../types'

export const slideOutLeft: AnimationObject = {
  name: 'slideOutLeft',
  keyframes: `
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  `,
}

import type { AnimationObject } from '../types'

export const slideInLeft: AnimationObject = {
  name: 'slideInLeft',
  keyframes: `
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  `,
}

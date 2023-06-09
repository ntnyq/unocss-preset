import type { AnimationObject } from '../types'

export const rollOut: AnimationObject = {
  name: 'rollOut',
  keyframes: `
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  `,
}

import type { AnimationObject } from '../types'

export const fadeInRightUp: AnimationObject = {
  name: 'fadeInRightUp',
  keyframes: `
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
}

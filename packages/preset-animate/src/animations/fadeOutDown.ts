import type { AnimationObject } from '../types'

export const fadeOutDown: AnimationObject = {
  name: 'fadeOutDown',
  keyframes: `
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  `,
}

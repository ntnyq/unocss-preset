import type { AnimationObject } from '../types'

export const fadeOutUp: AnimationObject = {
  name: 'fadeOutUp',
  keyframes: `
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  `,
}

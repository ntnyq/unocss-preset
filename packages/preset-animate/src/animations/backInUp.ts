import type { AnimationObject } from '../types'

export const backInUp: AnimationObject = {
  name: 'backInUp',
  keyframes: `
    0% {
      transform: translateY(1200px) scale(0.7);
      opacity: 0.7;
    }

    80% {
      transform: translateY(0px) scale(0.7);
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,
}

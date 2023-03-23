import type { AnimationObject } from '../types'

export const backInRight: AnimationObject = {
  name: 'backInRight',
  keyframes: `
    0% {
      transform: translateX(2000px) scale(0.7);
      opacity: 0.7;
    }

    80% {
      transform: translateX(0px) scale(0.7);
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,
}

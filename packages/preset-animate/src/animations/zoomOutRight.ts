import type { AnimationObject } from '../types'

export const zoomOutRight: AnimationObject = {
  name: 'zoomOutRight',
  extraStyle: 'transform-origin: right center;',
  keyframes: `
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }

    to {
      opacity: 0;
      transform: scale(0.1) translate3d(2000px, 0, 0);
    }
  `,
}

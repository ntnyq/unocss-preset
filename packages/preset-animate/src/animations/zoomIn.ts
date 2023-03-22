import type { AnimationObject } from '../types'

export const zoomIn: AnimationObject = {
  name: 'zoomIn',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }`,
}

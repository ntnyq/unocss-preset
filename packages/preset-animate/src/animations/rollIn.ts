import type { AnimationObject } from '../types'

export const rollIn: AnimationObject = {
  name: 'rollIn',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }`,
}

import type { AnimationObject } from '../types'

export const shakeY: AnimationObject = {
  name: 'shakeY',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(0, -10px, 0);
    }

    20%,
    40%,
    60%,
    80% {
      transform: translate3d(0, 10px, 0);
    }
  }`,
}

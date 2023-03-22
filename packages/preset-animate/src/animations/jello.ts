import type { AnimationObject } from '../types'

export const jello: AnimationObject = {
  name: 'jello',
  extraStyle: 'transform-origin: center;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }

    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  }`,
}

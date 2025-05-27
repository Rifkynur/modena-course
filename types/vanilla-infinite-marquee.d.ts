declare module 'vanilla-infinite-marquee' {
  interface InfiniteMarqueeOptions {
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    startOnLoad?: boolean;
    delayBeforeStart?: number;
  }

  export default class InfiniteMarquee {
    constructor(element: HTMLElement, options?: InfiniteMarqueeOptions);
  }
}

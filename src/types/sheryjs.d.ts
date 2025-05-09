declare module 'sheryjs' {
  interface ImageEffectConfig {
    style?: number;
    config?: Record<string, any>;
    gooey?: boolean;
    [key: string]: any;
  }

  interface SheryStatic {
    imageEffect: (selector: string, config: ImageEffectConfig) => void;
    mouseFollower: (config?: Record<string, any>) => void;
    makeMagnet: (selector: string, config?: Record<string, any>) => void;
    hoverWithMediaCircle: (selector: string, config?: Record<string, any>) => void;
    [key: string]: any;
  }

  const Shery: SheryStatic;
  export default Shery;
}

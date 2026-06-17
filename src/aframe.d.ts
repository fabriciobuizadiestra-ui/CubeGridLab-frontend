declare module 'aframe' {
  export interface AFrameScene extends HTMLElement {}
  export interface AFrameEntity extends HTMLElement {}
  export interface AFrameComponent extends HTMLElement {}
}

declare namespace JSX {
  interface IntrinsicElements {
    'a-scene': any;
    'a-entity': any;
    'a-box': any;
    'a-sphere': any;
    'a-cylinder': any;
    'a-plane': any;
    'a-camera': any;
    'a-light': any;
    'a-sky': any;
    'a-image': any;
    'a-video': any;
    'a-ring': any;
    'a-cone': any;
    'a-torus': any;
    'a-text': any;
    'a-gltf-model': any;
    [elemName: string]: any;
  }
}

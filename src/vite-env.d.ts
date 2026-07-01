/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react-dom/client' {
  import type { ReactNode } from 'react'
  
  export interface Root {
    render(children: ReactNode): void
    unmount(): void
  }
  
  export function createRoot(container: Element | DocumentFragment, options?: any): Root
}

declare module '*.css' {
  const content: string
  export default content
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

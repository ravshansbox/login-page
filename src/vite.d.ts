/// <reference types="vite/client" />

declare module '*&as=picture' {
  export interface PictureSource {
    img: { src: string }
    sources: Record<string, string>
  }
  const picture: PictureSource
  export default picture
}

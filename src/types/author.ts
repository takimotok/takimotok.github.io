// @TODO: src/content.config.ts で定義してあるものを流用できないか?
export interface Author {
  name: string
  avator: ImageMetadata
  occupation: string
  company: string
  shortBio: string
  github?: string
  twitter?: string
  blog?: string
}

export interface AuthorLayoutProps {
  content: Author
}

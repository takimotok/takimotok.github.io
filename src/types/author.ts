// @TODO: can I use almost the same definitions in src/content.config.ts ?
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

import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/authors' }),
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    occupation: z.string().optional(),
    shortBio: z.string(),
    company: z.string().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    blog: z.string().url().optional(),
    layout: z.string().url().optional(),
  }),
})

const resumes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/resumes' }),
  schema: z.object({
    name: z.string(),
    kana: z.string().optional(),
    shortBio: z.string(),
    birthDate: z.string().optional(),
    address: z.string().optional(),
    lastEducation: z.string().optional(),
    occupation: z.string().optional(),
    company: z.string().optional(),
    site: z.string().url().optional(),
  }),
})

export const collections = { authors, resumes }

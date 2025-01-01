import { defineCollection, z } from 'astro:content'

const authors = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    name: z.string(),
    shortBio: z.string(),
    occupation: z.string().optional(),
    company: z.string().optional(),
    site: z.string().url().optional(),
  }),
})

export const collections = { authors, resumes }

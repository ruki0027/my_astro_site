// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const log = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // 支援 YYYY-MM-DD（string）或 Date
    date: z.union([z.string(), z.date()]),
    // 草稿標記，可省略，預設 false
    draft: z.boolean().optional().default(false),
  }),
})

export const collections = { log }

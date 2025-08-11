// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const log = defineCollection({
  type: 'content',            // 讀 md 檔
  schema: z.object({
    title: z.string(),
    // 允許 YYYY-MM-DD（string）或 Date
    date: z.union([z.string(), z.date()]),
  }),
})

export const collections = { log }

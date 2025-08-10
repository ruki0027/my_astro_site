// src/content.config.ts
import { defineCollection, z } from "astro:content";

const log = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { log };

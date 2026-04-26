import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const course = defineCollection({
  loader: glob({ base: "./src/content/course", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    lessonNumber: z.number(),
    part: z.number(),
    partTitle: z.string(),
    description: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    videoId: z.string().optional(),
  }),
});

export const collections = { course };

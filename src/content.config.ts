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
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default("William Mattingly"),
    category: z.string().optional(),
    description: z.string().optional(),
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = { course, blog };

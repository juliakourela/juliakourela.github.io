import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

const garden = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    updated: z.date(),
    stage: z.enum(['seedling', 'budding', 'evergreen']).default('seedling'),
    description: z.string().optional(),
  }),
});

export const collections = { blog, garden };

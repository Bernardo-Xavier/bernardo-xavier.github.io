import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One folder per post: src/content/blog/<slug>/index.md plus its images.
const blog = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      instagram: z.string().url().optional(),
    }),
});

export const collections = { blog };

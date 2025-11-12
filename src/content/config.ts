import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sidebar: z.enum(['default', 'photo']).optional().default('default'),
  }),
});

export const collections = {
  'pages': pagesCollection,
};

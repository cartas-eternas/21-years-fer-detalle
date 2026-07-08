import { z, defineCollection } from 'astro:content';

const messagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sender: z.string(),
    type: z.enum(['text', 'video']),
    videoUrl: z.string().optional(),
  }),
});

export const collections = {
  'messages': messagesCollection,
};
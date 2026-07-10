import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Import the glob loader

const messagesCollection = defineCollection({
  // Use the loader to point to your Markdown files
  loader: glob({ pattern: "**/*.md", base: "./src/content/messages" }),
  schema: z.object({
    sender: z.string(),
    type: z.enum(['text', 'video']),
    videoUrl: z.string().optional(),
  }),
});

export const collections = {
  'messages': messagesCollection,
};
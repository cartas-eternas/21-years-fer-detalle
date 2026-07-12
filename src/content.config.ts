import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const messages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/messages" }),
  schema: z.object({
    sender: z.string(),
    type: z.enum(["text", "video", "image"]),
    videoUrl: z.string().optional(),
    imageUrls: z.array(z.string()).optional(),
    isAngel: z.boolean().optional().default(false),
  }),
});

export const collections = {
  messages,
};
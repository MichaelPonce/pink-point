import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // El nuevo loader escanea automáticamente todos los archivos .md en esta ruta
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

const appsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/apps" }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    playStoreUrl: z.string().url(),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'apps': appsCollection,
};
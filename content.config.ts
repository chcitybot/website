import { defineContentConfig, defineCollection, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
          // one “directory” above /blog, then /blog/*.md
          // works for /en/blog, /de/blog, /fr/blog, …
          source: '**/blog/*.md',
          type: 'page',
          schema: z.object({
            tags: z.array(z.string()),
            title: z.string(),
            description: z.string(),
            image: z.string(),
            date: z.string()
          })
        })
        
      }
})
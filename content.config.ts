import { defineContentConfig, defineCollection, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
          source: 'blog/*.md',
          type: 'page',
          schema: z.object({
            tags: z.array(z.string()),
            title: z.string(),
            description: z.string(),
            image: z.string(),
            date: z.date()
          })
        })
        
      }
})
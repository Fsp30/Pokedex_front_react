import { z } from 'zod'

export const opinionResponseSchema = z.object({
        user_id: z.string(),
        text: z.string(),
        created_at: z.number() 
})

export const opinionListResponseSchema = z.object({
  likes: z.number(),
  opinions: z.array(opinionResponseSchema)
})

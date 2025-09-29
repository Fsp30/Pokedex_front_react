import { z } from 'zod'

export const opinionResponseSchema = z.object({
        id: z.string(),
        user_id: z.string(),
        text: z.string(),
})

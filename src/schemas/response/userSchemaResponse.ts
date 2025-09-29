import { z } from 'zod'

export const userResponseSchema = z.object({
        id: z.string(),
        userName: z.string(),
})
import { z } from 'zod'

export const createUserInput = z.object({
        userName: z.string().min(2, "Very short name")
})
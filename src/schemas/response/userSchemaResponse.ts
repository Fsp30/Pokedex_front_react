
import { z } from "zod"

export const userResponseSchema = z.object({
        message: z.string(),
        user: z.object({
                id: z.string(),
                name: z.string(),
        })
}).transform(data => ({
        id: data.user.id,
        userName: data.user.name,
}))

export type User = z.infer<typeof userResponseSchema>
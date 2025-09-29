import type z from "zod";
import { api } from "../api_client/axios";
import { createUserInput } from "../schemas/request/userSchemaRequest";
import { userResponseSchema } from '../schemas/response/userSchemaResponse';

type User = z.infer<typeof userResponseSchema>

export async function createUser(userName: string): Promise<User> {
        try {
                const validatedInput = createUserInput.parse({ userName }) 
                const { data } = await api.post('/users', validatedInput) 

                return userResponseSchema.parse(data)
        } catch (err: any) {
                throw new Error(err.response?.data?.error || err.message || "Error creating user")
        }
}
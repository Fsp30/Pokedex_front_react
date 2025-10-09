import type z from "zod";
import type { userResponseSchema } from "../schemas/response/userSchemaResponse";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/userService";
import type { createUserInput } from "../schemas/request/userSchemaRequest";

type User = z.infer<typeof userResponseSchema>
type CreateUserInput = z.infer<typeof createUserInput>

export function useCreateUser() {
        const mutation = useMutation<User, unknown, CreateUserInput>({
                mutationFn: (input) => createUser(input.userName),
        })

        return mutation
}
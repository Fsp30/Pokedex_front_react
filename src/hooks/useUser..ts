import type z from "zod";
import type { userResponseSchema } from "../schemas/response/userSchemaResponse";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/userService";

type User = z.infer<typeof userResponseSchema>
type CreateUserInput = Parameters<typeof createUser>[0]

export function useCreateUser() {
        const mutation = useMutation<User, unknown, CreateUserInput>({
                mutationFn: (input) => createUser(input),
        })

        return mutation
}

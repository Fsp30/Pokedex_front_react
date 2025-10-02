import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUser } from "../../hooks/useUser";
import { createUserInput } from "../../schemas/request/userSchemaRequest";
import type z from "zod";

type CreateUserInput = z.infer<typeof createUserInput>

export function CreateUser() {
        const { mutate, data: user, isPending, isError, error } = useCreateUser();

        const {register, handleSubmit, formState: { errors }, reset
                } = useForm<CreateUserInput>({
                        resolver: zodResolver(createUserInput)
        })

        const onSubmit = (data: CreateUserInput) => {
                mutate(data, {
                        onSuccess: () => { reset() }
                })
        }

        if (isPending) return <p>Loading...</p>;

        return (
                <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                        <label htmlFor="userName">Nome do usuário:</label>
                                        <input
                                                {...register("userName")}
                                                type="text"
                                                id="userName"
                                        />
                                        {errors.userName && (
                                                <p style={{ color: "red" }}>{errors.userName.message}</p>
                                        )}
                                </div>

                                <button type="submit" disabled={isPending}>
                                        {isPending ? "Criando..." : "Criar Usuário"}
                                </button>
                        </form>

                        {isError && (
                                <p style={{ color: "red" }}>
                                        Erro: {error instanceof Error ? error.message : "Erro desconhecido"}
                                </p>
                        )}

                        {user && (
                                <div style={{ marginTop: "20px" }}>
                                        <h2>Usuário Criado com Sucesso!</h2>
                                        <p><strong>ID:</strong> {user.id}</p>
                                        <p><strong>Nome:</strong> {user.userName}</p>
                                </div>
                        )}
                </div>
        );
}
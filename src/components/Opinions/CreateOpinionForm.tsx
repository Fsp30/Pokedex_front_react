import type z from "zod";
import { createOpinionInputSchema } from "../../schemas/request/pokemonSchemaRequest";
import { useAddOpinion } from "../../hooks/useOpinions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type CreateOpinion = z.infer<typeof createOpinionInputSchema>

export function CreateOpinionForm() {
        const { mutate, isPending, isError, error } = useAddOpinion()
        const [isSuccess, setIsSuccess] = useState(false)

        const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateOpinion>({
                resolver: zodResolver(createOpinionInputSchema)
        })

        const onSubmit = (data: CreateOpinion) => {
                mutate(data, {
                        onSuccess: () => {
                                reset()
                                setIsSuccess(true)
                                setTimeout(() => setIsSuccess(false), 3000)
                        }
                })
        }

        return (
                <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                        <label htmlFor="user_id">
                                                ID do usuário:
                                        </label>
                                        <input {...register("user_id")} type="text" id="user_id" />
                                        {errors.user_id && (
                                                <p style={{ color: "red" }}>{errors.user_id.message}</p>
                                        )}
                                </div>
                                <div>
                                        <label htmlFor="pokemon_name">
                                                Nome do Pokemon:
                                        </label>
                                        <input {...register("pokemon_name")} type="text" id="pokemon_name" />
                                        {errors.pokemon_name && (
                                                <p style={{ color: "red" }}>{errors.pokemon_name.message}</p>
                                        )}
                                </div>
                                <div>
                                        <label htmlFor="text">
                                                Opinião:
                                        </label>
                                        <textarea {...register("text")} id="text" rows={4} />
                                        {errors.text && (
                                                <p style={{ color: "red" }}>{errors.text.message}</p>
                                        )}
                                </div>

                                <button type="submit" disabled={isPending}>
                                        {isPending ? "Criando opinião..." : "Criar Opinião"}
                                </button>
                        </form>

                        {isPending && <p>Carregando...</p>}

                        {isError && (
                                <p style={{ color: "red" }}>
                                        Erro: {error instanceof Error ? error.message : "Erro desconhecido"}
                                </p>
                        )}

                        {isSuccess && (
                                <div style={{ marginTop: "20px", color: "green" }}>
                                        <p>Opinião criada com sucesso!</p>
                                </div>
                        )}
                </div>
        )
}
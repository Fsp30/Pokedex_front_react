import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemon, likePokemon } from "../services/pokemonService";
import type z from "zod";
import type { pokemonFullResponseSchema } from "../schemas/response/pokemonSchemaResponse";

type Pokemon = z.infer<typeof pokemonFullResponseSchema>

export function usePokemon(name: string) {
        return useQuery<Pokemon>({
                queryKey: ["pokemon", name],
                queryFn: () => getPokemon(name),
                enabled: !!name,
        })
}


export function useLikePokemon(name: string) {
        const queryClient = useQueryClient()

        return useMutation({
                mutationFn: async (): Promise<void> => {
                        await likePokemon(name)
                },

                onMutate: async () => {
                        await queryClient.cancelQueries({ queryKey: ["pokemon", name] })
                        const previousPokemon = queryClient.getQueryData<Pokemon>(["pokemon", name])

                        if (previousPokemon) {
                                queryClient.setQueryData<Pokemon>(["pokemon", name], {
                                        ...previousPokemon,
                                        likes: (previousPokemon.likes ?? 0) + 1
                                })
                        }

                        return { previousPokemon }
                },

                onError: (err, _variables, context) => {
                        if (context?.previousPokemon) {
                                console.log(err)
                                queryClient.setQueryData(["pokemon", name], context.previousPokemon)
                        }
                },

                onSettled: () => {
                        queryClient.invalidateQueries({ queryKey: ["pokemon", name] })
                },
        })
}
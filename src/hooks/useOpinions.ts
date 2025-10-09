import type z from "zod";
import type { opinionListResponseSchema } from "../schemas/response/opinionSchemaResponse";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getPokemonOpinions } from "../services/opinionPokemonService";
import type { pokemonFullResponseSchema } from "../schemas/response/pokemonSchemaResponse";
import type { createOpinionInputSchema } from "../schemas/request/pokemonSchemaRequest";
import { CreateOpinionPokemon } from "../services/opinionPokemonService";


type ListOpinions = z.infer<typeof opinionListResponseSchema>
type Pokemon = z.infer<typeof pokemonFullResponseSchema>
type CreateOpinionInput = z.infer<typeof createOpinionInputSchema>

export function useListOpinions(name: string) {
    return useQuery<ListOpinions>({
        queryKey: ["pokemon_opinion", name],
        queryFn: () => getPokemonOpinions(name),
        enabled: !!name,
        retry: 1
    })
}


export function useAddOpinion() {
    const queryClient = useQueryClient()

    return useMutation<void, unknown, CreateOpinionInput, { previousPokemon?: Pokemon }>({
        mutationFn: (input) => CreateOpinionPokemon(input.pokemon_name, input),

        onMutate: async (input) => {
            await queryClient.cancelQueries({ queryKey: ["pokemon", input.pokemon_name] })

            const previousPokemon = queryClient.getQueryData<Pokemon>(["pokemon", input.pokemon_name])

            if (previousPokemon) {
                const newOpinion = {
                    user_id: input.user_id,
                    text: input.text,
                    created_at: Date.now() / 1000,
                }

                queryClient.setQueryData<Pokemon>(["pokemon", input.pokemon_name], {
                    ...previousPokemon,
                    opinions: [...previousPokemon.opinions, newOpinion],
                })
            }

            return { previousPokemon }
        },

        onError: (err, variables, context) => {
            if (context?.previousPokemon && variables.pokemon_name) {
                queryClient.setQueryData(["pokemon", variables.pokemon_name], context.previousPokemon)
            }
            console.error("Erro ao adicionar opinião:", err)
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["pokemon", name] })
        }
    })
}

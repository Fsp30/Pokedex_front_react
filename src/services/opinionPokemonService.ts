import { api } from '../api_client/axios'
import { createOpinionInputSchema, listOpinionsInputSchema } from '../schemas/request/pokemonSchemaRequest'
import { opinionListResponseSchema } from '../schemas/response/opinionSchemaResponse'
import type { z } from 'zod'

type CreateOpinionInput = z.infer<typeof createOpinionInputSchema>
type OpinionListResponse = z.infer<typeof opinionListResponseSchema>

export async function CreateOpinionPokemon(pokemon_name: string, params: CreateOpinionInput): Promise<void> {
        try {
                const validatedParams = createOpinionInputSchema.parse(params)
                await api.post(`/pokemon/${pokemon_name}/opinion`, {
                        user_id: validatedParams.user_id,
                        text: validatedParams.text
                })
                return
        } catch (err: any) {
                throw new Error(err.response?.data?.error || err.message || "Error adding opinion to Pokemon")
        }
}

export async function getPokemonOpinions(pokemon_name: string): Promise<OpinionListResponse> {
        try {
                const validatedInput = listOpinionsInputSchema.parse({ name: pokemon_name })
                const { data } = await api.get(`/pokemon/${validatedInput.name}/opinions`)

                return opinionListResponseSchema.parse(data)
        } catch (err: any) {
                throw new Error(err.response?.data?.error || err.message || "Error fetching Pokemon opinions")
        }
}
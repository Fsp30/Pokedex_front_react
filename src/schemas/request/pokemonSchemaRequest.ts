import { z } from 'zod'


export const getPokemonInputSchema = z.object({
        name: z.string().min(2, "Very short pokemon name")
})

export const likePokemon = z.object({
        name: z.string().min(2, "Very short pokemon name")
})

export const createOpinionInputSchema = z.object({
        user_id: z.string().min(1),
        text: z.string().min(3, "Very shot opinion")
})

export const listOpinionsInputSchema = z.object({
        name: z.string().min(2, "Very short pokemon name")
})
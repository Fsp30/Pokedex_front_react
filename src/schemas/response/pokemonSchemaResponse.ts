import { z } from "zod";
import { opinionResponseSchema } from "./opinionSchemaResponse";

const namedAPIResourceSchema = z.object({
        name: z.string(),
        url: z.string(),
})


const spritesSchema = z.object({
        front_default: z.string().nullable(),
        back_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_female: z.string().nullable().optional(),
        back_female: z.string().nullable().optional(),
        front_shiny_female: z.string().nullable().optional(),
        back_shiny_female: z.string().nullable().optional(),
})

const abilitySchema = z.object({
        ability: namedAPIResourceSchema,
        is_hidden: z.boolean(),
        slot: z.number(),
})


const formSchema = namedAPIResourceSchema;


const gameIndexSchema = z.object({
        game_index: z.number(),
        version: namedAPIResourceSchema,
})


const heldItemSchema = z.object({
        item: namedAPIResourceSchema,
        version_details: z.array(
                z.object({
                        rarity: z.number(),
                        version: namedAPIResourceSchema,
                })
        ),
})


const moveSchema = z.object({
        move: namedAPIResourceSchema,
        version_group_details: z.array(
                z.object({
                        level_learned_at: z.number(),
                        move_learn_method: namedAPIResourceSchema,
                        version_group: namedAPIResourceSchema,
                })
        ),
})

const speciesSchema = namedAPIResourceSchema


const statSchema = z.object({
        base_stat: z.number(),
        effort: z.number(),
        stat: namedAPIResourceSchema,
})

const typeSchema = z.object({
        slot: z.number(),
        type: namedAPIResourceSchema,
})

export const pokemonResponseSchema = z.object({
        id: z.number(),
        name: z.string(),
        base_experience: z.number().nullable(),
        height: z.number(),
        weight: z.number(),
        order: z.number(),
        is_default: z.boolean(),
        sprites: spritesSchema,
        abilities: z.array(abilitySchema),
        forms: z.array(formSchema),
        game_indices: z.array(gameIndexSchema),
        held_items: z.array(heldItemSchema),
        location_area_encounters: z.string(),
        moves: z.array(moveSchema),
        species: speciesSchema,
        stats: z.array(statSchema),
        types: z.array(typeSchema),

        likes: z.number().default(0),
        opinionsCount: z.number().default(0),
})

export const pokemonFullResponseSchema = z.object({
        api_data: pokemonResponseSchema,
        likes: z.number(),
        opinions: z.array(opinionResponseSchema)
})
import { api } from '../api_client/axios'
import { z } from 'zod'
import { pokemonFullResponseSchema } from '../schemas/response/pokemonSchemaResponse'

type Pokemon = z.infer<typeof pokemonFullResponseSchema>

export async function getPokemon(pokemon_name:string): Promise<Pokemon> {
        try{
                const {data} = await api.get(`/pokemon/${pokemon_name}`)
                return pokemonFullResponseSchema.parse(data)
        }catch(err: any){
                throw new Error(err.response?.data?.message || err.message || "Error when searching Pokemon")
        }
}

export async function likePokemon(pokemon_name:string) {
        try{
                await api.post(`/pokemon/${pokemon_name}/like`)
                return 
        }catch(err: any){
                throw new Error( err.message || "Error add like Pokemon")
        }
}
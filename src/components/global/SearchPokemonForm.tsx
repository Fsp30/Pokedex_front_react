import { z } from 'zod';
import { getPokemonInputSchema } from '../../schemas/request/pokemonSchemaRequest';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PokemonCard } from '../Pokemon/PokemonCard';

type GetPokemon = z.infer<typeof getPokemonInputSchema>

export function SearchPokemonForm(){
        const [isPending, setIsPending] = useState(false)
        const [pokemonName, setPokemonName] = useState<string | null>(null);
        
        const { register, handleSubmit, formState: { errors }, reset } = useForm<GetPokemon>({
                resolver: zodResolver(getPokemonInputSchema)
        })

        const onSubmit = async (data: GetPokemon) => {
                setIsPending(true)
                try {
                        setPokemonName(data.name)
                        reset()
                } catch (error) {
                        console.error('Erro ao buscar Pokémon:', error)
                } finally {
                        setIsPending(false)
                }
        }

        return(
                <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                        <label htmlFor="name">
                                                Nome do Pokemon:
                                        </label>
                                        <input {...register("name")} type="text" id='name' />
                                        {errors.name && (
                                                <p style={{color: "red"}}>{errors.name.message}</p>
                                        )}
                                </div>
                                <button type="submit" disabled={isPending}>
                                        {isPending ? "Buscando Pokemon..." : "Buscar Pokemon"}
                                </button>
                        </form>

                        {pokemonName && <PokemonCard name={pokemonName} />}
                </div>
        );
}
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonLikes } from "./PokemonLikes";

interface PokemonAllStatsProps {
        name: string
}

export function PokemonAllStats({ name }: PokemonAllStatsProps) {
        const { data: pokemon, isLoading } = usePokemon(name)

        if (isLoading) return <p>Loading...</p>
        if (!pokemon) return <p>Pokemon não encontrado</p>

        return (
                <>
                        <div className="pokemon-card">
                                <div className="pokemon-header">
                                        <h2>{pokemon.api_data.name}</h2>
                                        <p># {pokemon.api_data.id}</p>
                                </div>

                                <div className="pokemon-sprites">
                                        {pokemon.api_data.sprites.front_default && (
                                                <img
                                                        src={pokemon.api_data.sprites.front_default}
                                                        alt={`${pokemon.api_data.name} front`}
                                                />
                                        )}
                                        {pokemon.api_data.sprites.back_default && (
                                                <img
                                                        src={pokemon.api_data.sprites.back_default}
                                                        alt={`${pokemon.api_data.name} back`}
                                                />
                                        )}
                                </div>

                                <div>
                                        <h3>Tipos</h3>
                                        <div>
                                                {pokemon.api_data.types.map((type) => (
                                                        <span key={type.slot} className={`type type-${type.type.name}`}>
                                                                {type.type.name}
                                                        </span>
                                                ))}
                                        </div>
                                </div>

                                <div className="pokemon-abilities">
                                        <h3>Habilidades</h3>
                                        <ul>
                                                {pokemon.api_data.abilities.map((ability) => (
                                                        <li key={ability.ability.name}>
                                                                {ability.ability.name}
                                                                {ability.is_hidden && " (Hidden)"}
                                                        </li>
                                                ))}
                                        </ul>
                                </div>

                                <div className="pokemon-physical">
                                        <p><strong>Altura:</strong> {pokemon.api_data.height / 10}m</p>
                                        <p><strong>Peso:</strong> {pokemon.api_data.weight / 10}kg</p>
                                        <p><strong>Experiência Base:</strong> {pokemon.api_data.base_experience || "N/A"}</p>
                                </div>
                        </div>
                        <PokemonLikes  name={name}/>
                </>
        )
}
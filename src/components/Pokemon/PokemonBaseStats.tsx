import { usePokemon } from "../../hooks/usePokemon";

interface PokemonBaseStatsProps {
        name: string;
}

export function PokemonBaseStats({ name }: PokemonBaseStatsProps) {
        const { data: pokemon, isLoading } = usePokemon(name);

        if (isLoading) return <p>Loading...</p>;
        if (!pokemon) return <p>Pokemon não encontrado</p>;

        return (
                <div>
                        <h3>Estatísticas Base</h3>
                        {pokemon.api_data.stats.map((stat) => (
                                <div key={stat.stat.name}>
                                        <span>{stat.stat.name}:</span>
                                        <span>{stat.base_stat}</span>
                                </div>
                        ))}
                </div>
        );
}
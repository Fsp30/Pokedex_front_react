import { useListOpinions } from "../../hooks/useOpinions";
import { usePokemon } from "../../hooks/usePokemon";

interface PokemonOpinionsProps {
        name: string;
}

export function PokemonOpinions({ name }: PokemonOpinionsProps) {
        const { data: pokemonStats, isPending: isPokemonPending } = usePokemon(name);
        const { data: pokemonOpinions, isLoading: isOpinionsLoading  } = useListOpinions(name);

        if (isOpinionsLoading || isPokemonPending) return <p>Loading...</p>;

        if (!pokemonStats) return <p>Pokemon não encontrado</p>;
        if (!pokemonOpinions) return <p>Nenhuma opinião encontrada para {name}</p>;

        return (
                <div>
                        <div>
                                <h2>{pokemonStats.api_data.name}</h2>
                                {pokemonStats.api_data.sprites.front_default && (
                                        <img
                                                src={pokemonStats.api_data.sprites.front_default}
                                                alt={`${pokemonStats.api_data.name} front`}
                                        />
                                )}
                        </div>

                        <p><strong>Total de Opiniões:</strong> {pokemonOpinions.opinions?.length || 0}</p>

                        {pokemonOpinions.opinions && pokemonOpinions.opinions.length > 0 && (
                                <div>
                                        <h3>Opiniões</h3>
                                        <div>
                                                {pokemonOpinions.opinions.map((opinion) => (
                                                        <div key={`${opinion.user_id}-${opinion.created_at}`}>
                                                                <p><strong>{opinion.user_id}:</strong> {opinion.text}</p>
                                                                <small>
                                                                        {new Date(opinion.created_at).toLocaleDateString()}
                                                                </small>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        )}
                </div>
        )
}
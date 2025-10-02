import { useListOpinions } from "../../hooks/useOpinions";

interface PokemonOpinionsProps {
        name: string
}

export function PokemonOpinions({ name }: PokemonOpinionsProps) {
        const { data: pokemon, isLoading } = useListOpinions(name)

        if (isLoading) return <p>Loading...</p>
        if (!pokemon) return <p>Pokemon não encontrado</p>
        if (!pokemon?.opinions) return <p>Nenhuma opinião encontrada para {name}</p>

        return (
                <div>
                        <p><strong>Total de Opiniões:</strong> {pokemon.opinions?.length || 0}</p>

                        {pokemon.opinions && pokemon.opinions.length > 0 && (
                                <div>
                                        <h3>Opiniões</h3>
                                        <div>
                                                {pokemon.opinions.map((opinion) => (
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
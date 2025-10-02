import { useLikePokemon, usePokemon } from "../../hooks/usePokemon";
import { useState, useEffect } from "react";

interface PokemonLikesProps {
        name: string
}

export function PokemonLikes({ name }: PokemonLikesProps) {
        const { data: pokemon, isLoading } = usePokemon(name)
        const likeMutation = useLikePokemon(name)

        const [optimisticLikes, setOptimisticLikes] = useState(0);
        const [liked, setLiked] = useState(false)

        useEffect(() => {
                if (pokemon) {
                        setOptimisticLikes(pokemon.likes)
                }
        }, [pokemon])

        if (isLoading) return <p>Loading...</p>
        if (!pokemon) return <p>Pokemon não encontrado</p>

        const handleLike = () => {

                setOptimisticLikes((prev) => prev + 1)
                setLiked(true)

                likeMutation.mutate(undefined, {
                        onError: () => {

                                setOptimisticLikes((prev) => prev - 1);
                                setLiked(false);
                        },
                })
        }

        return (
                <div>
                        <p>
                                <strong>Likes:</strong> {optimisticLikes}
                        </p>

                        {!liked && (
                                <button onClick={handleLike} disabled={likeMutation.isPending}>
                                        Curtir
                                </button>
                        )}
                </div>
        )
}

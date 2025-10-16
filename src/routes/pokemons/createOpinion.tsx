import { createFileRoute } from '@tanstack/react-router'
import { PokemonAddOpinionPage } from '../../pages/Pokemon/PokemonAddOpinions'

export const Route = createFileRoute('/pokemons/createOpinion')({
  component: PokemonAddOpinionPage,
})




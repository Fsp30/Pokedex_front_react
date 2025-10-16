import { createFileRoute } from '@tanstack/react-router'
import { PokemonHome } from '../../pages/Pokemon/PokemonStatus'

export const Route = createFileRoute('/pokemons/getPokemonStats')({
  component: PokemonHome,
})



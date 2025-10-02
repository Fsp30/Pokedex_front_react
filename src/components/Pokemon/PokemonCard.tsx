import { PokemonOpinions } from "../Opinions/OpinionsList";
import { PokemonAllStats } from "./PokemonAllStats";
import { PokemonBaseStats } from "./PokemonBaseStats";
import { PokemonLikes } from "./PokemonLikes";


interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name = "pikachu" }: PokemonCardProps) {
  return (
    <div className="pokemon-card-container">
      <PokemonAllStats name={name} />
      <PokemonBaseStats name={name} />
      <PokemonOpinions name={name} />
      <PokemonLikes name={name} />
    </div>
  );
}
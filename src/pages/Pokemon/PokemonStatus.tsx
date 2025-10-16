import { PokemonCard } from "../../components/Pokemon/PokemonCard";
import { DefaultLayout } from '../layout/DefaultLayout';

export function PokemonHome() {
        return (
             
                        <DefaultLayout>
                                <PokemonCard name={"pikachu"} />
                        <DefaultLayout/>
       
        )
}
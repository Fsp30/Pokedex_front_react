import { SearchPokemonForm } from "../../components/global/SearchPokemonForm";
import { DefaultLayout } from "../layout/DefaultLayout";

export function PokemonHome() {
        return (
                <DefaultLayout>
                        <main>
                                <h1>Buscar Pokemon</h1>
                                <SearchPokemonForm/>
                        </main>
                </DefaultLayout>
        );
}

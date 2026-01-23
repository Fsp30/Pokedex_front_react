import { Navbar } from "./Navbar";
import { SearchPokemonForm } from "./SearchPokemonForm";

export function Header() {
        return (
                <>
                        <header>
tabajara pokémon 
                                <Navbar/>
                                <div>
                                        <SearchPokemonForm />
                                </div>
                        </header>
                </>
        )
}
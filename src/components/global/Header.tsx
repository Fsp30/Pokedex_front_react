import { Navbar } from "./Navbar";
import { SearchPokemonForm } from "./SearchPokemonForm";

export function Header() {
        return (
                <>
                        <header>
                                <Navbar/>
                                <div>
                                        <SearchPokemonForm />
                                </div>
                        </header>
                </>
        )
}
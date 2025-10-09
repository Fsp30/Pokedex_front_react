import { SearchPokemonForm } from "../SearchPokemonForm";
import { RoutesList } from "./RoutesList";

export function Sidebar() {
        return (
                <>
                        <aside>
                                <div>
                                        <SearchPokemonForm />
                                </div>

                                <div>
                                        <RoutesList />
                                </div>
                        </aside>
                </>
        )
}
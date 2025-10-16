import { CreateOpinionForm } from "../../components/Opinions/CreateOpinionForm";
import { PokemonOpinions } from "../../components/Opinions/OpinionsList";
import { CreateUser } from "../../components/User/CreateUser";
import { SearchPokemonForm } from '../../components/global/SearchPokemonForm';

export function UserHome() {
        return (
                <>
                        {/* <CreateOpinionForm /> */}
                        <SearchPokemonForm/>
                        {/* <PokemonOpinions name={"pikachu"} /> */}
                </>
        )
}
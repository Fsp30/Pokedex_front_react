import { CreateOpinionForm } from "../../components/Opinions/CreateOpinionForm";
import { DefaultLayout } from "../layout/DefaultLayout";

export function PokemonAddOpinionPage() {
        return (
                <DefaultLayout>
                        <strong>Poe a opinião ai jae</strong>
                        <CreateOpinionForm />
                </DefaultLayout>
        )
}
import { DefaultLayout } from "../layout/DefaultLayout";
import { CreateUser } from "../../components/User/CreateUser";

export function UserHome() {
        return (
                <DefaultLayout>
                        <main>
                                <CreateUser />
                        </main>
                </DefaultLayout>


        )
}
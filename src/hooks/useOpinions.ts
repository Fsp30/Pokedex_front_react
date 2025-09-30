import type z from "zod";
import type { opinionListResponseSchema } from "../schemas/response/opinionSchemaResponse";
import type { listOpinionsInputSchema } from "../schemas/request/pokemonSchemaRequest";
import { useQuery } from "@tanstack/react-query";
import { getPokemonOpinions } from "../services/opinionPokemonService";

type ListOpinions = z.infer<typeof opinionListResponseSchema>
type InputOpinion = z.infer<typeof listOpinionsInputSchema>

export function useListOpinions(name: string) {
        return useQuery<ListOpinions>({
                queryKey: ["pokemon_opinion", name],
                queryFn: () => getPokemonOpinions(name),
                enabled: !!name
        })
}


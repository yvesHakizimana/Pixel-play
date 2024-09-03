import {FetchResponse} from "../services/api-client.ts";
import {GameQuery} from "../App.tsx";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {Platform} from "./usePlatforms.ts";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
    useQuery<Game[], Error>({
        queryKey: ['game', gameQuery],
        queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
            params:
                {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery?.platform?.id,
                    ordering: gameQuery?.sortOrder,
                    search: gameQuery?.searchText
                }
        }).then(res => res.data.results)
    })

export default useGames;
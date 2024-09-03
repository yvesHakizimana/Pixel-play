import ApiClient from "../services/api-client.ts";
import {GameQuery} from "../App.tsx";
import {useQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number
}

const apiClient = new ApiClient<Game>('/games')


const useGames = (gameQuery: GameQuery) =>
    useQuery<Game[], Error>({
        queryKey: ['game', gameQuery],
        queryFn: () => apiClient.getAll({
            params:
                {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery?.platform?.id,
                    ordering: gameQuery?.sortOrder,
                    search: gameQuery?.searchText
                }
        })
    })

export default useGames;
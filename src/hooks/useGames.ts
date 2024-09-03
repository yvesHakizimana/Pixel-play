import ApiClient from "../services/api-client.ts";
import {GameQuery} from "../App.tsx";
import {useInfiniteQuery} from "@tanstack/react-query";
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
    useInfiniteQuery({
        queryKey: ['game', gameQuery],
        queryFn: ( {pageParam = 1} ) => apiClient.getAll({
            params:
                {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery?.platform?.id,
                    ordering: gameQuery?.sortOrder,
                    search: gameQuery?.searchText,
                    page: pageParam,
                }
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        }
    })

export default useGames;
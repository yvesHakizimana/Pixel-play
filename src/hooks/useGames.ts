import ApiClient from "../services/api-client.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import ms from "ms"
import {GameQuery} from "../store.ts";
import {Game} from "../entities/Game.ts";

const apiClient = new ApiClient<Game>('/games')

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery({
        queryKey: ['game', gameQuery],
        queryFn: ( {pageParam = 1} ) => apiClient.getAll({
            params:
                {
                    genres: gameQuery?.genreId,
                    parent_platforms: gameQuery?.platformId,
                    ordering: gameQuery?.sortOrder,
                    search: gameQuery?.searchText,
                    page: pageParam,
                }
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: ms('1d')
    })

export default useGames;
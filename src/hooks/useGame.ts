import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client.ts";
import {Game} from "./useGames.ts";

const apiClient = new ApiClient<Game>('/games');

const useGame = (gameSlug: string) => useQuery({
    queryKey: ['game', gameSlug ],
    queryFn: () => apiClient.get(gameSlug),
    staleTime: ms('1d'),
})

export default useGame


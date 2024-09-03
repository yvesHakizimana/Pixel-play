import platforms from '../data/platforms.ts'
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {FetchResponse} from "./useData.ts";
import {Platform} from "./useGames.ts";


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
});

export default usePlatforms
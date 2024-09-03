import platforms from '../data/platforms.ts'
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse}  from "../services/api-client.ts";
import {Platform} from "./useGames.ts";


const usePlatforms = () => useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
});

export default usePlatforms
import platforms from '../data/platforms.ts'
import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import ms from "ms";
import {Platform} from "../entities/Platform.ts";


const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: {count: platforms.length, results: platforms, next: null}
});

export default usePlatforms
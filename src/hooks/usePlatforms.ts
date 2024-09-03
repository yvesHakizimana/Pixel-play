import platforms from '../data/platforms.ts'
import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results: platforms, next: null}
});

export default usePlatforms
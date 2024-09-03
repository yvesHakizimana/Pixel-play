import ApiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new ApiClient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: genres.length, results: genres, next: null}
    }

);

export default useGenres;
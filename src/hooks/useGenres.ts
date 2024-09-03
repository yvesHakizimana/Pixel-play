import apiClient, {FetchResponse} from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient.get<FetchResponse<Genre>>('/genres')
            .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
    }

);

export default useGenres;
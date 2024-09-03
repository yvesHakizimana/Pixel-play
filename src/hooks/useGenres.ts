import apiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "./useData.ts";
import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient.get<FetchResponse<Genre>>('/genres')
            .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
    }

);

export default useGenres;
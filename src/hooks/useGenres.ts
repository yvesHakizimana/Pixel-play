import ApiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";
import ms from "ms";
import {Genre} from "../entities/Genre.ts";


const apiClient = new ApiClient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: {count: genres.length, results: genres, next: null}
    }

);

export default useGenres;
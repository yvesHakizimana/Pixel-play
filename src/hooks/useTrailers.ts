import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {Trailer} from "../entities/Trailer.ts";

const useTrailers = (gameSlug: string) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameSlug}/movies`);
    return useQuery({
        queryKey: ['trailers', gameSlug],
        queryFn: () => apiClient.getAll()
    })
}

export default useTrailers;
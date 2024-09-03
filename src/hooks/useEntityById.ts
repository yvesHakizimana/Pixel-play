import useGenres from "./useGenres.ts";
import usePlatforms from "./usePlatforms.ts";

export const useGenreById = ( genreId?: number ) => {
    const {data: genres} = useGenres();
    return genres.results.find(g => g.id === genreId)
}

export const usePlatformById = ( platformId?: number ) => {
    const {data: platforms} = usePlatforms();
    return platforms.results.find(g => g.id === platformId)
}



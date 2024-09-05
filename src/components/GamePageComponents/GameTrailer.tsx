import useTrailers from "../../hooks/useTrailers.ts";

const GameTrailer = ({gameSlug} : {gameSlug: string}) => {
    const { data, isLoading} = useTrailers(gameSlug)
    if(isLoading) return null
    const first = data?.results[0]
    return first ? <video
        src={first.data["480"]}
        poster={first.preview}
        controls /> : null
}

export default GameTrailer
import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {GameScreenshot} from "../entities/GameScreenshot.ts";

const useGameScreenshots  = (gameSlug: string) => {
    const apiClient = new ApiClient<GameScreenshot>(`/games/${gameSlug}/screenshots`);
    return useQuery({
        queryKey: ['game_screenshot', gameSlug ],
        queryFn: () => apiClient.getAll()
    })
}

export default useGameScreenshots
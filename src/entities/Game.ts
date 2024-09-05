import {Platform} from "./Platform.ts";
import {Genre} from "./Genre.ts";
import {Publisher} from "./Publisher.ts";

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
    publishers: Publisher[];
}

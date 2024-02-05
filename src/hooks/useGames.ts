import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        ordering: gameQuery?.sort,
        platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;

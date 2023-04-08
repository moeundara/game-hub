import {useState, useEffect} from 'react'
import apiClient,{AxiosError} from '../services/api-client';

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;

  }
  
  interface FetchGameData {
    count: number;
    results: Game[];
  }

const useGames = ()=>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    apiClient
      .get<FetchGameData>("/games")
      .then((res) => {setGames(res.data.results); setIsLoading(false)})
      .catch((err) => {
        setError((err as AxiosError).message);
        setIsLoading(false)
      });
  },[]);
  return {games, error, isLoading}
}

export default useGames;


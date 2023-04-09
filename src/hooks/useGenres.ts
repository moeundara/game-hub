import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../services/api-client";

interface Genre{
    id: number;
    name: string;
}

interface FetchGenreResponse{
    count: number;
    results: Genre[]
}

const useGenres = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => {setGenres(res.data.results); setIsLoading(false)})
      .catch((err) => {
        setError((err as AxiosError).message);
        setIsLoading(false)
      });
  },[]);
  return {genres, error, isLoading}
}
export default useGenres;
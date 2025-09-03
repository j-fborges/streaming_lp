import { useState, useEffect } from "react";
import type { MovieList } from "../types/MovieType";

export function useMovieData() {
    const [data, setData] = useState<MovieList>({ results: [] });
    const [loading, setLoading] = useState(true);
    
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_ACESS_TOKEN,
        },
      };
    
      useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          options
        )
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        const result = await response.json()
        setData(result)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
    
        fetchData();
    },[])
    
      const randomNums = [
        Math.floor(Math.random() * data.results.length),
        Math.floor(Math.random() * data.results.length),
        Math.floor(Math.random() * data.results.length),
      ];

      const backdrops = data.results.filter((movie, i) => {
        const hasBackDrop = movie.backdrop_path
        return randomNums.includes(i) && hasBackDrop || data.results.find((m) => !m.backdrop_path );
      });

      return { data, backdrops, loading }
}
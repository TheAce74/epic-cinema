import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Simple in-memory cache
const cache = {};

const useDataProvider = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      // If cache exists for this url, use it
      if (cache[url]) {
        setData(cache[url]);
        setIsLoading(false);
      } else {
        try {
          const result = await axios(url);
          setData(result.data.results);
          // Save response to cache
          cache[url] = result.data.results;
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

// Rest of your code...


export const MovieListProvider = ({ render }) => {
  const url_movie = `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`;

  const { data: movie,isLoading, isError } = useDataProvider(url_movie);

  return render({ movie,isLoading, isError });
};

export const TrendingListProvider = ({ render }) => {
  const url_trending = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`;

  const { data: trending,isLoading, isError } = useDataProvider(url_trending);

  return render({ trending,isLoading, isError });
};

export const TvListProvider = ({ render }) => {
  const url_tv = `${BASE_URL}/3/trending/tv/day?api_key=${API_KEY}`;

  const { data: tv,isLoading, isError } = useDataProvider(url_tv);

  return render({ tv,isLoading, isError });
};

export const TopRatedProvider = ({ render }) => {
  const url_top_rated = `${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}`;

  const { data: topRated,isLoading, isError } = useDataProvider(url_top_rated);

  return render({ topRated,isLoading, isError });
};

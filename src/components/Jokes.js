import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import axios from '../apis/dadJokes';

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const [response, error, loading, refetch] = useAxios({
    axiosInstance: axios,
      method: 'GET',
      url: '/',
      requestConfig: {
        headers: {
          'Content-Language': 'en-US',
          //'Accept': 'text/html'
        }
      }
  });

  useEffect(() => {
    console.log(response)
    setJoke(response)
  }, [response])

  return (
    <article>

      <h2>Random Dad Joke</h2>

      {loading && <p>Loading...</p>}

      {!loading && error && !response && <p className="errMsg">{error}</p>}

      {!loading && response && <p>{joke}</p>}

      {!loading && !error && !response && <p>No dad joke to display</p>}

      <button onClick={() => refetch()}>Get Joke</button>
    </article>
  );
}

export default Jokes;
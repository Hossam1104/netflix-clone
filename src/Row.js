import React, { useState, useEffect } from "react";
import axios from "./axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // A snipper of code which runs based on specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;

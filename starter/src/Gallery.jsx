import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { value } = useGlobalContext();
  // console.log(value);
  const response = useQuery({
    queryKey: ["images", value],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${value}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h3>Loading...</h3>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h3>There was an Error...</h3>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h3>No results found...!</h3>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;

        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;

import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { getName, setValue, value } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    // console.log(searchValue);
    // getName(searchValue);
    setValue(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;

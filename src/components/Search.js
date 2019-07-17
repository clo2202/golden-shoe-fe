import React from "react";

const Search = ({handleSizeChange, handleSubmit}) => {
  return (
    <form className="filter" onSubmit={handleSubmit}>
    <div className="filter-size" >
      <label htmlFor="size"><b>Size</b></label>
      <input
        type="radio"
        id="size"
        name='size-filter'
        value="4"
        onChange={handleSizeChange}
      />
      4
      <input
        type="radio"
        id="size"
        name='size-filter'
        value="5"
        onChange={handleSizeChange}
      />
      5
      <input
        type="radio"
        id="size"
        name='size-filter'
        value="6"
        onChange={handleSizeChange}
      />
      6
    </div>
    <button type='submit'>Clear</button>
  </form>
  );
};

export default Search;
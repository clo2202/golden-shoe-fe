import React from "react";

const Search = ({handleSizeChange, handleSubmit}) => {
  return (
    <form className="filter" onSubmit={handleSubmit}>
    <div className="filter-size" >
      <label htmlFor="size">Size</label><br/>
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
    <div className="filter-style">
      <label htmlFor="style">Style</label><br/>
      <input
        type="radio"
        name="style"
        value="trainers"
      />
      Trainers
      <input
        type="radio"
        name="style"
        value="boots"
      />
      Boots
      <input
        type="radio"
        name="style"
        value="sandals"
      />
      Sandals
      <input
        type="radio"
        name="style"
        value="shoes"
      />
      Shoes
    </div>
    <div>
      <label htmlFor="price">Price</label><br/>
      <input
        type="range"
        id="price"
        value='60'
        min="0"
        max="200"
      />
    </div>
    <button type='submit'>Clear</button>
  </form>
  );
};

export default Search;
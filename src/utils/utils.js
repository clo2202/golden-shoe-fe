export const  filterShoes = (shoes) => {
  return shoes.reduce((acc, shoe, i) => {
    if (isShoePresent(acc, shoe)) acc.push(shoe)
    return acc
  }, [])
}

export const isShoePresent = (acc, shoe) => {
  return !acc.some(checkShoeName(shoe));
}

export const checkShoeName = (shoe) =>  {
  return filteredShoe => filteredShoe.shoe_name === shoe.shoe_name;
}
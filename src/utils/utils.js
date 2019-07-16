export const shoeCount = (shoes) => {
    shoes.reduce((tally, shoe) => {
        tally[shoe.shoe_name] = (tally[shoe.shoe_name] || 0) + 1
        return tally
      }, {})
}
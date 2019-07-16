import axios from 'axios'

const BASEURL = 'https://be-golden-shoe.herokuapp.com/api';

export const getShoes = async (size) => {
    const { data } = await axios.get(`${BASEURL}/shoes`, { 
        params: { size }
    })
    return data.shoes
}
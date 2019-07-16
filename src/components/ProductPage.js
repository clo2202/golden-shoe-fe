import React, { Component } from "react";
import Heading from "./Heading";
import Nav from "./Nav";
import ProductDetails from "./ProductDetails";
import * as api from "../utils/api";

class ProductPage extends Component {
  state = {
    shoe_name: "",
    description: "",
    price: 0,
    image_url: "",
    stock: []
  };

  render() {
      const { shoe_name, description, price, image_url } = this.state;
    return (
      <div>
        <Heading />
        <Nav />
        <ProductDetails name={shoe_name} description={description} price={price} url={image_url}/>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchShoeById();
  };

  fetchShoeById = async () => {
    const { shoe_id } = this.props;
    const shoes = await api.getShoeById(shoe_id);
    this.setState({
      shoe_name: shoes[0].shoe_name,
      description: shoes[0].description,
      price: shoes[0].price,
      image_url: shoes[0].image_url
    });
  };
}

export default ProductPage;

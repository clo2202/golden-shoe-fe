import React, { Component } from "react";
import ShoeList from "./ShoeList";
import Search from "./Search";
import * as api from '../utils/api'
// import * as utils from '../utils/utils'

class ShoeSearch extends Component {

  state = {
      shoes: [],
      size: null
  }

  render() {
    const { shoes } = this.state
    return (
      <div >
        <Search handleSizeChange={this.handleSizeChange} handleSubmit={this.handleSubmit}/>
        <ShoeList shoes={shoes} />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchShoes()
  }

  fetchShoes = async () => {
    const { size } = this.state
    const shoes = await api.getShoes(size)
    this.setState({shoes})
  } 

  handleSizeChange = (event) => {
    const { value, id } = event.target
    this.setState({[id] : value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({size: null})
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const newSize = prevState.size !== this.state.size;
    if (newSize) {
      this.fetchShoes()
    }
  }
}

export default ShoeSearch;

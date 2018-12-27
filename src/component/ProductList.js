import React, { Component } from 'react'
import Product from './Product'
import {data} from '../dados'

export default class ProductList extends Component{
  state = {
    order:'votes',
    products:data
  }
  _handleOrder = (order) =>{
    var products = []
    if(order === 'votes'){
      products = data.sort((a, b) => (
        b.votes - a.votes
      ))
    }
    if(order === 'id'){
       products = data.sort((a, b) => (
        b.id - a.id
      ))
    }
    this.setState({products})
  }

  render() {
    
    const productComponents = this.state.products.map((product, key) => (
        <Product 
          key={key}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitter_avatar_url}
            productImageUrl={product.product_image_url}
        />
    ))
    
    return (
      <div className="ui unstackable items">
        <h2>Ordernado por:
          <ul className="order">
            <li onClick={() => this._handleOrder('votes')}>Votes</li>
            <li onClick={() => this._handleOrder('id')}>Id</li>
          </ul>
        </h2>
        {productComponents}          
      </div>
    )
  }
}
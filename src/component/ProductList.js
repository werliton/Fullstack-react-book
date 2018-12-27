import React, { Component } from 'react'
import Product from './Product'
import {data} from '../dados'

export default class ProductList extends Component{
  constructor(props){
    super(props)

    this.state = {
      order:'votes',
      products:[]
    }
  }
  

  componentDidMount(){
    this.setState({ products: data})
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

  _handleProductUpVote = (productId) =>{
    const nextProducts = this.state.products.map( product => {
      if(product.id === productId){
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      }else{
        return product
      }
    })

    this.setState({products: nextProducts })
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
            onVote={this._handleProductUpVote}
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
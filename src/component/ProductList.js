import React, { Component } from 'react'
import Product from './Product'
import {data} from '../dados'

export default class ProductList extends Component{
    render() {
      const products = data.sort((a, b) => (
        b.votes - a.votes
      ));
      const productComponents = products.map((product, key) => (
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
          {productComponents}          
        </div>
      )
    }
}
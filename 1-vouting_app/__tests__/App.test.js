import React from 'react'
import ProductList from '../src/component/ProductList'
import App from '../src/App'
import {shallow } from 'enzyme'

it("renderizar sem bug", ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)

    ReactDOM.unmountComponentAtNode(div)
})
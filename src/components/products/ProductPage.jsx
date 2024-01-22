// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ProductPage.css'
import ProductSidebar from './ProductSidebar'
import ProductList from './ProductList'

const ProductPage = () => {
  return (
   <section className="product_page">
    <ProductSidebar />
    
    <ProductList />
   </section>
  )
}

export default ProductPage

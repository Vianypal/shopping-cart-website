import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcums from '../Components/Breadcums/Breadcums.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptiobBox from '../Components/DescriptionBox/DescriptiobBox.jsx';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct.jsx';

const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcums product={product}/>
      <ProductDisplay  product={product}/>
      <DescriptiobBox  />
      <RelatedProduct/>
    </div>
  )
}

export default Product

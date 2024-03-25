import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProcuctCard.module.css';


const ProductCard = () => {
  return (
    <div className= {styles.card}>
        <AddToCart/>
    </div>
  )
}

export default ProductCard
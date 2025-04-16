import React from 'react'
import './index.css'

const CategoryList = (props) => {
    const {productDetails, onEditClick} = props
    const {name , imageUrl, itemCount} = productDetails

    // for edit button
  const handleEditClick = () => {
    onEditClick(productDetails)
  }

  return (
    <li className='list-item'>
       
          <div className='image-wrapper'>
          <img src={imageUrl} alt='name' className='product-image'/>
            <div className="edit-icon" onClick = {handleEditClick}>
          ✏️ Edit
        </div>
           <div >
          </div>
           <h2 className='name-heading'>{name}</h2>
           <p className='item-count'>{itemCount} items</p>
           </div>

       
    </li>
  )
}

export  default CategoryList
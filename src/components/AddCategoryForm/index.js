import { useState } from 'react';
import axios from 'axios';

import './index.css';

const AddCategoryForm = ({onClose}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [itemCount, setItemCount] = useState('');

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleItemCount = (e) => {
    setItemCount(e.target.value);
  };

  // use localStorage  
  
  const handleSubmitAddCategory = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const API_URL = ' https://revisit-backend-code.onrender.com/api';

    try {
      const res = await axios.post(
        `${API_URL}/categories`, 
        {
          name,
          imageUrl: image,
          itemCount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status === 201) {
        alert('Category added successfully!');
        setName('');
        setImage('');
        setItemCount('');
      }
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Something went wrong while adding category.');
    }
  };

  return (
    <div className='add-category-form'>
      <h1 className='add-heading-category'>Add New Category</h1>
      <button onClick={onClose} className="btn btn-secondary mb-3">
        ← Back to Dashboard
      </button>

      <form onSubmit={handleSubmitAddCategory}>
        <div className='mb-3'>
          <label htmlFor='exampleInputImageUrl' className='form-label'>
            Image Url
          </label>
          <input
            type='text'
            value={image}
            placeholder='image url'
            className='form-control'
            id='exampleInputImageUrl'
            onChange={handleImage}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleInputItemName' className='form-label'>
            Item Name
          </label>
          <input
            type='text'
            value={name}
            className='form-control'
            placeholder='name'
            id='exampleInputItemName'
            onChange={handleName}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleInputItemCount' className='form-label'>
            Item Count
          </label>
          <input
            type='text'
            value={itemCount}
            placeholder='item Number'
            className='form-control'
            id='exampleInputItemCount'
            onChange={handleItemCount}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;

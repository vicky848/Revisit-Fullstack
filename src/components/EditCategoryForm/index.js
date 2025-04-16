import {useState , useEffect} from 'react'
import axios from 'axios'
import './index.css'
  //  EditCategoryForm component for edit

 const EditCategoryForm = ({onClose, category}) => {
   

      const [name, setName] = useState('');
      const [image, setImage] = useState('');
      const [itemCount, setItemCount] = useState('');
      const [message , setMessage] = useState('')


      const handleImage = (e) => {
        setImage(e.target.value);
      };
    
      const handleName = (e) => {
        setName(e.target.value);
      };
    
      const handleItemCount = (e) => {
        setItemCount(e.target.value);
      };
    

    useEffect(() => {

      if (category){
        setImage(category.image);
        setName(category.name);
        setItemCount(category.itemCount);


      }
      
    
      
    }, [category])
    



// use  localStorage for token

const handleSubmitEdit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token');
    const categoryData = {
      imageUrl:image, name, itemCount:Number(itemCount)
    };

    try{

    const response = await axios.put(`https://revisit-backend-code.onrender.com/api/categories/${category._id}`,
      categoryData, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',

        },

      }

    );

    setMessage('Category upadted successfully!')
    console.log("Updated Category:", response.data)

  

    }catch(error){
      console.error('Error:',error.response?.data || error.message)
      setMessage('Error updating category')
    }

    

}




  return (
    <div className='edit-conatiner'>
        <h1>Edit Category</h1>
        <button onClick={onClose} className="btn btn-secondary mb-3">
        ← Back to Dashboard
      </button>
      {message && <p>{message}</p>}
        <form onSubmit={handleSubmitEdit}>
        <div className ="mb-3">
    <label htmlFor="exampleInputImage" className ="form-label">Image Url</label>
    <input type="text"
     className ="form-control"
     value={image} 
    id="exampleInputImage"
     aria-describedby="emailHelp"
     onChange={handleImage}
     />
    
  </div>


  <div className ="mb-3">
    <label htmlFor="exampleInputcategory" className ="form-label">Category</label>
    <input type="text" 
     value={name}
    className ="form-control"
     id="exampleInputcategory" 
     aria-describedby="emailHelp"
     onChange={handleName}
     
     />
    
  </div>
 
  <div className ="mb-3">
    <label htmlFor="exampleInputcount" className ="form-label">Item Count</label>
    <input type="text" 
    className ="form-control"
    value={itemCount}
     id="exampleInputcount"
      aria-describedby="emailHelp"
      onChange={handleItemCount}
      />
    
  </div>
  
  
  <button type="submit" className ="btn btn-primary">Update Category</button>
</form>


    </div>
  )
}


export default EditCategoryForm
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import './index.css';
import CategoryList from '../../components/CategoryList';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar'
import AddCategoryForm from '../../components/AddCategoryForm';
import EditCategoryForm from '../../components/EditCategoryForm';


const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const navigate = useNavigate();
  
  
const filteredCategories = categories.filter(categoryItem => 

  categoryItem.name.toLowerCase().includes(searchItem.toLowerCase())

)




  const token = localStorage.getItem('token');
   
    
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const API_URL = ' https://revisit-backend-code.onrender.com/api';
          const { data } = await axios.get(`${API_URL}/categories`, {
           headers: { Authorization: `Bearer ${token}` },
          });
          if (data.success) {
            setCategories(data.categories);
          }
        } catch (error) {
          console.log('Error fetching categories:', error);
        }
      };
    
      if (!token) {
        navigate("/login");
      } else {
        fetchData();
      }
    }, [navigate, token]);
    
  

    // display categories page
 

  return (
    <div className='dashboard-container'>
      <Navbar searchItem = {searchItem} setSearchItem = {setSearchItem} />
      
      
      
      <div className='main-container'>
      <Sidebar/>
      
     
      <div className='right-section'>
     <div className='categories-item'>
     <h2 className='categories-heading'>Categories</h2>
     <button className = "category-button"onClick={() => setShowAddForm(true)}>
     + Add Category
     </button>
     </div>
       
         {
          showAddForm  ? (
            <AddCategoryForm onClose={() => setShowAddForm(false)}/>
          ): showEditForm ? (<EditCategoryForm
          onClose={() => {
            setShowEditForm(false);
            setCategoryToEdit(null);
          }}
          category={categoryToEdit}
        />
      ): (
            <ul className='product-list-container'>
            {filteredCategories.map((item) => (
              <CategoryList 
              key={item._id} 
              productDetails={item}
              onEditClick={(category) => {
                setCategoryToEdit(category);
                setShowEditForm(true);
              }}
            />
            ))}
          </ul>
          )
         }
        
       
      </div>
      </div>
    </div>
  );
};

export default Dashboard;

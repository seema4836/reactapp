import React from 'react'
import { useParams, useNavigate ,Navigate  } from 'react-router-dom'
import { useState } from 'react';
import Products from './Products';
import Category from './Category';
import Addcategory from './Addcategory';

function ProductList() {
    const [count,setCount]=useState(100)
    const [state,setState]=useState("Punjab")
    const [user,setUser]=useState({
        name:"Rajat",
        city:"Mohali"
    })

    const todolist=[45,67,89,78,65,35];
    const isLoggedIn=true;


    const handleChange=()=>{
        //alert("hiii")
        setCount(count+1)
        setState("Delhi")
      
        setUser({
            name:"Sonal",
            city:"Mohali"
        })
    }

    // Get the product Id param from the URL.
    let { pid } = useParams();
    let { cname} = useParams();
   // const navigate = useNavigate();

    console.log(pid)
    const products=
    
    {
        pname:"Apple iPhone 15 (Green, 128 GB)",
        price:45000,
        desc:"Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy"
    }

   //const category=["Mobile","Head Phones","Smart Watches","Air Purifiers"]
   const categories=
   [
    {
    cat_name:"Mobile Phones",
    cat_img:"https://i.imgur.com/b9zkoz0.jpg"

},
{
    cat_name:"Head Phones",
    cat_img:"https://i.imgur.com/SHWASPG.png"

},
{
    cat_name:"Smart Phones",
    cat_img:"https://i.imgur.com/b9zkoz0.jpg"

},
{
    cat_name:"Air Purifiers",
    cat_img:"https://i.imgur.com/2gvGwbh.png"

}



   ]







   

  return (
    <div>

<div class="container">
    <div class="row">

        <div class="col-md-12">
            {/* <p>Count is {count} and State is {state}</p>
            <p>User {user.name}{user.city}</p>
            <button  className="btn btn-success" onClick={handleChange}>Change Value</button>
            {
                todolist.length>0 ? <h2>Total {todolist.length} elements in this array</h2>:"No elements"
            }

            {
                todolist.length>0 && <h2>total elements {todolist.length}</h2>

            } */}
  
       
{/* 
        {
            pid==0 ? <Navigate to="/contact" /> :"Product id exists in product list"
        } */}
        {/* {
            isLoggedIn==true? <Navigate to="/blog" />: <Navigate to="/contact" />
        } */}
        <Addcategory />
        <Category  category={categories}/>
     <Products pname="Apple iPhone 15 (Green, 128 GB)" price="45000" description="Experience the iPhone 15 – your dynamic companion." />
      
    
        </div>
    </div>
</div>


      
    </div>
  )
}

export default ProductList
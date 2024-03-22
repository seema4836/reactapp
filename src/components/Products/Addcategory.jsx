import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';

function Addcategory() {
    const [cat, setCat]=useState()
    const [data,setData]=useState([])


    const handleChange=(event)=>{
        const name=event.target.name;
        const cvalue=event.target.value

       // console.log(value)

        setCat(cvalue)

    }
    const submitData=(e)=>{
        e.preventDefault()
        
        setData([...data,cat])
      
      
    }
  return (
    <div>
     
        <h2>Add Category</h2>{cat}
        <form onSubmit={submitData} method="post">
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="category name" onChange={handleChange} />
    </div>
   <button type="submit" className='btn btn-success'>Add</button>
  </div>
</form>

<table border="">
    <tr>
        <th>ID</th>
        <th>Category</th>
    </tr>
    {
        data.map((res,i)=>{
            return(
                <>
                <tr>
                    <td>{i}</td>
                    <td>{res}</td>
                </tr>
                
                </>
            )
        })
    }
</table>
        
    </div>
  )
}

export default Addcategory
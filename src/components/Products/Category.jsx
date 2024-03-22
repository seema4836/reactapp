import React from 'react'
import './Category.css' ;
function Category({category}) {
    console.log(category)
 
  return (
    <div>
<div className="container">
  
  <div className="d-flex justify-content-center align-items-center mt-5"> <button className="btn btn-dark">OUR CATEGORIES</button> </div>
  <div className="d-flex justify-content-center mt-3"> <span className="text text-center">Finding Best Products Now<br /> in Your Fingertips</span> </div>
  <div className="row mt-2 g-4">
    {/* <div className="col-md-3">
      <div className="card p-1">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>{category.cat_name}</span>  </div>
          <div> <img src={category.cat_img} height={100} width={100} /> </div>
        </div>
      </div>
    </div> */}
    {/* <div className="col-md-3">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>category</span> </div>
          <div> <img src="https://i.imgur.com/SHWASPG.png" height={100} width={100} /> </div>
        </div>
      </div>
    </div> */}
    {/* <div className="col-md-3">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>{category[2]}</span>  </div>
          <div> <img src=" https://i.imgur.com/Ya0OXCv.png" height={100} width={100} /> </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>{category[3]}</span>  </div>
          <div> <img src="https://i.imgur.com/2gvGwbh.png" height={100} width={100} /> </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card p-2tr5">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
          <div> <img src="https://i.imgur.com/UMQJpSG.png" height={100} width={100} /> </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
          <div> <img src="https://i.imgur.com/e9CyhXR.png" height={100} width={100} /> </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
          <div> <img src=" https://i.imgur.com/Zq8VigZ.png" height={100} width={100} /> </div>
        </div>
      </div>
    </div> */}

    {
        category.map((data)=>{
            return(
                <>
 <div className="col-md-3">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="flex-column lh-1 imagename"> <span>{data.cat_name}</span> </div>
          <div> <img src={data.cat_img} height={100} width={100} /> </div>
        </div>
      </div>
    </div>

                
                </>
            )

        })
    }
   



  </div>
</div>

    </div>
  )
}

export default Category
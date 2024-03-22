import React from 'react';
import logo from "../../assets/images/main-logo.png";
import { Link } from 'react-router-dom';

function Topheader() {
  return (
    <div>
 <header id="top_hd" className="main_header">
  <div className="top-header">
    <div className="container">
      <div className="row">
        {/* TOP LEFT */}
        <div className="col-12 col-md-8 col-lg-8">
          <div className="top-address">
            <p className="mb-0">
              <a href="mailto:example@example.com"><i className="far fa-envelope" />example@example.com</a> <span><i className="fa fa-street-view" />1st Floor New World.</span>
              <a href="tel:+880 320 432 242"><i className="fa fa-phone" />+880 320 432 242</a>
            </p>
          </div>
        </div>
        {/* TOP RIGHT */}
        <div className="col-12 col-md-4 col-lg-4">
          <div className="top-right-menu">
            <ul className="social-icons text-end">
              <li>
                <a className="facebook social-icon" href="#" title="Facebook"><i className="fab fa-facebook-f" /></a>
              </li>
              <li>
                <a className="twitter social-icon" href="#" title="Twitter"><i className="fab fa-twitter" /></a>
              </li>
              <li>
                <a className="instagram social-icon" href="#" title="Instagram"><i className="fab fa-instagram" /></a>
              </li>
              <li>
                <a className="dribbble social-icon" href="#" title="Dribbble"><i className="fab fa-dribbble" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bottom-header" id="dynamic">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="navigation">
            <div className="nav-container navbar navbar-expand-lg">
              <div className="brand">
                <Link to="/"><img src={logo} className="brand-img" /></Link>
              </div>
              <nav className="ms-auto">
                <div className="nav-mobile">
                  <a id="navbar-toggle" href="#!"><span /></a>
                </div>
                <ul className="nav-list navbar-nav ms-auto mt-2 mt-lg-0" style={{"display":"none"}}>
                  <li className="nav-item active menu-item-has-children">
                
                    <Link to="/" className="nav-link" >Home</Link>
                   
                  </li>
                  <li className="nav-item menu-item-has-children">
                   
                    <Link to="team" className="nav-link" >Teams</Link>
                    
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="services">Services</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="productlist">Products</Link></li>
                  <li className="nav-item menu-item-has-children">
                  <Link to="blog" className="nav-link" >Blogs</Link>
                    
                   
                  </li>
               
                  <li className="nav-item nav-last"><Link className="nav-link" to="contact">Contact</Link></li>
                  {/* <a href className="get-btn">GET A QUOTE</a> */}
                </ul>
              </nav>
            </div>
          </section>
          {/* <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="#"><img src="images/main-logo.png" class="brand-img"></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarToggler">
                     <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item active menu-item-has-children">
                           <a class="nav-link" href="#">Home</a>
                           <ul class="sub-menu">
                              <li><a href="">New Demos</a></li>
                              <li><a href="">IT Solution Demos</a></li>
                              <li><a href="">Multi-Purpose Demos</a></li>
                              <li><a href="">Landing Page Demo</a></li>
                           </ul>
                        </li>
                        <li class="nav-item menu-item-has-children">
                           <a class="nav-link" href="#">Company</a>
                           <ul class="sub-menu">
                              <li><a href="">New Demos</a></li>
                              <li><a href="">IT Solution Demos</a></li>
                              <li><a href="">Multi-Purpose Demos</a></li>
                              <li><a href="">Landing Page Demo</a></li>
                           </ul>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item menu-item-has-children">
                           <a class="nav-link" href="#">Portfolio</a>
                           <ul class="sub-menu">
                              <li><a href="">New Demos</a></li>
                              <li><a href="">IT Solution Demos</a></li>
                              <li><a href="">Multi-Purpose Demos</a></li>
                              <li><a href="">Landing Page Demo</a></li>
                           </ul>
                        </li>
                        <li class="nav-item menu-item-has-children">
                           <a class="nav-link" href="#">Blogs</a>
                           <ul class="sub-menu">
                              <li><a href="">New Demos</a></li>
                              <li><a href="">IT Solution Demos</a></li>
                              <li><a href="">Multi-Purpose Demos</a></li>
                              <li><a href="">Landing Page Demo</a></li>
                           </ul>
                        </li>
                        <li class="nav-item nav-last">
                           <a class="nav-link" href="#">Contact</a>
                        </li>
                        <a href="" class="get-btn">GET A QUOTE</a>
                     </ul>
                  </div>
                  </nav> */}
        </div>
      </div>
    </div>
  </div>
</header>


    </div>
  )
}

export default Topheader
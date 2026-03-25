import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content  --> */}
                <nav class="navbar navbar-expand-md bg-dark">
                    <a href="/" className="navbar-brand text-danger">Drip Vault</a>
                    <button className="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link">Home</a>
                            <a href="/addproduct" class="nav-link">Add Product</a>
                            <a href="/signin" class="nav-link">Signin</a>
                            <a href="/signup" class="nav-link">Signup</a>
                            
                        </div>
                        <div className='ms-auto'>
                          <Link to="/signup" className="btn btn-primary px-3" badge>Join</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar
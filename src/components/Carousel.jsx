import React from 'react'

const Carousel = () => {
  return (
           <section class="row">
            <div class="col-md-12">
                {/* <!-- a division of maintaining carousel content  --> */}
                 <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images  --> */}
                     <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                          <div className="carousel-item active">
                            <img
                              src="images/9fc3045e-6e22-4e42-983f-f1f51144a5f8.png"
                              className="d-block w-100"
                              alt="streetwear drip" style={{height:"750px", width:"1000px", objectFit:"cover"} }
                            />

                            <div className="carousel-caption hero-caption text-start">
                              <h1>Unleash Your Drip</h1>
                              <p>Premium thrifted fashion at unbeatable prices</p>
                              <button className="btn btn-primary px-4">Shop Now</button>
                            </div>
                          </div>
                         {/* <!-- div with image 2  --> */}
                          <div className="carousel-item">
                            <div className="text-slide d-flex align-items-center justify-content-center">
                                  
                               <div className="text-center">
                                  <h1 className="text-white">Rare Fits. No Repeats.</h1>
                                  <p className="text-light">Exclusive thrift pieces. Only one of each.</p>
                                  <button className="btn btn-primary mt-3 px-4">Shop Now</button>
                                  </div>

                                </div>
                              </div>
                          {/* <!-- div with image 3  --> */}
                           <div className="carousel-item">
                            <img
                              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
                              className="d-block w-100"
                              alt="streetwear style"style={{height:"700px", width:"00px", objectFit:"cover"} }
                            />

                            <div className="carousel-caption hero-caption text-start">
                              <h1>Wear Your Story.</h1>
                              <p>Every piece tells something different.</p>
                              <button className="btn btn-primary px-4">Explore</button>
                            </div>
                          </div>
                          
                           </div>
                     {/* <!-- previous control  --> */}
                      <a href="#mycarousel" class="carousel-control-prev"data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                      </a>
                      {/* <!-- next control  --> */}
                       <a href="#mycarousel" class="carousel-control-next"data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                       </a>
                 </div>
            </div>
          </section>
  )
}

export default Carousel
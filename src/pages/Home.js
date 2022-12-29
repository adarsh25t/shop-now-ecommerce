import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
        <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-6">
                    <div className="main-banner position-relative">
                        <img src="images/main-banner.jpg" alt="main banner" className='img-fluid rounded-3'/>
                        <div className="main-banner-content position-absolute">
                          <h4>SUPERCHARGED FOR PROS.</h4>
                          <h5>ipad S13+ Pro</h5>
                          <p>From $999.00 or $41.62/mo.</p>
                          <Link className='button'>BUY NOW</Link>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                    <div className="small-banner position-relative">
                          <img src="images/catbanner-01.jpg" alt="main banner" className='img-fluid rounded-3'/>
                          <div className="small-banner-content position-absolute">
                            <h4>best sake</h4>
                            <h5>ipad S13+ Pro</h5>
                            <p>From $999.00 <br></br>or $41.62/mo.</p>
                          </div>
                      </div>

                      <div className="small-banner position-relative">
                          <img src="images/catbanner-02.jpg" alt="main banner" className='img-fluid rounded-3'/>
                          <div className="small-banner-content position-absolute">
                            <h4>new arrival</h4>
                            <h5>ipad S13+ Pro</h5>
                            <p>From $999.00 <br></br>or $41.62/mo.</p>
                          </div>
                      </div>
                      <div className="small-banner position-relative">
                          <img src="images/catbanner-03.jpg" alt="main banner" className='img-fluid rounded-3'/>
                          <div className="small-banner-content position-absolute">
                            <h4>new arrival</h4>
                            <h5>ipad S13+ Pro</h5>
                            <p>From $999.00 <br></br>or $41.62/mo.</p>
                          </div>
                      </div>
                      <div className="small-banner position-relative">
                          <img src="images/catbanner-03.jpg" alt="main banner" className='img-fluid rounded-3'/>
                          <div className="small-banner-content position-absolute">
                            <h4>new arrival</h4>
                            <h5>ipad S13+ Pro</h5>
                            <p>From $999.00 <br></br>or $41.62/mo.</p>
                          </div>
                      </div>
                    </div>                 
                </div>
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home
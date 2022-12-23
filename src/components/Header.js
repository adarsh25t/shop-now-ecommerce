import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <Fragment>
        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                    </div>
                    <div className="col-6">
                        <p className='text-end text-white mb-0'>
                          Hotline:  
                             <a href="tel: +918086045433" className='text-white'> +91 80 8604 5433</a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-2">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                      <h2>
                        <Link className='text-white'>Shop Now.</Link>
                      </h2>
                    </div>
                    <div className="col-5">
                      <div class="input-group">
                        <input type="text" class="form-control py-1" placeholder="search product here..." />
                        <span class="input-group-text" id="basic-addon1"><BsSearch/></span>
                      </div>
                    </div>
                    <div className="col-5">
                        <div className="header-upper-links d-flex align-items-center justify-content-between">
                            <div>
                              <Link className='d-flex align-items-center gap-10 text-white'>
                                  <img src="images/compare.svg" alt="compare" />
                                  <p className='mb-0'>Compare <br />Products</p>
                              </Link>
                            </div>
                            <div>
                              <Link className='d-flex align-items-center gap-10 text-white'>
                                  <img src="images/wishlist.svg" alt="wishlist" />
                                  <p className='mb-0'>Favourite <br />Wishlist</p>
                              </Link>
                            </div>
                            <div>
                              <Link className='d-flex align-items-center gap-10 text-white'>
                                  <img src="images/user.svg" alt="user" />
                                  <p className='mb-0'>Login <br />My Account</p>
                              </Link>
                            </div>
                            <div>
                              <Link className='d-flex align-items-center gap-10 text-white'>
                                  <img src="images/cart.svg" alt="cart" />
                                  <div className='d-flex flex-column'>
                                      <span className='badge bg-white text-dark'>0</span>
                                      <p className='mb-0'>$ 500</p>
                                  </div>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="menu-bottom d-flex align-items-center gap-15">
                      <div class="dropdown">
                        <button class="btn dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="/images/menu.svg" alt="" />
                          <span>Show Categories</span>
                        </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </div>
                      <div className='menu-links'>
                          <div className="d-flex align-items-center gap-15 ">
                              <NavLink to={'/'}>Home</NavLink>
                              <NavLink to={'/our-store'}>Our Store</NavLink>
                              <NavLink to={'/blog'}>Blogs</NavLink>
                              <NavLink to={'/contact'}>Contact</NavLink>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </header>
    </Fragment>
  )
}

export default Header

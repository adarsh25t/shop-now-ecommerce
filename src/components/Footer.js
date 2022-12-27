import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <Fragment>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5 d-flex align-items-center gap-30 footer-signup-container">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className='text-white mb-0'>Sign Up For Newsletter</h2>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input type="text" class="form-control py-2" placeholder="Your Email Address" />
                  <span class="input-group-text footer-inputs" >Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
                <div>
                  <address className='text-white fs-6'>Hno: 180 Near School,
                      Malappuram,Kerala <br/>
                      Pincode: 673634
                  </address>
                  <a href="tell:+91 808705949494" className='mt-3 d-block mb-3 text-white'>+91 8087 059 49494</a>
                  <a href="mailto:adarshoffice25@gmail.com" className='mt-3 d-block mb-3 text-white'>adarshoffice25@gmail.com</a>

                  <div className="social_icons d-flex align-items-center gap-30">
                    <a href="" className='text-white'>
                      <BsLinkedin className='fs-6'/>
                    </a>
                    <a href="" className='text-white'>
                      <BsGithub className='fs-6'/>
                    </a>
                    <a href="" className='text-white'>
                      <BsYoutube className='fs-6'/>
                    </a>
                    <a href="" className='text-white'>
                      <BsInstagram className='fs-6'/>
                    </a>
                  </div>
                </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-0'>Privacy policy</Link>
                  <Link className='text-white py-2 mb-0'>Refund policy</Link>
                  <Link className='text-white py-2 mb-0'>Shipping policy</Link>
                  <Link className='text-white py-2 mb-0'>Terms & Conditions</Link>
                  <Link className='text-white py-2 mb-0'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-0'>About Us</Link>
                  <Link className='text-white py-2 mb-0'>Faq</Link>
                  <Link className='text-white py-2 mb-0'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-0'>Laptops</Link>
                  <Link className='text-white py-2 mb-0'>Headphones</Link>
                  <Link className='text-white py-2 mb-0'>Tablets</Link>
                  <Link className='text-white py-2 mb-0'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3 footer-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">&copy; {new Date().getFullYear()}; Powered by TheCoder</p>
            </div>          
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
import React, { Component } from 'react'
import './about.css'
export class About extends Component {
    state = {}
    render() {
        return (
            <>
            <section className='about py-5 '>
            
                <div className='w-50 m-auto container py-2'>
                <div className='text-center py-3'>
                        <h2 className='fw-bold  text-white'>ABOUT</h2>
                        <div className="icon2 position-relative ">
                            <i className="fa-solid fa-star fa-2xl mt-3"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='fs-5 fw-semibold text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        </div>
                        <div className="col-md-6">
                       <div className='fs-5 fw-semibold text-white'> You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                        </div>
                        </div>
                    </div>
                    
                </div>

            </section>
            </>
        )
    }
}
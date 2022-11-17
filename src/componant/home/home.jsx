import React, { Component } from 'react'
import './home.css'
import image from'../../img/avataaars.svg'
export class Home extends Component {
    state={}
    render () {
        return (
            <>
            
            <section id='home' className='home vh-100 d-flex align-items-center  justify-content-center '>
                <div className="home1 text-center d-flex align-items-center  justify-content-center ">
                    <img src={image} alt="img" />
                    <h1 className='text-white fw-bolder '>START REACT</h1>
                   <div className="icon position-relative">
                   <i className="fa-solid fa-star fa-2xl text-white mt-3"></i>
                   </div>
                   <p className='text-white fs-4 mt-3'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
                
            </section>
           
            </>
        )
    }
}


import React, { Component } from 'react'
import { About } from '../about/about'
import { Contact } from '../contact/contact'
import { Home } from '../home/home'
import { Portfolio } from '../portfolio/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import './navbar.css'
import { click } from '@testing-library/user-event/dist/click'


export default class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
            <div className=' item position-fixed  top-0 end-0 start-0'>
                <nav id="navbar-example2" className="navbar hight1 px-5  m-auto ">
                    <a className ="navbar-brand fs-3 fw-bolder text-white" href="#">START REACT</a>
                    <ul className ="nav nav-pills">
                        <li className ="nav-item">
                            <a className ="nav-link text-white fs-5 fw-bold" href="#Portfolio">Portfolio</a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link text-white fs-5 fw-bold" href="#about">About</a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link text-white fs-5 fw-bold" href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                </nav>
                </div>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className =" scrollspy-example " tabIndex={0}>
                    <div className='py-5' id="home"><Home/></div>
                    <div className='py-5' id="Portfolio"><Portfolio/></div>
                    <div className='py-3' id="about"><About/></div>
                    <div className='pt-5' id="contact"><Contact/></div>
                </div>
            </>
        )
    }
}
document.addEventListener("scroll",function (e) {
 setInterval(function() {
    document.querySelector("nav").classList.replace("hight1","hight2")
 })
},1000)

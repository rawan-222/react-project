import React, { Component } from 'react'
import './contact.css'

export class Contact extends Component {
    state = {}
    render() {
        return (
            <>
                <section className='contact  pb-5 mb-5 '>
                    <div className='text-center py-5 '>
                        <h2 className='fw-bold fs-1'>CONTACT ME</h2>
                        <div className="icon1 position-relative ">
                            <i className="fa-solid fa-star fa-2xl mt-3"></i>
                        </div>
                    </div>
                    <div className="container w-50 m-auto">
                        <div className="row">
                            <div className="col-md-12">
                                <p className='text-success name'>Name</p>
                                <label className='fs-5 fw-semibold text-muted' htmlFor="name">Name</label>
                                <input onKeyUp={show} type="text" id='name' className='w-100 inp' />
                                <p className='text-success email'>Email</p>
                                <label className='fs-5 fw-semibold text-muted' htmlFor="email">Email Address</label>
                                <div className='postion-relative '>
                                <div className='text-danger '><i class="fa-solid fa-circle fa-sm"></i> Not a valid email address</div>
                                <input onKeyUp={show} type="email" id='email' className='w-100 inp py-2' />
                                </div>
                                <p className='text-success phone'>Phone</p>
                                <label className='fs-5 fw-semibold text-muted' htmlFor="phone">Phone Number</label>
                                <input onKeyUp={show} type="text" id='phone' className='w-100 inp' />
                                <p className='text-success message'>Message</p>
                                <label className='fs-5 fw-semibold text-muted' htmlFor="message">Message</label>
                                <textarea onKeyUp={show} name="message" id="message" className='w-100 h-25 inp'></textarea>
                                <button className=' rounded-2 p-3 px-4 '>Send</button>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className='py-5'>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className='text-center'>
                                    <h2 className='mb-4 text-white'>LOCATION</h2>
                                    <p className=' w-75 d-block m-auto fs-5   text-white '>2215 John Daniel Drive Clark, MO 65243</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='w-100'>
                                    <h2 className='text-white mb-4'>AROUND THE WEB</h2>
                                    <div className='d-flex'>
                                        <div className='icons' ><i class="fa-brands fa-lg  fa-facebook-f"></i></div>
                                        <div className='icons' ><i class="fa-brands fa-lg  fa-twitter"></i></div>
                                        <div className='icons' ><i class="fa-brands fa-lg  fa-linkedin"></i></div>
                                        <div className='icons' ><i class="fa-brands fa-lg  fa-dribbble"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='text-center  '>
                                    <h2 className='text-white mb-4'>ABOUT FREELANCER</h2>
                                    <p className=' w-75 d-block m-auto fs-5  text-white '>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className='item3 text-center text-white py-4'>
                    <p>Copyright © Your Website 2021</p>
                </div>
            </>)
    }
}
let regexEmail = /^\w+@\w+.+\w$/
function show(e) {
    if (e.target.value != "") { document.querySelector("." + e.target.getAttribute("id")).classList.add("d-block") }
    else { document.querySelector("." + e.target.getAttribute("id")).classList.remove("d-block") }
    if(e.target.getAttribute("id")=="email"){
        console.log(regexEmail.test(e.target.value));
        if(regexEmail.test(e.target.value)){
            document.querySelector(".text-danger").classList.remove("d-block")
        }
        else{  document.querySelector(".text-danger").classList.add("d-block")}
    }
}


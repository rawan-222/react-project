import React, { Component } from 'react'
import './portfolio.css'
import img1 from '../../img/cabin.png'
import img2 from '../../img/cake.png'
import img3 from '../../img/circus.png'
import img4 from '../../img/game.png'
import img5 from '../../img/safe.png'
import img6 from '../../img/submarine.png'
export class Portfolio extends Component {
    state = {}
    render() {
        return (
            <>
                <section className='portfolio py-5 position-relative '>
                    <div className='text-center'>
                        <h2 className='fw-bold'>PORTFOLIO</h2>
                        <div className="icon1 position-relative ">
                            <i className="fa-solid fa-star fa-2xl mt-3"></i>
                        </div>
                    </div>
                    <div className="container py-4">
                        <div className="row gy-5 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <figure onClick={openimage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className='layer rounded-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-3x text-white fa-plus "></i>
                                    </div>
                                    <img src={img1} alt="LOG CABIN" className='w-100 rounded-2' />
                                </figure>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <figure onClick={openimage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className='layer rounded-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-3x text-white fa-plus "></i>
                                    </div>
                                    <img src={img2} alt="TASTY CAKE" className='w-100 rounded-2' />
                                </figure>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <figure onClick={openimage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className='layer rounded-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-3x text-white fa-plus "></i>
                                    </div>
                                    <img src={img3} alt="CIRCUS TENT" className='w-100 rounded-2' />
                                </figure>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <figure onClick={openimage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className='layer rounded-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-3x text-white fa-plus "></i>
                                    </div>
                                    <img src={img4} alt="CONTROLLER" className='w-100 rounded-2' />
                                </figure>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <figure onClick={openimage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className='layer rounded-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-3x text-white fa-plus "></i>
                                    </div>
                                    <img src={img5} alt="LOCKED SAFE" className='w-100 rounded-2' />
                                </figure>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <figure onClick={openimage} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className='layer rounded-2 d-flex justify-content-center align-items-center'>
                                        <i className="fa-solid fa-3x text-white fa-plus "></i>
                                    </div>
                                    <img src={img6} alt="SUBMARINE" className='w-100 rounded-2' />
                                </figure>
                            </div>
                        </div>
                    </div>

                </section>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog  modal-xl modal-dialog-scrollable ">
                        <div class="modal-content py-4">
                            <div class="modal-header border-0">
                                <button type="button" class=" ms-auto close-icon" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></button>
                            </div>
                            <div class="modal-body">
                                <div className='py-5 '>
                                    <div className='w-75 m-auto pb-5 rounded-3 bg-white '>
                                        <div className=''>
                                            <div className='text-center '>
                                                <h2 className='fw-bolder fs-1 titel'></h2>
                                                <div className="icon1 position-relative ">
                                                    <i className="fa-solid fa-star fa-2xl mt-3"></i>
                                                </div>
                                            </div>
                                            <div className="w-75 m-auto text-center item1">
                                                <img src="" alt="" className='image w-100 rounded-3 py-5' />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, consectetur ad distinctio omnis nihil neque nobis maxime maiores facere, libero nam recusandae dolor veniam esse dignissimos dolorem minus explicabo nesciunt!</p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class=" close" data-bs-dismiss="modal"> <i class="fa-solid fa-xmark"></i> Close Window</button>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}


function openimage(e) {
    let titel = e.target.nextSibling.getAttribute("alt");
    let imageSource = e.target.nextSibling.getAttribute("src")
    document.querySelector(".image").setAttribute("src", imageSource)
    document.querySelector(".titel").innerHTML = titel

}


const Product = () => {
    return(
        <>
            <div class="container-fluid bg-primary py-5 bg-hero mb-5">
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">Our Products</h1>
                            <a href="#" class="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="#" class="btn btn-secondary py-md-3 px-md-5">Products</a>
                        </div>
                    </div>
                </div>
            </div>
        
        

            <div class="container-fluid py-5">
                <div class="container">
                    <div class="mx-auto text-center mb-5" style = {{width: "500px"}} >
                        <h6 class="text-primary text-uppercase">Products</h6>
                        <h1 class="display-5">Our Fresh & Organic Products</h1>
                    </div>
                    <div className="container-fluid  px-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href="#"><i className="bi bi-cart text-white"></i></a>
                                        <a className="btn bg-secondary py-2 px-3" href="#"><i className="bi bi-eye text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt="" />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href="#"><i className="bi bi-cart text-white"></i></a>
                                        <a className="btn bg-secondary py-2 px-3" href="#"><i className="bi bi-eye text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href="#"><i className="bi bi-cart text-white"></i></a>
                                        <a className="btn bg-secondary py-2 px-3" href="#"><i className="bi bi-eye text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>



            <div class="container-fluid bg-primary feature py-5 pb-lg-0 mt-5" style = {{margin: "0px 0px 135px 0px"}} >
                <div class="container py-5 pb-lg-0">
                    <div class="mx-auto text-center mb-3 pb-2" style = {{width: "500px"}} >
                        <h6 class="text-uppercase text-secondary">Features</h6>
                        <h1 class="display-5 text-white">Why Choose Us!!!</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-3">
                            <div class="text-white mb-5">
                                <div class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style = {{width: "60px", height:"60px"}} >
                                    <i class="fa fa-seedling fs-4 text-white"></i>
                                </div>
                                <h4 class="text-white">100% Organic</h4>
                                <p class="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                            <div class="text-white">
                                <div class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style = {{width: "60px", height:"60px"}} >
                                    <i class="fa fa-award fs-4 text-white"></i>
                                </div>
                                <h4 class="text-white">Award Winning</h4>
                                <p class="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="d-block bg-white h-100 text-center p-5 pb-lg-0">
                                <p>At et justo elitr amet sea at. Magna et sit vero at ipsum sit et dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita, vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor</p>
                                <img class="img-fluid" src="img/feature.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="text-white mb-5">
                                <div class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style = {{width: "60px", height:"60px"}}>
                                    <i class="fa fa-tractor fs-4 text-white"></i>
                                </div>
                                <h4 class="text-white">Modern Farming</h4>
                                <p class="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                            <div class="text-white">
                                <div class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style = {{width: "60px", height:"60px"}}>
                                    <i class="fa fa-phone-alt fs-4 text-white"></i>
                                </div>
                                <h4 class="text-white">24/7 Support</h4>
                                <p class="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Product;
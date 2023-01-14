const About = () => {
    return(
        <>

<div className="container-fluid about pt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                        <img className="img-fluid mt-auto mx-auto" src="img/about.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5">We Produce Organic Food For Your Family</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                            <i className="fa fa-seedling display-1 text-secondary"></i>
                            <h4>100% Organic</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-award display-1 text-secondary"></i>
                            <h4>Award Winning</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="container-fluid bg-primary facts py-5 mb-5">
        <div className="container py-5">
            <div className="row gx-5 gy-4">
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style = {{ height:"60px", width : "60px" }}>
                            <i className="fa fa-star fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Our Experience</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style = {{ height:"60px", width : "60px" }} >
                            <i className="fa fa-users fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Farm Specialist</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style = {{ height:"60px", width : "60px" }}>
                            <i className="fa fa-check fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Complete Project</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style = {{ height:"60px", width : "60px" }} >
                            <i className="fa fa-mug-hot fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Happy Clients</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style = {{width : "500px"}} >
                <h6 className="text-primary text-uppercase">The Team</h6>
                <h1 className="display-5">We Are Professional Organic Farmers</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style = {{background : "background: rgba(52, 173, 84, .85"}}>
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style = {{background : "background: rgba(52, 173, 84, .85"}}>
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style = {{background : "background: rgba(52, 173, 84, .85"}} >
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary"></i></a>
                                <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
};

export default About;
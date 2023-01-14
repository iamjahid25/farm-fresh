import {Link} from "react-router-dom";

const Header = () => {
    return(
        <>
        <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5 py-3 align-items-center">
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-start">
                        <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                        <h2 className="mb-0">+012 345 6789</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="index.html" className="navbar-brand ms-lg-5">
                            <h1 className="m-0 display-4 text-primary"><span className="text-secondary">Farm</span>Fresh</h1>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-end">
                        <a className="btn btn-primary btn-square rounded-circle me-2" href="/"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-primary btn-square rounded-circle me-2" href="/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-primary btn-square rounded-circle me-2" href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-primary btn-square rounded-circle" href="/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex d-lg-none">
            <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
                <Link  to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Service</Link>
                <Link to="/product" className="nav-item nav-link">Product</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
        </div>
    </nav>
           
        </>
    )
};

export default Header;
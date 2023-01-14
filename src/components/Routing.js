import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="//" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/service" element={<Service/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
            </Routes>
        </>
    );
};

export default Routing;
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Routing from "./components/Routing";

import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
        <Header></Header>
            <Routing></Routing>

        <Footer></Footer>
        


    


        <a href="/" classNameName="btn btn-secondary py-3 fs-4 back-to-top"><i classNameName="bi bi-arrow-up"></i></a>


     </BrowserRouter>

    </>
  );
}

export default App;

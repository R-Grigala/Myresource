import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function MyRouter(){
    return (
        <Routes>
            <Route path="/home" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/contact" element={Contact} />
        </Routes>
    )
}

export default MyRouter;
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "../Components/Home";
import { Details } from "../Components/Details";

const RoutesComponent = ():JSX.Element => {
  

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/Details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export { RoutesComponent };
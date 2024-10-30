import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "../Components/Home";
import { Details } from "../Components/Details";

const RoutesComponent = ():JSX.Element => {
    // importar el endpoint de la api
    const endpoint= import.meta.env.VITE_ENDPOINT_API;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home endpoint={endpoint}/>}/>

                <Route path="/Details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export { RoutesComponent };
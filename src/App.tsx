import Home from "./Components/Home";


const App=() => {
// importar el endpoint de la api
const endpoint= import.meta.env.VITE_ENDPOINT_API; 

  return (
    <div className="font-poppins">
      <Home endpoint={endpoint} />

    </div>
  )
}

export default App

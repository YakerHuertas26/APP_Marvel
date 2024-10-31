import md5 from "md5";
import { useEffect } from "react";
import { useStoreApp } from "../Store/Store";
import avatar from '../assets/black-widow.png';
// tipar mis datos Item
interface Movie{
    name: string;
    description:string;
    thumbnail:string;
}

// tipeo los datos de mi element
interface Element{
    name: string;
    description:string;
    thumbnail:{
        path:string,
        extension:string
    }
}

const Carousel = () => {
    // importa mis estados 
    const {lista,setLista}=useStoreApp()
    // Función para hace la petición 
    const PetitionApi= async():Promise <void>=>{
        
        const endpoint= import.meta.env.VITE_ENDPOINT_API;
        const publicKey= import.meta.env.VITE_KEY_PUBLIC;
        const privateKey= import.meta.env.VITE_KEY_PRIVATE;
        const ts= Date.now.toString();

        // genera el hash:
        const hash= md5(ts+privateKey+publicKey);
        const URL=`${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;


        try {
            const petition= await fetch(URL);
            const dates = await petition.json()
            const result=  await dates.data.results
            const item= result.map((elemen:Element)=>{
                const itemLista:Movie = {
                    name: elemen.name,
                    description:elemen.description,
                    thumbnail:`${elemen.thumbnail.path
                        }.${elemen.
                            thumbnail.extension}`
                }
                return itemLista;
            })
            setLista(item)
            
        } catch (error) {
            console.log(error);
        }
    }

    // Treaer la data
    useEffect(()=>{
        PetitionApi(); 
    },[])
  
    const listaData:any= lista;
    return ( 
        lista?
        <>  <div className="rounded-md pt-3">
                <img className=" h-full w-auto   opacity-70   rounded-md" 
                src={listaData[0].thumbnail} alt="fondo" />
            </div>
            
            <div className="h-full w-full absolute top-0 ">
                <div className="h-full w-full" style={{
                    backgroundImage: `url(${avatar})`, // 
                    backgroundSize: 'cover', // Ajusta el 
                    backgroundRepeat: 'no-repeat', // Evita 
                    backgroundPosition: 'top', // Centra 
                }}>
                    
                </div>

            </div>
            <div className="absolute bg-gradient-to-t from-gray-800 to-transparent h-[30%] w-full bottom-0" ></div>
        </>

            
        : <p>cargando...</p>
    );
}

export { Carousel };
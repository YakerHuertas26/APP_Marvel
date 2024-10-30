import md5 from "md5";
import { useEffect } from "react";
import { useStoreApp } from "../Store/Store";

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

    return ( 
        lista?
        <div className="  p-1" >
            <p>nombre</p>
        </div>
        : <p>cargando...</p>
    );
}

export { Carousel };
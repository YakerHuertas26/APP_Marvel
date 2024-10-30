/// <reference types="vite/client" />

// Interface para las variables de entorno 
interface ImportMetaEnv {
    readonly VITE_ENDPOINT_API:string;
    // acá se agrega las demás si lo hubiera
}

// para tener el acceso 
interface ImportMeta {
    readonly env: ImporMetaEnv;
}
import { create } from "zustand";

// defino los tipos 
interface typeStore {
    lista: string[] |null,
    setLista:(p:string[]) => void;
}

const useStoreApp= create <typeStore> ((set)=>({
    lista:null,
    setLista:(p)=> set({lista:p})
}))

export {useStoreApp};
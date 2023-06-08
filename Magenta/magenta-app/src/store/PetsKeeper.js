import { create } from "zustand";

const petsData = (set) =>({
petsList:[],
setPetsStore:(pet) =>{
    set((state) =>({
        petsList:pet
    })) 
}
})
const petsStore = create(petsData)

export {petsStore};


import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createUserSlice } from './userSlice';

// este es el hook global donde se integraran todos los demas hooks que necesite nuestra app para gestionar el estado

export const useGlobalStore = create(
  persist(
    (set:any, get:any) => ({
      // aqui van desplegandose las otras rebanadas de estado conforme surjan 
      //estos son hook  a modo de ejemplo...
      ...createUserSlice(set, get),
    }),
    {
      name: 'spotter-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)


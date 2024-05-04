import { createSlice } from "@reduxjs/toolkit";

// Un slice es un conjuntos de variables y funciones
const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Jesus",
        lastName:"Retamozo",
    },
   
  });
  

  

  
  // Para poder usar esto dentro del store, debo exportarlo como un reducer
  export const userReducer = userSlice.reducer;
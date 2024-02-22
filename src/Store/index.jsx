import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice.jsx";
import pokemonName from './slices/pokemonName.slice.jsx';
const store = configureStore({
    reducer:{
        trainerName,
        pokemonName,
    }

});

export default store;




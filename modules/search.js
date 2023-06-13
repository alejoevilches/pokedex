import { pokemons, showPokemons, getPokemonTypes } from "/modules/cards.js";
import createEvents from "/modules/storage.js";

const searchBar=document.querySelector("#select_bar");

const cardContainer=document.querySelector(".container")


const handleGetSelect=(e)=>{
    let typesArr=[];
    cardContainer.innerHTML = "";
    let selectedType=e.target.value;
    pokemons.map((pokemon)=>{
        let types=getPokemonTypes(pokemon);
        if (types.includes(selectedType)){
            typesArr.push(pokemon);
            showPokemons(typesArr);
            createEvents();
        } else if (selectedType==="all"){
            location.reload();
        }
    })
};



searchBar.addEventListener("change", handleGetSelect)
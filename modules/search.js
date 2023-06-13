import { pokemons, showPokemons, getPokemonTypes } from "/modules/cards.js";

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
        } else if (selectedType==="all"){
            console.log("seleccionado")
            location.reload();
        }
    })
};



searchBar.addEventListener("change", handleGetSelect)
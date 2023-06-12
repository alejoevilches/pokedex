import { pokemons, showPokemons, getPokemonTypes } from "/modules/cards.js";

const searchBar=document.querySelector("#select_bar");
console.log(searchBar);

/* const getSelect=(e)=>{
    let selectedType=e.target.value;
    pokemons.filter((pokemon)=

} */

searchBar.addEventListener("change", (e)=>{
    console.log(e)
})
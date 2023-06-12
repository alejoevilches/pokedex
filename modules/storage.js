import { pokemons, showPokemons } from "/modules/cards.js";
const favourites=[]
const favsButton=document.querySelector("#favs");
const cardContainer=document.querySelector(".container")
let isFavsOpen=false;
console.log(favsButton);

const createEvents=()=>{
    const likeButtons=document.querySelectorAll("box-icon");
    likeButtons.forEach(button=>{
        button.addEventListener("click", handleLikeClick);
    })
}

const handleLikeClick=(e)=>{
    let match=pokemons.find(pokemon=>pokemon.name==e.target.id);
    favourites.some(pokemon=>pokemon.name==match.name) ? deletePokemonFav(match) : favourites.push(match);
    localStorage.setItem("pokemons", JSON.stringify(favourites));
}

const deletePokemonFav=(match)=>{
    let index=favourites.indexOf(match);
    favourites.splice(index,1);
    localStorage.setItem("pokemons", JSON.stringify(favourites));
}

const showFavourites=()=>{
    cardContainer.innerHTML="";
    if (isFavsOpen){
        showPokemons(pokemons);
        isFavsOpen=false
    } else {
        showPokemons(favourites);
        isFavsOpen=true;
    }
}

favsButton.addEventListener("click", showFavourites);

export default createEvents;
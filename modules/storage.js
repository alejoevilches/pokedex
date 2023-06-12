import { pokemons, showPokemons } from "/modules/cards.js";
const favourites=[]
const favsButton=document.querySelector("#favs");
const cardContainer=document.querySelector(".container")
let isFavsOpen=false;

const createEvents=()=>{
    const likeButtons=document.querySelectorAll("box-icon");
    likeButtons.forEach(button=>{
        button.addEventListener("click", handleLikeClick);
    })
    console.log(likeButtons);
}

const handleLikeClick=(e)=>{
    console.log(e);
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
        createEvents();
    } else {
        showPokemons(JSON.parse(localStorage.getItem("pokemons")));
        isFavsOpen=true;
        createEvents();
    }
}

favsButton.addEventListener("click", showFavourites);

export default createEvents;
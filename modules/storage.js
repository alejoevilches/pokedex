import pokemons from "/modules/cards.js";
const favourites=[]

const createEvents=()=>{
    const likeButtons=document.querySelectorAll("box-icon");
    likeButtons.forEach(button=>{
        button.addEventListener("click", handleLikeClick);
    })
}

const handleLikeClick=(e)=>{
    let match=pokemons.find(pokemon=>pokemon.name==e.target.id);
    favourites.some(pokemon=>pokemon.name==match.name) ? deletePokemonFav(match) : favourites.push(match);
    console.log(favourites);
    localStorage.setItem("pokemons", JSON.stringify(favourites));
}

const deletePokemonFav=(match)=>{
    let index=favourites.indexOf(match);
    favourites.splice(index,1);
    console.log(favourites);
}


export default createEvents;
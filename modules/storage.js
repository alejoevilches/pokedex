const createEvents=()=>{
    const likeButtons=document.querySelectorAll("box-icon");
    likeButtons.forEach(button=>{
        button.addEventListener("hover", console.log("clicked"))
    })
}

export default createEvents;
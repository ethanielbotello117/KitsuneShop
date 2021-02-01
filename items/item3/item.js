
let showFront = function(){
    itemimg.style.background = "blue";
}

let showBack = function(){
    itemimg.style.background = "red";
}

front.addEventListener("click", showFront);
back.addEventListener("click", showBack);
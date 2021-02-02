
let togglePic1 = function(){
    mainImg.style.background = "url(../../images/chomusuke.png)";
    mainImg.style.backgroundSize = "cover";
    mainImg.style.backgroundReapeat = "no-repeat";
    mainImg.style.backgroundPosition = "center";
}

let togglePic2 = function(){
    mainImg.style.background = "url(../../images/Tofumang.png)";
    mainImg.style.backgroundSize = "cover";
    mainImg.style.backgroundReapeat = "no-repeat";
    mainImg.style.backgroundPosition = "center";
}

front.addEventListener("click", togglePic1);
back.addEventListener("click", togglePic2);

function toggleMenu(){
    let navigation = document.querySelector('.menu');
    let toggle = document.querySelector('.toggle');
    let links = document.querySelector('.linklist');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    links.classList.toggle('active');
}
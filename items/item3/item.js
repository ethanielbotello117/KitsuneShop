function toggleMenu(){
    let navigation = document.querySelector('.menu');
    let toggle = document.querySelector('.toggle');
    let links = document.querySelector('.linklist');
    let html = document.querySelector('html');
    let body = document.querySelector('body');
    let plop = document.querySelector('.plop');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    links.classList.toggle('active');
    html.classList.toggle('active');
    body.classList.toggle('active');
    plop.classList.toggle('active');
}




let counter = 2
let counter2 = 8;
let counter3 = 10;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    document.getElementById('radio' + counter2).checked = true;
    document.getElementById('radio' + counter3).checked = true;
    counter++;
    counter2--;
    counter3++;
    if(counter > 4){
        counter = 1;
    }
    if(counter2 < 5){
        counter2 = 8;
    }
    if(counter3 > 12){
        counter3 = 9;
    }
}, 5000);

let person = {
    firstName: "ok",
    
}
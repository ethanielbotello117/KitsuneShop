function toggleMenu(){
    let navigation = document.querySelector('.menu');
    let toggle = document.querySelector('.toggle');
    let links = document.querySelector('.linklist')
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    links.classList.toggle('active');
}
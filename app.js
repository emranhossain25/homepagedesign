
let links = document.querySelectorAll(".linkcontain");

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        links.forEach( item =>{ item.classList.remove('active')})
        link.classList.add('active')
    })
})

let toggleBTN = document.querySelector('.toggle');
let ul = document.querySelector('.list');

toggleBTN.addEventListener('click', ()=>{
    toggleBTN.classList.toggle('active');
    ul.classList.toggle('active')
})

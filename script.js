let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let mainMenu = document.getElementById('mainMenu')

openMenu.addEventListener('click', ()=>{
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
})

closeMenu.addEventListener('click', ()=>{
    mainMenu.style.top = '-100%'
})
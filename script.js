let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let mainMenu = document.getElementById('mainMenu')
let form = document.getElementById('form')

let home = document.querySelector('.fa-house').parentElement
let about = document.querySelector('.fa-user').parentElement
let skills = document.querySelector('.fa-hashtag').parentElement
let projects = document.querySelector('.fa-diagram-project').parentElement
let contact = document.querySelector('.fa-address-card').parentElement

home.addEventListener('click', ()=>{
    mainMenu.style.top = '-110%'
})

about.addEventListener('click', ()=>{
    mainMenu.style.top = '-110%'
})


skills.addEventListener('click', ()=>{
    mainMenu.style.top = '-110%'
})

projects.addEventListener('click', ()=>{
    mainMenu.style.top = '-110%'
})

contact.addEventListener('click', ()=>{
    mainMenu.style.top = '-110%'
})

openMenu.addEventListener('click', ()=>{
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
})

closeMenu.addEventListener('click', ()=>{
    mainMenu.style.top = '-110%'
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let btn = document.getElementById('form-submit')
    btn.disabled = true
    fetch(form.action, {
        method:"POST",
        body: new FormData(document.getElementById('form')),
    }).then(
        response => response.json()
    ).then((html) =>{
        alert('Your query has been submitted.')
        btn.disabled = false
    })
    form.reset()
})
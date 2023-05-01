let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let mainMenu = document.getElementById('mainMenu')
let form = document.getElementById('form')

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
})
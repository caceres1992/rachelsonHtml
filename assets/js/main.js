/*===== MENU SHOW =====*/ 
const showMenu = ()=>{

    const toggle = document.getElementById('nav-toggle')
    const nav = document.getElementById('nav-menu')
   
    if(toggle && nav){
        toggle.addEventListener('click',()=>{

            nav.classList.toggle('show')
        })
     }
}

showMenu()

/*===== REMOVE MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
        // ativar link al pincharlo
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')

        // remover la clase show para que al darle click al menu se oculte
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click',linkAction))
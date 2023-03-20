const menuBars = document.getElementById('menu-bars'),
      overlay = document.getElementById('overlay'),
      nav1 = document.getElementById('nav-1'),
      nav2 = document.getElementById('nav-2'),
      nav3 = document.getElementById('nav-3'),
      nav4 = document.getElementById('nav-4'),
      nav5 = document.getElementById('nav-5');




// Toggle Function 
const toogleNav =() =>{
    // toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change')
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.add('overlay-slide-right')
    }else{
        overlay.classList.add('overlay-slide-left')
    }
}

// Event Lsitners
menuBars.addEventListener('click', toogleNav)
nav1.addEventListener('click',toogleNav)
nav2.addEventListener('click',toogleNav)
nav3.addEventListener('click',toogleNav)
nav4.addEventListener('click',toogleNav)
nav5.addEventListener('click',toogleNav)
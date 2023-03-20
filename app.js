const menuBars = document.getElementById("menu-bars"),
  overlay = document.getElementById("overlay"),
  nav1 = document.getElementById("nav-1"),
  nav2 = document.getElementById("nav-2"),
  nav3 = document.getElementById("nav-3"),
  nav4 = document.getElementById("nav-4"),
  nav5 = document.getElementById("nav-5"),
  navItems = [nav1,nav2,nav3,nav4,nav5];


// Control Navigation ANimation

const navAnimation =(direction1,direction2) =>{
    navItems.forEach((nav ,i) =>{
        nav.classList.replace(`slide-${direction1}-${i + 1}`,`slide-${direction2}-${i + 1}`)
    })
}

// Toggle Function
const toogleNav = () => {
  // toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left','overlay-slide-right')

    // Animate IN- Nava Items
    navAnimation('out','in')
  } else {
    overlay.classList.replace('overlay-slide-right','overlay-slide-left')

    // Animate Out- Nava Items
    navAnimation('in','out')
  }
};

// Event Lsitners
menuBars.addEventListener("click", toogleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click',toogleNav)
})


const menu$$ = document.querySelector(".header_menu-icon");
const drop$$ = document.querySelector(".header_nav-section")

const dropNav = () => {  
    
    drop$$.classList.toggle("dropMenu");
}

menu$$.addEventListener("click", dropNav);

window.addEventListener("resize", () => {
    if (window.innerWidth >= 992 ){
        drop$$.className= "header_nav-section";     

    } else {

    }                  
    
});


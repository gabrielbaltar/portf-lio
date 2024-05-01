const htmlBody = document.querySelector(".light-dark-mode-icon");


htmlBody.addEventListener("click", () => {

    const menuMobile = document.querySelector(".menu-mobile");

    const body = document.body;

    const themeIcon = document.getElementById("change-icon-mode");
    const menuIconMobile3 = document.getElementById("menu-icon-mobile-sobre");
    const githubSmallIcon3 = document.getElementById("github-small-icon");

    if(body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme", "light");
        
        themeIcon.src = "./img/to-light-mode.svg";
        menuIconMobile3.src = "./img/menu-icon-dark-mode.svg";
        githubSmallIcon3.src = "./img/github-small-icon.svg";

    }else {
        body.setAttribute("data-theme", "dark");
        
        themeIcon.src = "./img/to-dark-mode.svg";
        menuIconMobile3.src = "./img/menu-icon-light-mode.svg";
        githubSmallIcon3.src = "./img/github.svg";

    }

    menuMobile.classList.remove("menu-mobile-visible");

});

// Função para abrir e fechar o menu mobile 

let menuButtonClicked = false;

const menuIcon = document.querySelector(".menu-mobile-icon");

menuIcon.addEventListener("click", () =>{

    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("menu-mobile-visible");

});

// Função para fechar o menu mobile se aumentar a tela a partir de 550px

window.addEventListener("resize", () => {

    const menuMobile = document.querySelector(".menu-mobile");
    if(window.innerWidth > 550 && !menuButtonClicked) {
        menuMobile.classList.remove("menu-mobile-visible");
    }

});

// Função para fechar o menu mobile se clicar em algum lugar fora dele

document.addEventListener("click", (event) => {

    const menuComplete = document.querySelector(".menu-mobile");
    const menuIconMobile = document.querySelector(".menu-mobile-icon ");

    if(menuComplete.classList.contains("menu-mobile-visible") && !menuIconMobile.contains(event.target)){

        menuComplete.classList.remove("menu-mobile-visible");
        
    }
});
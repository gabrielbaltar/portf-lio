// Adicionando Dark mode no Portfólio 

const htmlBody = document.querySelector(".light-dark-mode-icon");


htmlBody.addEventListener("click", () => {

    console.log("click");
    const body = document.body;
    const themeIcon = document.getElementById("change-icon-mode");
    const whiteArrow = document.getElementById("white-arrow");
    const whiteArrow2 = document.getElementById("white-arrow-two");
    const menuIconMobile = document.getElementById("menu-icon-mobile");
    const currentTheme = document.body.getAttribute("data-theme");
    const externalLink = document.getElementById("external-link");
    
    
    if(body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme", "light");
        themeIcon.src = "./img/to-light-mode.svg";
        whiteArrow.src = "./img/white-arrow.svg";
        whiteArrow2.src = "./img/white-arrow-two.svg";
        
        externalLink.src = "./img/white-external-link.svg";
        menuIconMobile.src = "./img/menu-icon-dark-mode.svg";
    }else {
        body.setAttribute("data-theme", "dark");
        themeIcon.src = "./img/to-dark-mode.svg";
        whiteArrow.src = "./img/arrow.svg";
        whiteArrow2.src = "./img/arrow-two.svg";
        externalLink.src = "./img/externallink.svg";
        menuIconMobile.src = "./img/menu-icon-light-mode.svg";

    }

});
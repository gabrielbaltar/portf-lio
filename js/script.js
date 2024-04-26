// Adicionando Dark mode no Portfólio 

const htmlBody = document.querySelector(".light-dark-mode-icon");


htmlBody.addEventListener("click", () => {

    const body = document.body;
    const themeIcon = document.getElementById("change-icon-mode");
    const whiteArrow = document.getElementById("white-arrow");
    const whiteArrow2 = document.getElementById("white-arrow-two");
    const menuIconMobile = document.getElementById("menu-icon-mobile");
    const currentTheme = document.body.getAttribute("data-theme");
    const externalLink = document.getElementById("external-link");
    const githubIcon = document.querySelectorAll(".github-dark-mode-change img");
    const externalLinkIcon = document.querySelectorAll(".external-link-change-mode img");
    const piukaLogo = document.getElementById("piuka-logo");
    const deloitteLogo = document.getElementById("deloitte-icon");
    
    if(body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme", "light");
        themeIcon.src = "./img/to-light-mode.svg";
        whiteArrow.src = "./img/white-arrow.svg";
        whiteArrow2.src = "./img/white-arrow-two.svg";
        piukaLogo.src = "./img/white-piuka-logo.svg"
        menuIconMobile.src = "./img/menu-icon-dark-mode.svg";
        deloitteLogo.src = "./img/white-deloitte-logo.svg";
        githubIcon.forEach(icon => {
            icon.src = "./img/white-github-icon.svg";
        });

        externalLinkIcon.forEach(icon => {
            icon.src = "./img/white-external-link.svg";
        });

    }else {
        body.setAttribute("data-theme", "dark");
        themeIcon.src = "./img/to-dark-mode.svg";
        whiteArrow.src = "./img/arrow.svg";
        whiteArrow2.src = "./img/arrow-two.svg";
        piukaLogo.src = "./img/piuka.svg"
        menuIconMobile.src = "./img/menu-icon-light-mode.svg";
        deloitteLogo.src = "./img/deloitte.svg";

        githubIcon.forEach(icon => {
            icon.src = "./img/github2.svg";
        });

        externalLinkIcon.forEach(icon => {
            icon.src = "./img/externallink.svg";
        });
    }

});
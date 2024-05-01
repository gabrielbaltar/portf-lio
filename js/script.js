// Adicionando Dark mode no Portfólio 

const htmlBody = document.querySelector(".light-dark-mode-icon");


htmlBody.addEventListener("click", () => {

    const menuMobile = document.querySelector(".menu-mobile");

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
    const githubSmallIcon = document.getElementById("github-small-icon");
    

    if(body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme", "light");
        themeIcon.src = "./img/to-light-mode.svg";
        whiteArrow.src = "./img/white-arrow.svg";
        //whiteArrow2.src = "./img/white-arrow-two.svg";
        piukaLogo.src = "./img/white-piuka-logo.svg"
        menuIconMobile.src = "./img/menu-icon-dark-mode.svg";
        deloitteLogo.src = "./img/white-deloitte-logo.svg";
        githubSmallIcon.src = "./img/github-small-icon.svg";

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
        //whiteArrow2.src = "./img/arrow-two.svg";
        piukaLogo.src = "./img/piuka.svg"
        menuIconMobile.src = "./img/menu-icon-light-mode.svg";
        deloitteLogo.src = "./img/deloitte.svg";
        githubSmallIcon.src = "./img/github.svg";

        githubIcon.forEach(icon => {
            icon.src = "./img/github2.svg";
        });

        externalLinkIcon.forEach(icon => {
            icon.src = "./img/externallink.svg";
        });
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

// Configuraçao do EmailJS 

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    emailjs.sendForm('service_84c3mrn', 'template_7sz7guv', this)
      .then(function() {

        const successIcon = document.querySelector(".feedback-success");
        console.log(successIcon);
        successIcon.classList.add("visible");
        document.getElementById('form-contato').reset();

        setTimeout( () => {
            successIcon.classList.remove('visible');
        }, 3000);

      }, function(error) {
        alert('Falha ao enviar mensagem: ' + JSON.stringify(error));
      });
  });
  

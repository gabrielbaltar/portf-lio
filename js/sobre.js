const htmlBody2 = document.querySelector(".light-dark-mode-icon");

// Função para carregar o tema salvo no local storage
document.addEventListener("DOMContentLoaded", () => {

    applyThemeOnLoad();

    const themeToggleButton = document.querySelector(".light-dark-mode-icon");
    if(themeToggleButton) {
        themeToggleButton.addEventListener("click", () => {
            toggleTheme();
        });
    }

    
});

htmlBody2.addEventListener("click", () => {

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

    //Salvando o tema no local storage
    localStorage.setItem("theme", body.getAttribute("data-theme"));
});

// Função para trocar o tema
function toggleTheme() {

    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    //const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    body.setAttribute("data-theme", newTheme);
    updateIconMode(newTheme);
}

// Função para trocar o tema

// Função para manter o tema salvo no local storage
function applyThemeOnLoad(){
    const savedTheme = localStorage.getItem("theme") || "dark";
    const body = document.body;
    const themeIcon = document.getElementById("change-icon-mode");

    if(savedTheme){
        body.setAttribute("data-theme", savedTheme);
        updateIconMode(savedTheme); 
    }
}

// Função para trocar o ícone do tema ao mudar de página sem clicar no botão de mudar tema

function updateIconMode(theme) {

    const themeIcon = document.getElementById("change-icon-mode");
    
    if(themeIcon) {
        themeIcon.src = theme === "dark" ? "./img/to-dark-mode.svg" : "./img/to-light-mode.svg";
    }

};

// Função para abrir e fechar o menu mobile 

let menuButtonClicked2 = false;

const menuIcon2 = document.querySelector(".menu-mobile-icon");

menuIcon2.addEventListener("click", () =>{

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
        
        successIcon.classList.add("visible");
        
        document.getElementById('form-contato').reset();

        setTimeout( function() {
            successIcon.classList.remove('visible');
        }, 3000);

      }, function(error) {
        alert('Falha ao enviar mensagem: ' + JSON.stringify(error));
      });
  });
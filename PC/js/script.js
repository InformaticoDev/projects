let slideIndex = 0;
let slideIndex1 = 0;
let intervalo;
let intervalo1;

function mostrarSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moverSlide(direcao) {
    clearInterval(intervalo); // Pausa o carrossel automático ao clicar nos botões
    mostrarSlide(slideIndex + direcao);
    iniciarCarrossel(); // Reinicia o carrossel automático
}

function iniciarCarrossel() {
    intervalo = setInterval(() => {
        mostrarSlide(slideIndex + 1);
    }, 4000); // Muda de slide a cada 4 segundos
}

// Inicia o carrossel automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarCarrossel);






function mostrarSlide1(index) {
    const slides1 = document.querySelector('.slides1');
    const totalSlides1 = document.querySelectorAll('.slide1').length;

    if (index >= totalSlides1) {
        slideIndex1 = 0;
    } else if (index < 0) {
        slideIndex1 = totalSlides1 - 1;
    } else {
        slideIndex1 = index;
    }

    slides1.style.transform = `translateX(${-slideIndex1 * 100}%)`;
}

function moverSlide1(direcao) {
    clearInterval(intervalo1); // Pausa o carrossel automático ao clicar nos botões
    mostrarSlide1(slideIndex1 + direcao);
    iniciarCarrossel1(); // Reinicia o carrossel automático
}

function iniciarCarrossel1() {
    intervalo1 = setInterval(() => {
        mostrarSlide1(slideIndex1 + 1);
    }, 4000); // Muda de slide a cada 4 segundos
}

// Inicia o carrossel automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarCarrossel1);





//aparecer transicao
function reveal(){
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible){
            el.classList.add('active');
        }else{
            el.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', reveal);
//chamar no carregamento da página também
reveal();


//aparecer transicao
function revealDI(){
    const elements = document.querySelectorAll('.revealDI');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible){
            el.classList.add('active');
        }else{
            el.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', revealDI);
//chamar no carregamento da página também
revealDI();

//aparecer transicao
function revealES(){
    const elements = document.querySelectorAll('.revealES');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible){
            el.classList.add('active');
        }else{
            el.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', revealES);
//chamar no carregamento da página também
revealES();



// img sobre banner
window.onload = function() {
    document.body.className += ' loaded'
  };




   // Mostrar/esconder botão "Voltar ao topo"
   const btnTop = document.getElementById("btnTop");

   window.onscroll = function() {
       if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
           btnTop.style.display = "block";
       } else {
           btnTop.style.display = "none";
       }
   };

   btnTop.addEventListener("click", function() {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   });

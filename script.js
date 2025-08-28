const dataInicial= new Date(2024, 6, 19);

function atualizarContador(){
    const hoje = new Date();
    const diferenca = hoje - dataInicial;
    const dias = Math.floor(diferenca /(1000 * 60 * 60 * 24));
    
document.getElementById('contador').textContent = dias;
}

atualizarContador();

setInterval(atualizarContador, 1000 * 60 * 60 * 24);

let index = 0;
const slides = document.querySelectorAll("#slideshow img");
const total = slides.length;

function showNextSlide(){
    slides[index].classList.remove("active");
    index = (index + 1) % total;
    slides[index].classList.add("active");
}

setInterval(showNextSlide, 2500);
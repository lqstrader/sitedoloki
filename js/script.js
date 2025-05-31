// Lógica do Carrossel
let indiceSlideAtual = 0; // Começa com o primeiro slide (índice 0)
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Mostra o primeiro slide assim que a página carrega
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        mostrarSlide(indiceSlideAtual);
    }
});

// Função para avançar ou retroceder os slides
function mudarSlide(n) {
    mostrarSlide(indiceSlideAtual += n);
}

// Função para mostrar um slide específico (usado pelas bolinhas/dots)
function mostrarSlide(n) {
    if (slides.length === 0 || dots.length === 0) {
        // console.log("Carrossel não encontrado ou sem slides/dots.");
        return; // Sai da função se não houver slides ou dots
    }

    // Volta para o primeiro slide se chegar ao final
    if (n >= slides.length) {
        indiceSlideAtual = 0;
    }
    // Vai para o último slide se estiver no primeiro e clicar em anterior
    else if (n < 0) {
        indiceSlideAtual = slides.length - 1;
    }
    else {
        indiceSlideAtual = n;
    }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todas as bolinhas
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostra o slide atual e marca a bolinha como ativa
    slides[indiceSlideAtual].style.display = "block";
    dots[indiceSlideAtual].className += " active";
}

var modal = document.getElementById("meuModal");
var imgModal = document.getElementById("imgModal");
var legendaText = document.getElementById("legenda");

function abrirModal(srcImagem, altImagem) {
  if (modal) {
    modal.style.display = "block";
    imgModal.src = srcImagem;
    legendaText.innerHTML = altImagem;
  }
}

function fecharModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

var span = document.getElementsByClassName("fechar")[0];
if (span) {
  span.onclick = function() {
    fecharModal();
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    fecharModal();
  }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});

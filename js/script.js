**3. Código JavaScript (js/script.js):**

```javascript
// Pega o elemento modal
var modal = document.getElementById("meuModal");

// Pega a tag <img> que vai mostrar a imagem no modal
var imgModal = document.getElementById("imgModal");
// Pega o elemento para exibir a legenda
var legendaText = document.getElementById("legenda");

// Função para abrir o modal
function abrirModal(srcImagem, altImagem) {
  modal.style.display = "block";
  imgModal.src = srcImagem;
  legendaText.innerHTML = altImagem;
}

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("fechar")[0];

// Função para fechar o modal
function fecharModal() {
  modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
  if (event.target == modal) {
    fecharModal();
  }
}

// Fecha o modal se o usuário pressionar a tecla "Esc"
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});
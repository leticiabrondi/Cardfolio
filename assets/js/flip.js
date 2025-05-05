// === SCRIPT.JS ===
// Carrega dinamicamente o verso do card com base na categoria selecionada

const cardBack = document.getElementById("card-back-content");
const radios = document.querySelectorAll("input[name='category']");

function loadContent(category) {
  fetch(`assets/components/${category}.html`)
    .then(res => res.text())
    .then(html => cardBack.innerHTML = html)
    .catch(err => cardBack.innerHTML = "<p>Erro ao carregar conteúdo.</p>");
}

// Inicialização padrão com front-end
loadContent("front-end");

// Listener para mudança de categoria
radios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    loadContent(e.target.id);
  });
});

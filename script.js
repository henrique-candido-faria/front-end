// Seleciona o elemento do botão com o ID "clickMe" e adiciona um ouvinte de evento de clique
document.getElementById("clickMe").addEventListener("click", function () {
    // Quando o botão é clicado, altera o texto do elemento com o ID "output"
    document.getElementById("output").textContent = "Você clicou no botão!";
    // O texto "Você clicou no botão!" será exibido no parágrafo com ID "output"
});

const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavraschaves );

function mostraPalavraschaves() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resustado-palavrachave");
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(", ")
}
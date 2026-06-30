const botoes = document.querySelectorAll(".curtir");

botoes.forEach(botao => {

    let curtidas = 0;

    botao.addEventListener("click", () => {

        curtidas++;

        botao.querySelector("span").textContent = curtidas;

    });

});
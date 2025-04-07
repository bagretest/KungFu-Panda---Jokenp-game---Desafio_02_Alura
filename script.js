function play() {
  let idade = prompt("Qual a sua idade?");
  if (idade < 18) {
    alert("Você não tem idade para jogar :(");
  }
  if (idade >= 18) {
    alert("Vamos ao torneio!");

    let escolhaJogador = prompt(
      "Escolha 1 - Dragão, 2 - Tigre ou 3 - Leopardo."
    )
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    let escolhaComputadorTexto;
    if (escolhaComputador === 1) {
      escolhaComputadorTexto = "dragao";
    } else if (escolhaComputador === 2) {
      escolhaComputadorTexto = "tigre";
    } else {
      escolhaComputadorTexto = "leopardo";
    }

    if (escolhaJogador === "1" || escolhaJogador === "dragao") {
      escolhaJogador = "dragao";
    } else if (escolhaJogador === "2" || escolhaJogador === "tigre") {
      escolhaJogador = "tigre";
    } else if (escolhaJogador === "3" || escolhaJogador === "leopardo") {
      escolhaJogador = "leopardo";
    } else {
      alert("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
    }

    alert("A escolha do computador foi: " + escolhaComputadorTexto);

    if (escolhaJogador === escolhaComputadorTexto) {
      alert("Empate! Ambos escolheram " + escolhaJogador + ".");
    }

    if (escolhaJogador === "dragao") {
      if (escolhaComputadorTexto === "leopardo") {
        alert("Você Ganhou! Dragão vence Leopardo.");
      }
      if (escolhaComputadorTexto === "tigre") {
        alert("Você Perdeu! Tigre vence Dragão.");
      }
    }

    if (escolhaJogador === "tigre") {
      if (escolhaComputadorTexto === "dragao") {
        alert("Você Ganhou! Tigre vence Dragão.");
      }
      if (escolhaComputadorTexto === "leopardo") {
        alert("Você Perdeu! Leopardo vence Tigre.");
      }
    }

    if (escolhaJogador === "leopardo") {
      if (escolhaComputadorTexto === "tigre") {
        alert("Você Ganhou! Leopardo vence Tigre.");
      }
      if (escolhaComputadorTexto === "dragao") {
        alert("Você Perdeu! Dragão vence Leopardo.");
      }
    }
  }
}
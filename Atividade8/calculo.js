
document.getElementById("pedra").addEventListener("click", jogar);
document.getElementById("papel").addEventListener("click", jogar);
document.getElementById("tesoura").addEventListener("click", jogar);

function jogar(event) {
  var escolhaUser = event.target.id;
  var escolhaPC = Math.floor(Math.random() * 3);

  let resultado = "";

  if(escolhaPC === 1)
    escolhaPC = "pedra";
  else if(escolhaPC === 2)
    escolhaPC = "papel";
  else 
    escolhaPC = "tesoura";

  if (escolhaUser === escolhaPC)
    resultado = "houve empate!";
  else if ((escolhaUser === "pedra" && escolhaPC === "tesoura") || (escolhaUser === "papel" && escolhaPC === "pedra") || (escolhaUser === "tesoura" && escolhaPC === "papel"))
    resultado = "você ganhou!";  
  else
    resultado = "você perdeu!";

  alert("Você escolheu " + escolhaUser + ". O Computador escolheu " + escolhaPC + ". Por isso, " + resultado);

}

function encontrarMaiorNumero() {
    var num1, num2, num3;
    alert("Esses três números inseridos nessa função retornará o maior")
    num1 = parseFloat(prompt("Digite o primeiro número:"));
    num2 = parseFloat(prompt("Digite o segundo número:"));
    num3 = parseFloat(prompt("Digite o terceiro número:"));
    
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }

  function ordenarNumeros() {
    var num1, num2, num3;
    alert("Esses três números inseridos nessa função retornará o mesmo em ordem crescente")
    num1 = parseFloat(prompt("Digite o primeiro número:"));
    num2 = parseFloat(prompt("Digite o segundo número:"));
    num3 = parseFloat(prompt("Digite o terceiro número:"));
  
    let numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
      return a - b;
    });
    return numeros;
  }
  

let maiorNumero = encontrarMaiorNumero();
alert("O maior número é " + maiorNumero);

let numerosOrdenados = ordenarNumeros();
alert("Os números em ordem crescente são " + numerosOrdenados.join(", "));
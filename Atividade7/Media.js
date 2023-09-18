var media;

var nota1;
var nota2;
var nota3;

var nomeAluno1;
var nomeAluno2;
var nomeAluno3;

nomeAluno1 = prompt("Qual o nome do aluno 1: ");
nota1 = parseFloat(prompt("Qual a nota desse aluno: "));

nomeAluno2 = prompt("Qual o nome do aluno 2: ");
nota2 = parseFloat(prompt("Qual a nota desse aluno: "));

nomeAluno3 = prompt("Qual o nome do aluno 3: ");
nota3 = parseFloat(prompt("Qual a nota desse aluno: "));

media = ((nota1 + nota2 + nota3) / 3);

document.write("Media dos alunos " + media.toFixed(2));



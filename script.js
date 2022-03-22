var jeferson = {nome: "Jeferson", vitorias: 1, empates: 2, derrotas: 4, pontos: 0};
var neuza = {nome: "Neuza", vitorias: 3, empates: 0, derrotas: 0, pontos: 0};
var gleiber = {nome: "Gleiber", vitorias: 1, empates: 2, derrotas: 4, pontos: 0};

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

jeferson.pontos = calcularPontos(jeferson);
neuza.pontos = calcularPontos(neuza);
gleiber.pontos = calcularPontos(gleiber);

var jogadores = [jeferson, neuza, gleiber];

function exibirJogadorNaTela(jogadores) {
  var elemento = ""
  for(var i = 0; i < jogadores.length; i++) {  
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas +"</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += "</tr>"
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
  
}

exibirJogadorNaTela(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadorNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++
  jogador.pontos = calcularPontos(jogador);
  exibirJogadorNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++
  exibirJogadorNaTela(jogadores);
}

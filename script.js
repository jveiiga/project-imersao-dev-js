function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var erroFilme = document.getElementById("mensagemDeErro").value;
  if (filmeFavorito.endsWith(".jpg") ||
      filmeFavorito.endsWith(".jpeg")||
      filmeFavorito.endsWith(".png")) {
    listarFilmeNaTela(filmeFavorito);
  } else {
      console.error("Ás imagens devem conter as extensões JPEG, JPG ou PNG");
  }
  document.getElementById("filme").value = "";
}

function listarFilmeNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

//erroFilme.innerHTML = "Ás imagens devem conter as extensões JPEG, JPG ou PNG";

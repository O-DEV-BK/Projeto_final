// ativar links do menu

const links = document.querySelectorAll(".header-menu a");
function ativarlink(link) {
  const url = window.location.href;
  const href = link.href
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarlink);

// ativar items do orcamento

const parametros = new URLSearchParams(location.search);

function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarproduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarpergunta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("arial-expanded", ativa)
}

function eventosperguntas(pergunta) {
  pergunta.addEventListener("click", ativarpergunta);
}

perguntas.forEach(eventosperguntas);


// galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriacontainer = document.querySelector(".bicicleta-imagens");

function trocarimagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriacontainer.prepend(img);
  }
}

function eventosgaleria(img) {
  img.addEventListener("click", trocarimagem)
}

galeria.forEach(eventosgaleria);

// animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
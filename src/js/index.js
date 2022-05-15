const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado');

    const idSelecionado = personagem.attributes.id.value;
    if (idSelecionado === 'salsicha-instinto-superior') return;

    const imgJogador1 = document.getElementById('personagem-jogador-1');
    imgJogador1.src = `./src/imagem/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerText = nomeSelecionado
  });
});


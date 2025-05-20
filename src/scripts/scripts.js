function continuarcadastro() {
    window.location.href = "cadastro2.html"; 
}

function irParaExplorar() {
    window.location.href = "src/explorar.html"; 
}

function toggleDescricao() {
    const texto = document.querySelector('.descricao-texto');
    const botao = document.querySelector('.ver-mais');

    texto.classList.toggle('expandido');
    botao.textContent = texto.classList.contains('expandido') ? 'Ver menos' : 'Ver mais';
}

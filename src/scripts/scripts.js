function continuarcadastro() {
    window.location.href = "cadastro2.html"; 
}

function irParaExplorar() {
    window.location.href = "src/explorar.html"; 
}

function criarConfirmar() {
    window.location.href = "src/criar-post.html";
}

// CRIAR POST //
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

let timeout;

function updateSliderValue() {
  const value = slider.value;
  sliderValue.textContent = `R$ ${value}`;

  const percent = (value - slider.min) / (slider.max - slider.min);
  sliderValue.style.left = `${percent * 100}%`;

  sliderValue.style.opacity = "1";
  sliderValue.style.transition = "opacity 0.3s ease";

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    sliderValue.style.opacity = "0";
  }, 1500);
}

slider.addEventListener("input", updateSliderValue);

// msg
  function mostrarMensagem() {
    const msg = document.getElementById('mensagem-post-criado');
    msg.style.opacity = '1';

    setTimeout(() => {
      msg.style.opacity = '0'; window.location.href='../index.html';
    }, 2500); // 4 segundos
  }

   function pesquisaConfirmar() {
    window.location.href = "../index.html";
  }

function continuarcadastro() {
    window.location.href = "cadastro2.html"; 
}

function irParaExplorar() {
    window.location.href = "explorar.html"; 
}

function criarConfirmar() {
    window.location.href = "criar-post.html";
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

  // criar post
  const input = document.getElementById('upload-foto');
  const label = document.getElementById('preview-label');

  input.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        label.innerHTML = ''; // Limpa o texto
        const img = document.createElement('img');
        img.src = e.target.result;
        label.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
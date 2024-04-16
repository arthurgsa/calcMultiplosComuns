let bases = [];

function adicionarBase(event) {
  if (event && event.key !== 'Enter') return;

  const baseInput = document.getElementById('base');
  const base = parseInt(baseInput.value.trim());
  if (isNaN(base)) return;

  bases.push(base);
  renderizarBases();
  baseInput.value = '';
}

function renderizarBases() {
  const basesDiv = document.getElementById('bases');
  basesDiv.innerHTML = '';
  bases.forEach(base => {
    const span = document.createElement('span');
    span.textContent = base;
    basesDiv.appendChild(span);
  });
}

function calcularMultiplos() {
  const limiteInferior = parseInt(document.getElementById('limite-inferior').value);
  const limiteSuperior = parseInt(document.getElementById('limite-superior').value);

  let multiplos = [];

  for (let i = limiteInferior; i <= limiteSuperior; i++) {
    let isMultiplo = true;
    for (let j = 0; j < bases.length; j++) {
      if (i % bases[j] !== 0) {
        isMultiplo = false;
        break;
      }
    }
    if (isMultiplo) {
      multiplos.push(i);
    }
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  if (multiplos.length === 0) {
    const span = document.createElement('span');
    span.textContent = 'Nenhum múltiplo comum encontrado.';
    resultadoDiv.appendChild(span);
  } else {
    const multiplosText = multiplos.join(', ');
    const span = document.createElement('span');
    span.textContent = multiplosText;
    resultadoDiv.appendChild(span);
  }
}

function resetar() {
  bases = [];
  renderizarBases();
  document.getElementById('limite-inferior').value = '1';
  document.getElementById('limite-superior').value = '1000';
  document.getElementById('resultado').innerHTML = '';
}

// Função para mostrar a caixa flutuante
function mostrarCaixaFlutuante() {
  const caixaFlutuante = document.getElementById('caixa-flutuante');
  caixaFlutuante.classList.add('mostrar');
}

// Função para esconder a caixa flutuante
function esconderCaixaFlutuante() {
  const caixaFlutuante = document.getElementById('caixa-flutuante');
  caixaFlutuante.classList.remove('mostrar');
}

function alternarCaixaFlutuante() {
  const caixaFlutuante = document.getElementById('caixa-flutuante');
  caixaFlutuante.style.display = caixaFlutuante.style.display === 'none' ? 'block' : 'none';
}
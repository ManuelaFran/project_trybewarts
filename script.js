const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const button = document.querySelector('.btn-entrar');

function verificaEmailSenha() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', verificaEmailSenha);

const buttonSubmit = document.querySelector('#submit-btn');
const inputCheckbox = document.querySelector('#agreement');

function habilitaBotão() {
  buttonSubmit.disabled = false;
}
inputCheckbox.addEventListener('click', habilitaBotão);

const countCharacter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

function contarCaracteres() {
  if (textArea.value.length === 0) {
    countCharacter.innerHTML = 500;
  } else {
    countCharacter.innerHTML = 500 - textArea.value.length;
  }
}
textArea.addEventListener('keyup', contarCaracteres);

function materiasSelecionadas() {
  const materia = document.querySelectorAll('.subject:checked');
  let materia2 = '';
  for (let i = 0; i < materia.length; i += 1) {
    materia2 += ` ${materia[i].value}, `;
  }
  return materia2;
}

function recuperaDadosForm() {
  const nota = document.querySelector('input[name="rate"]:checked').value;

  const objeto = {
    Nome: ` ${document.querySelector('#input-name').value} ${document.querySelector('#input-lastname').value}`,
    /* Sobrenome: document.querySelector('#input-lastname').value, */
    Email: ` ${document.querySelector('#input-email').value}`,
    Casa: ` ${document.querySelector('#house').value}`,
    Família: ` ${document.querySelector('input[name="family"]:checked').value}`,
    /* Conteudo: document.querySelectorAll('.subject:checked')[0], */
    Matérias: materiasSelecionadas(),
    Avaliação: ` ${nota}`,
    Observações: ` ${document.querySelector('#textarea').value}`,
  };
  return objeto;
}

// function retornaFormulario(event) {
//   event.preventDefault();
//   const dadosForms = recuperaDadosForm();
// }
// buttonSubmit.addEventListener('click', retornaFormulario);

function imprimeInputs() {
  const newForm = document.getElementById('new-form');
  const objeto = recuperaDadosForm();
  const form = document.querySelector('#evaluation-form');
  for (let i = 0; i < Object.keys(objeto).length; i += 1) {
    const paragrafo = document.createElement('p');
    newForm.appendChild(paragrafo);
    paragrafo.innerText = `${Object.keys(objeto)[i]}:${Object.values(objeto)[i]}`;
  }
  form.innerHTML = ' ';
  form.appendChild(newForm);
}
function imprimeInput2() {
  buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    imprimeInputs();
  });
}imprimeInput2();

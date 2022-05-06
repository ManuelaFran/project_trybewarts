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

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

form.onsubmit = function(e) {
  e.preventDefault();
  text.innerHTML = input.value;
  input.value = '';
}
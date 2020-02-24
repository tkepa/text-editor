

let text = document.querySelector(".editor--js");
const save =  document.querySelector(".buttons__save--js");
const load = document.querySelector(".buttons__load--js");



save.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('text', text.value);
})

load.addEventListener('click', (e) => {
  e.preventDefault();
  text.value = localStorage.getItem('text');
})
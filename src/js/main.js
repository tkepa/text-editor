

const text = document.querySelector(".editor--js");
const save =  document.querySelector(".buttons__save--js");
const load = document.querySelector(".buttons__load--js");


text.addEventListener('keyup', (e) => {
  let textEditor = e.target.value;
  if (textEditor) {
    save.addEventListener('click', (e) => {
      localStorage.setItem('text', textEditor);
    });  
  }
});

load.addEventListener('click', (e) => {
  text.innerHTML = localStorage.getItem('text');
})
const form = document.querySelector('.js-form');

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
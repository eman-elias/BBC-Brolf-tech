
const tabButtons = document.querySelectorAll('.tablink');



tabButtons.forEach(button => {
  button.addEventListener('click', () => {

    const id = button.getAttribute('data-id');

    tabButtons.forEach(btn => btn.classList.remove('line'));

    button.classList.add('line');
  });
});
const kafka = document.querySelectorAll('#book-list li .name');


kafka.forEach((e) => {
  e.innerHTML += ' (book title)';
});

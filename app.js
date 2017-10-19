//better model, works with added book titles.

const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
  li = e.target.parentNode;
  li.parentNode.removeChild(li);
});

//This is good way to delete books.

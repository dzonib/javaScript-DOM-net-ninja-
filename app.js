const getUl = document.querySelector('#book-list ul');
getUl.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const lis = e.target.parentNode;
    lis.parentNode.removeChild(lis);
  };
});

const getForm = document.forms['add-book'];
getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const getValue = getForm.querySelector('input[type="text"]').value
  console.log(getValue);
//creating elements:
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const delBtn = document.createElement('span');
//appending (adding elements):
  li.appendChild(bookName);
  li.appendChild(delBtn);
  getUl.appendChild(li);
//adding text-content to elements:
  bookName.textContent=getValue;
  delBtn.textContent='delete';
  //Adding classes to elements:
  bookName.classList.add('name');
  delBtn.classList.add('delete');
});
//changing adding removing atributes:
var book = querySelector('li:first-child .name');
book.getAttribute('class'); //returns class name
book.getAttribute('href'); //returns null
book.setAttribute('class', 'name-2'); //changes class name to name-2
book.hasAttribute('class'); //returns true, checkes if it has class atributes
book.removeAttribute('class'); //removes class atribute from element.
//you can use .setAttribute to give it back.

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

//checkbox hide and unhide books:

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
  if(hideBox.checked) {
    getUl.style.display='none';
  } else {
    getUl.style.display='initial';
  };
});
//hides and unhides book list on check.

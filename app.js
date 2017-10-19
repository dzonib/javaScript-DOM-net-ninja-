//easy way to select forms is:
//document.forms (returns __proto__:HTMLCollection (must make array with Array.from() if you wanna use .forEach))


//document.forms[0] or document.forms['(id(without # - as a string - ('add-book')))']


const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const getInput = addForm.querySelector('input[type="text"]').value;
  console.log(getInput);
});
//getInput is returning whtever you typed in form search bar.

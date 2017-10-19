/*const h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e);
});
Simple example of adding events*/


const btns = document.querySelectorAll('#book-list .delete');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
  });
});
//more complicated example of events.
//its deleting books from list.

const preventDefault = document.querySelector('#page-banner a');

preventDefault.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Navigation to ' , e.target.textContent, ' is prevented for safety reasons!');
});
//Prevents default behaviour! (link is disabled)

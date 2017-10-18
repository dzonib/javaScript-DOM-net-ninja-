const bookList = document.querySelector('#book-list');


//For Next Siblings:

console.log('The next sibling is: ', bookList.nextSibling);
//you will get Text node (because of line-break)
console.log('The next sibling is: ', bookList.nextElementSibling);
//now its real sibling.

//For Previous Sibling:

console.log('The next sibling is: ', bookList.previousSibling);
//you will get Text node (because of line-break)
console.log('The next sibling is: ', bookList.previousElementSibling);
//goody.


//example:

bookList.previousElementSibling.querySelector('#search-books').innerHTML+='<p>Good Books below!</p>';
//you can use </br> if in same paragraph.

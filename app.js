const banner = document.querySelector('#book-list');


//For Parents:

console.log('book list parent node is: ', banner.parentNode);
//or
console.log('book-list parent element is: ', banner.parentElement);
//returns parentNode (with children elements)
//"Out of 99 times out of a 100, these two things will return same element"


console.log('book-list grand-parent element is: ', banner.parentElement.parentElement);
//returns parent of booklist parent.



//For Children:

//if you type:
console.log(banner.childNodes);
//you will get 'text, h2.title, text, ul, text'. Text represents a line break.
//but is returned as NodeList (can be used as array)
console.log(banner.children);
//without text this time '[h2.title, ul]', but its returned as HTMLcolection (cant be used as array, needs conversion)
//(Array.from())

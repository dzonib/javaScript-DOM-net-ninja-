const banner = document.querySelector('#page-banner');


console.log('#page bannner node type is: ' + banner.nodeType);
//node types Definition and Usage on https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

console.log('#page bannner node name is: ' + banner.nodeName);
//returns node name (div in this case)

console.log('#page bannner node has child nodes: ' + banner.hasChildNodes());
//returns true or false

let clonedBanner = banner.cloneNode(true);
//true if you want to clone content that is in DIV as well(children), 
console.log(clonedBanner);
//false only for DIV.
clonedBanner = banner.cloneNode(false);
console.log(clonedBanner);

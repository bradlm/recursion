// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  function check(node){
	if(node.classList.value.split(' ').indexOf(className) !== -1)
		results.push(node);
	node.childNodes.forEach(child => {if(child.nodeName !== '#text') check(child)});
  }
  check(document.body);
  return results;
};

// Write a code for adding new elements dynamically in JavaScript?
function addNode() 
	{ 
	var newP = document.createElement("p");
              var textNode = document.createTextNode(" This is a new text node");
              newP.appendChild(textNode); 
	document.getElementById("Dynamic").appendChild(newP); 
	}
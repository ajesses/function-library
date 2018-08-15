// 在现有元素后插入一个新元素

function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}


document.getElementsByClassName("modalButton")[0].onclick = function() {
    document.getElementsByClassName('modalParent')[0].style.display = "block";
}

document.getElementsByClassName("closeButton")[0].onclick = function() {
    document.getElementsByClassName('modalParent')[0].style.display = "none";
}

window.onclick = function(event) {
	console.log(event.target);
    if (event.target == document.getElementsByClassName("modalParent")[0]) {
         document.getElementsByClassName('modalParent')[0].style.display = "none";
    }
}

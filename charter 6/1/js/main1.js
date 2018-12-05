function but(){

	if(document.getElementsByTagName("button")[0].innerHTML === "Hello"){
		document.getElementsByTagName("button")[0].innerHTML = "Bye";
	}else{
		document.getElementsByTagName("button")[0].innerHTML ="Hello";
	}

}

document.getElementsByTagName("button")[0].onmouseleave="Hi"


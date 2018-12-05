// document.getElementsByClassName("email")[0].addEventListener("click",function(event){

//  if (document.getElementsByClassName("email")[0].value!="daniel.ramos@itdcanada.ca" && document.getElementsByClassName("password").value!="123") {

// 	document.getElementsByClassName("email")[0].classList.add("check")
// 	document.getElementsByClassName("password")[0].classList.add("check")

// }else {

// 	document.getElementsByClassName("email")[0].classList.add("correct")
// 	document.getElementsByClassName("password")[0].classList.add("correct")		
// 	}	


// event.preventDefault()
// });

document.getElementsByTagName("input")[2].addEventListener("click", function(event){
	if(document.getElementById('email').value != "saygin.guven@gmail.com" && document.getElementById('password').value != "12345"){
		document.getElementsByTagName("input")[0].classList.add('check')
		document.getElementsByTagName("input")[1].classList.add('check')
	} else{
		document.getElementsByTagName("input")[0].classList.add('correct');
		document.getElementsByTagName("input")[1].classList.add('correct');

	}

	
	event.preventDefault()
});
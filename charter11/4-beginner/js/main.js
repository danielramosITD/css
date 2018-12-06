let image = ["./images/img1.jpg","./images/img2.jpg","./images/img1.jpg","./images/img3.jpg","./images/img4.jpg","./images/img5.jpg","./images/img6.jpg"];
let counter = 0;

// setInterval(function(){

// coloque setInterval en lugar de setTimeout
	setInterval(function(){
		document.getElementsByTagName("img")[0].setAttribute("src", image[counter]);
		counter +=1;
		if(counter === image.length){
			counter = 0;
		}
	}, 2000);
// }, 2000);
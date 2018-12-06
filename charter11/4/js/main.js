let counter = 1;
let intervalFlag = true;
let setTheImages = (function(){

			//capilano
			document.getElementsByClassName('images')[0].style.left = '0px';
			document.getElementsByClassName('images')[0].style.zIndex = '1000';

			//hockey
			document.getElementsByClassName('images')[1].style.left = String((640)) + "px";
			document.getElementsByClassName('images')[1].style.zIndex = '1000';

			//kayak
			document.getElementsByClassName('images')[2].style.left = String(-(640)) + "px";
			document.getElementsByClassName('images')[2].style.zIndex = '1000';
}());

let loopImages  = () =>{
	if(counter ===1){

		setTimeout(function(){
					//capilano
					document.getElementsByClassName('images')[1].style.left = '0px';
					document.getElementsByClassName('images')[1].style.zIndex = '1000';

					//hockey
					document.getElementsByClassName('images')[2].style.zIndex = '-1000';
					setTimeout(function(){
						document.getElementsByClassName('images')[2].style.left = String((640)) + "px";
					}, 500);

					//kayak
					document.getElementsByClassName('images')[0].style.left = String(-(640)) + "px";
					document.getElementsByClassName('images')[0].style.zIndex = '1000';
		}, 2000)

		counter +=1; 

	}

	else if(counter ===2){

		setTimeout(function(){
					//capilano
					document.getElementsByClassName('images')[2].style.zIndex = '1000';
					document.getElementsByClassName('images')[2].style.left = '0px';

					//kayak
					document.getElementsByClassName('images')[1].style.left = String(-(640)) + "px";
					document.getElementsByClassName('images')[1].style.zIndex = '1000';

					//hockey
					document.getElementsByClassName('images')[0].style.zIndex = '-1000';
					setTimeout(function(){
						document.getElementsByClassName('images')[0].style.left = String((640)) + "px";
					}, 500);

		}, 2000);
		counter +=1;
	}

	else if(counter ===3){

		setTimeout(function(){
					//capilano
					document.getElementsByClassName('images')[0].style.zIndex = '1000';
					document.getElementsByClassName('images')[0].style.left = '0px';

					//kayak
					document.getElementsByClassName('images')[2].style.left = String(-(640)) + "px";
					document.getElementsByClassName('images')[2].style.zIndex = '1000';

					//hockey
					document.getElementsByClassName('images')[1].style.zIndex = '-1000';
					setTimeout(function(){
						document.getElementsByClassName('images')[1].style.left = String((640)) + "px";
					}, 500);

		}, 2000); 
		counter =1;
	}
}

let slideShow = setInterval(function(){
	loopImages();
}, 4000);

document.getElementsByClassName('banner')[0].onmouseover = function(){
	clearInterval(slideShow);
	console.log(1);
}



document.getElementsByClassName('banner')[0].onmouseout = function(){
	slideShow = setInterval(function(){
		loopImages();
	}, 4000);
}

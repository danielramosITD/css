let currentImage = 1;

let loopTheSlides = () =>{
	if(currentImage ===1) {

		setTimeout(function(){
			document.getElementsByClassName('images')[0].style.right = '0px';
			document.getElementsByClassName('images')[0].style.zIndex = '1000';

			document.getElementsByClassName('images')[1].style.right = String(-640) + "px";
			document.getElementsByClassName('images')[1].style.zIndex = '1100';

			document.getElementsByClassName('images')[2].style.right = String((640)) + "px";
			document.getElementsByClassName('images')[2].style.zIndex = '1200';

			document.getElementsByClassName('images')[3].style.right = String(-(640*2)) + "px";
			document.getElementsByClassName('images')[3].style.zIndex = '1300';

			document.getElementsByClassName('images')[4].style.right = String((640*2)) + "px";
			document.getElementsByClassName('images')[4].style.zIndex = '1400';

			document.getElementsByClassName('images')[5].style.right = String(-(640*3)) + "px";
			document.getElementsByClassName('images')[5].style.zIndex = '1500';

		}, 1000);
			currentImage =2;
		}
} 

loopTheSlides();
alert("***************GALLARY****************\nyou can switch between images by:\n- clicking on the image\n- or clicking the buttons in the page\n- or press the arrow in the keyboard***\n......HANI");

var time=3000;
var allIm = document.getElementsByClassName("ims");
var screen = document.getElementById("screen");
function setImg(i){
		console.log(i);
		var url="url(images/imb0"+i+".jpg)";
		console.log(url);
		screen.style.backgroundImage = url;
		var allIm= document.getElementsByClassName("ims");
		for(var n in allIm){
			allIm[n].style= "border-bottom = 4px solid #000";
		}
		document.getElementById("im0"+i).style.borderBottom = "4px solid yellow";
}
function setImageToClass(){
	var x=this.getAttribute("alt");
	var url="url(images/"+x+".jpg)";
	screen.style.backgroundImage = url;
	console.log(x);
}
function setim(j){
	return function(){
		var url="url(images/imb0"+j+".jpg)";
		console.log(url);
		screen.style.backgroundImage = url;
		for(var n in allIm){
			allIm[n].style= "border-bottom = 4px solid #000";
		}
		document.getElementById("im0"+j).style.borderBottom = "4px solid yellow";
	}
}
for (var i = 0; i < allIm.length; i++) {
	     allIm[i].addEventListener('click',setim(i+1), false);
}

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       previm();
    }
    else if (e.keyCode == '39') {
       // right arrow
       nextim()
    }

}
var imageNr=1;
function previm(){
	imageNr--;
	if(imageNr==0){
		imageNr=5;
	}
	setImg(imageNr);
}
function nextim(){
	imageNr++;
	if(imageNr==6){
		imageNr=1;
	}
	setImg(imageNr);
}

var myTimer=window.setInterval(function(){
 nextim()
}, time);

/******************************************************/
setImg(1);
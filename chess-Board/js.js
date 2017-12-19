function drawBoard1() {
	var n=Number(document.getElementById("text1").value);
	console.log(typeof(n));
	var w=Number(document.getElementById("text2").value);
	var color1=document.getElementById("text3").value;
	var color2=document.getElementById("text4").value;
	var canvas=document.getElementById('canvas');
	canvas.width=n*w;
	canvas.height=n*w;
	var ctx = canvas.getContext('2d');
	for (var i = 0; i <n; i++){
	  for (var j = 0; j < n; j++){
	  	if((i+j)%2==0){
	    	ctx.fillStyle = color1;
		}else{
		   	ctx.fillStyle = color2;
		}
	    ctx.fillRect(j * w, i * w, w, w);
	  }
	}
	canvas.style.display="block";
}

function drawBoard2() {
	var n=Number(document.getElementById("text1").value);
	var w=Number(document.getElementById("text2").value);
	var canvas=document.getElementById('canvas');
	canvas.width=n*w;
	canvas.height=n*w;
	var ctx = canvas.getContext('2d');
	for (var i = 0; i <n; i++){
	  for (var j = 0; j < n; j++){
	  	var r=Math.random()*255;
	  	var g=Math.random()*255;
	  	var b=Math.random()*255;
	  	var newColor=rgb2hex(r,g,b);
	    ctx.fillStyle = newColor;
	    ctx.fillRect(j * w, i * w, w, w);
	  }
	}
	canvas.style.display="block";
}
function rgb2hex(red, green, blue) {
        var rgb = blue | (green << 8) | (red << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1)
  }

document.getElementById("draw1").addEventListener("click", drawBoard1);
document.getElementById("draw2").addEventListener("click", drawBoard2);



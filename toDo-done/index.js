var n=5;
function add(){
	var todoBord=document.getElementById("todo");
	var taskText=document.getElementById("task");
	if(taskText.value!=""){
		n++;
		var newTask = "<div class=\"item\" id=\"i"+n+"\"><p>"+taskText.value+"</p>";
		newTask+="<button  onclick=\"moveTask('i"+n+"')\">&#9989;</button>";
		newTask+="<button  onclick=\"editTask('i"+n+"')\">&#9997;</button>";
		newTask+="<button class=\"btnDel\"  onclick=\"delTask('i"+n+"')\">&#9746;</button></div>";
		todoBord.innerHTML = todoBord.innerHTML + newTask;
		taskText.value="";
	}else{alert("write your Task first !!");}
}
function reset(){
	var todoBord=document.getElementById("todo");
	var doneBord=document.getElementById("done");
	
	if(confirm(" delete All Task\nare you sure?")){
		todoBord.innerHTML="<h2>To-DO</h2>";
		doneBord.innerHTML="<h2>Done</h2>";
	}
}
function delTask(id){
	document.getElementById(id).remove();
}
function moveTask(id){
	var temp = document.getElementById(id);
	var btn = temp.getElementsByTagName("button")[0];
	btn.innerHTML="&#8634;";
	btn.setAttribute( "onClick","undoMoveTask('"+id+"')");
	document.getElementById(id).remove();
	document.getElementById("done").appendChild(temp);
}
function undoMoveTask(id){
	var temp= document.getElementById(id);
	console.log(temp);
	temp.getElementsByTagName("p")[0].style.textDecoration = 'none';
	var btn= temp.getElementsByTagName("button")[0];
	btn.innerHTML="&#9989;";
	btn.setAttribute( "onClick", "moveTask('"+id+"')");
	document.getElementById(id).remove();
	document.getElementById("todo").appendChild(temp);
}
function editTask(id){
	var temp = document.getElementById(id);
	var newText = document.createElement("input");
	newText.setAttribute("type", "text");
	newText.setAttribute("value", temp.getElementsByTagName("p")[0].innerHTML);  
	newText.style.width = "80%";

	temp.innerHTML = "";
	temp.appendChild(newText);
	temp.innerHTML +="<button  onclick=\"setEeditTask('"+id+"')\">ok</button>";
}
function setEeditTask(id){
	var newTask=document.getElementById(id);
	var newTaskText=newTask.getElementsByTagName("input")[0];
	if(newTaskText.value!=""){
		newTask.innerHTML = "";
		newTask.innerHTML = "<p>"+newTaskText.value+"</p>";
		newTask.innerHTML+="<button  onclick=\"moveTask('"+id+"')\">&#9989;</button>";
		newTask.innerHTML+="<button  onclick=\"editTask('"+id+"')\">&#9997;</button>";
		newTask.innerHTML+="<button class=\"btnDel\"  onclick=\"delTask('"+id+"')\">&#9746;</button>";
	}else{alert("Write your Task first !!");}
}
var newTask = document.getElementById("newTask");
var tasksBord = document.getElementById("tasksBord");
var n=0;

function addTask(){
	var taskText=newTask.value;
	newTask.value="";
	n++;
	var newTaskTag=document.createElement("p");
	newTaskTag.className="taskItem";
	newTaskTag.id="l"+n;
	newTaskTag.innerHTML=taskText+"<span class=\"date\">"+Date()+" <a href=\"#\" onClick=\"doneThis('l"+n+"')\">done</a> - <a href=\"#\" onClick=\"deleteThis('l"+n+"')\">(x)</a></span>";
	tasksBord.appendChild(newTaskTag);
}
// function deleteTask(){
//   tasksBord.removeChild(tasksBord.firstChild);
// }
function deleteThis(x){
	document.getElementById(x).remove()
}
function doneThis(x){
	document.getElementById(x).style.textDecoration = 'line-through wavy #666';
	document.getElementById(x).style.backgroundColor = '#444';
	// document.querySelector("#"+x+">span").style= "textDecoration = 'none'";
}
function resetTasks(){
	tasksBord.innerHTML="";
	newTask.value="";
	n=0;
}
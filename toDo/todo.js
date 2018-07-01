document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("delBtn").addEventListener("click", resetTasks);

var n=0;

function addTask(){
	var newTask = document.getElementById("newTask");
	var taskText=newTask.value;
	if(taskText!=""){
		newTask.value="";
		var tasksBord = document.getElementById("tasksBord");
		n++;
		var newId="l"+n;
		//******** create P Tag
		var newTaskTag=document.createElement("p");
		newTaskTag.className="taskItem";
		newTaskTag.id=newId;
		var span1= document.createElement("span");
		span1.appendChild(document.createTextNode(taskText));
		newTaskTag.appendChild(span1);
		//******** create SPAN Tag and add it to P  Tag
		var span2=document.createElement("span");
		span2.className="date";
		var d= new Date();
		span2.appendChild(document.createTextNode(d.toLocaleDateString()+' - '+d.toLocaleTimeString()));
		//******* create first ancher Tag "done" and add it to SPAN
		var doneTag = document.createElement("a");
		doneTag.appendChild(document.createTextNode("done"));
		doneTag.href="#"
		doneTag.addEventListener('click', function(){this.parentNode.parentNode.style.textDecoration = 'line-through';});

		span2.appendChild(doneTag);
		span2.appendChild(document.createTextNode("-"));
		//******* create second ancher Tag "delete" and add it to Span
		var delTag = document.createElement("a");
		delTag.appendChild(document.createTextNode("delete"));
		delTag.href="#"
		delTag.addEventListener('click', function(){this.parentNode.parentNode.remove();});
		span2.appendChild(delTag);
		newTaskTag.appendChild(span2);
		tasksBord.appendChild(newTaskTag);
	}else{alert("Write your TAsk first !!");}
}

function resetTasks(){
	if(confirm("Delete all TAsk\nAre You Sure !!??")){
		tasksBord.innerHTML="";
		newTask.value="";
		n=0;
	}
}
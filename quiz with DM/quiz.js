var bigText = `What are style sheets used for?**to store the keywords of web pages**to script web pages**to control the look and feel of web documents**3##Why use CSS?**it helps make the web page's browser independent**it helps create unique web pages**it allows for the separation of style and content**3##Select the attribute that organizes the inline styling:**style**id**class**1##Where should the style tag be declared to organize an internal CSS?**body**head**external file**2##In the rule, the "selector":**serves as a property**selects which element to style**allows to substitute the selected attribute**2##From the three types of styling, which one is the most useful in terms of website optimization?**Internal**External**Inline**2##What is the "style", when creating an internal CSS?**value**property**tag**3##Why is the name of one of the fonts put in quotes?**it consists of two or more words**it is a rarely used font**it shows a font family**1##Which of the values below is NOT applicable for the text-align property?**even**left**right**1##What value of the "display" property makes the inline element act as a blocking level element?**table-cell**block**inline**2`;
var x1 = bigText.split('##');
function question(questionN,questionText,answer1,answer2,answer3,rightAnswer,questionPoint){
	this.questionN = questionN;
	this.questionText = questionText;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.rightAnswer = rightAnswer;
	this.questionPoint = questionPoint;
}
var css = [];
for (var i = 0; i < x1.length; i++) {
	var qtext = x1[i].split('**');
	var cssQuestions = new question(
		i + 1,
	  qtext[0],
	  qtext[1],
	  qtext[2],
	  qtext[3],
	  qtext[4],
	  10);
    css.push(cssQuestions);
}

function user(name) {
	this.name = name;
	this.numRQ = 0; //the correct Answer
	this.numWQ = 0; //the wrong Answer
	this.numEQ = 0; //the empty Answer
	this.sumPoint = 0; //the points
	this.wrongQ = [];
	this.ans=[];
}
var student=new user("HANI");
var i=0;
function getQuation(n){
	if(n<css.length){
		var startDiv=document.getElementById("startDiv");
		startDiv.style.display="none";
		var quationNr=document.getElementById("quationNr");
		quationNr.childNodes[0].remove();
		quationNr.appendChild(document.createTextNode("question-Nr: "+css[n].questionN));
		var quation=document.getElementById("quation");
		quation.childNodes[0].remove();
		quation.appendChild(document.createTextNode(css[n].questionText));
		var a1Label=document.getElementById("a1l");
		a1l.appendChild(document.createTextNode(css[n].answer1));
		a1l.childNodes[0].remove();
		var a2Label=document.getElementById("a2l");
		a2l.appendChild(document.createTextNode(css[n].answer2));
		a2l.childNodes[0].remove();
		var a3Label=document.getElementById("a3l");
		a3l.appendChild(document.createTextNode(css[n].answer3));
		a3l.childNodes[0].remove();
		document.getElementById("nextQ").addEventListener('click', nextQ);
		var qDiv=document.getElementById("qDiv");
		qDiv.style.display="block";
	}else{
		var qDiv=document.getElementById("qDiv");
		qDiv.style.display="none";
		var points=document.getElementById("points");
		points.childNodes[0].remove();
		points.appendChild(document.createTextNode(student.sumPoint));
		var rA=document.getElementById("rA");
		rA.childNodes[0].remove();
		rA.appendChild(document.createTextNode(student.numRQ));
		var wA=document.getElementById("wA");
		wA.childNodes[0].remove();
		wA.appendChild(document.createTextNode(student.numWQ));
		var wQ=document.getElementById("wQ");
		wQ.childNodes[0].remove();
		wQ.appendChild(document.createTextNode(student.wrongQ));
		var qresDiv=document.getElementById("resDiv");
		resDiv.style.display="block";
			}
}
function nextQ(event){
	var ra=document.getElementsByTagName("input");
	var answer=-1;
	for(var n=0;n<ra.length;n++){
		if(ra[n].checked==true){
			answer=n+1;
		}
	}
	if(answer==-1){
		alert('pleas select the Answer');
	}else{
		student.ans.push(answer);
		console.log(answer);
		if (answer != 1 && answer != 2 && answer != 3) {
			student.numEQ++;
			student.wrongQ += css[i].questionN + ' .';
		} else if (answer == css[i].rightAnswer) {
			student.numRQ++;
			student.sumPoint += css[i].questionPoint;
		} else if (answer != css[i].rightAnswer) {
			student.numWQ++;
			student.wrongQ += css[i].questionN + ' .';
		}
		
		i++;
		getQuation(i);
		console.log(student);
	}
	resetInput(event);
	event.preventDefault();
}
document.getElementById("a1l").addEventListener('click',checkInput);
document.getElementById("a2l").addEventListener('click',checkInput);
document.getElementById("a3l").addEventListener('click',checkInput);
function checkInput(e){
	var t=e.target.id;
	console.log(t)
	checkNr(t);
	function checkNr(id){
			var inId="a"+id.split("")[1];
			var leId=inId+"l";
			console.log(leId);
			resetInput(e);
			document.getElementById(inId).checked=true;
			document.getElementById(leId).style.background = '#333';
			document.getElementById(leId).style.color = "#fff";

		}

}
		function resetInput(e){
			document.getElementById("a1").checked=false;
			document.getElementById("a2").checked=false;
			document.getElementById("a3").checked=false;
			document.getElementById("a1l").style.background = '#fff';
			document.getElementById("a2l").style.background = '#fff';
			document.getElementById("a3l").style.background = '#fff';
			document.getElementById("a1l").style.color = '#333';
			document.getElementById("a2l").style.color = '#333';
			document.getElementById("a3l").style.color = '#333';
			e.preventDefault();
		}
function stopQ(){
	document.getElementById("startDiv").innerHTML="maybe Later :(";
	document.getElementById("startDiv").style.fontSize="3em";
	document.getElementById("startDiv").style.color="red";
}
document.getElementById("showB").addEventListener("click",generate_table)
function generate_table(e) {
	e.target.remove();
  var tbl = document.getElementById("qTabel");
  for (var i = 0; i < css.length; i++) {
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("colspan", "3");
    th.appendChild(document.createTextNode(css[i].questionN+" - "+css[i].questionText));
    tr.appendChild(th);
    tbl.appendChild(tr);
    var tr1 = document.createElement("tr");
    for (var j = 1; j < 4; j++) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(j+"- "+css[i]["answer"+j]));
      tr1.appendChild(td);
      if(student.ans[i]==j){
      	td.style.background = "#ff1a1a";
      }
      if(css[i].rightAnswer==j){
      	td.style.background = "#99ff99";
      }
    }
    tbl.appendChild(tr1);
  }
 document.getElementById("tabel").appendChild(tbl);
  tbl.setAttribute("border", "2");
  e.preventDefault();
}
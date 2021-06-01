var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');
localStorage.setItem=("check","0");
var tques=questions.length;
//var score=0;
//var score = localStorage.getItem(score)
//localStorage.setItem=("scorecount","0");

const countdown = document.getElementById("countdown");
const startingminute = 3;
let time = startingminute * 60;


function updateTime(){
    //to calculate minutes left we are dividing
    const minutes = Math.floor(time/60);
    //to calculate seconds remaining
    let seconds = time % 60;
    //to get 00 and so on
    //if sec < 10, append 0 at the begining => 00,01,02,03...
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    //to decrement time.
    time--;
}
var quesindex=0;
function quit()
{         
	      quiz.style.display='none';
          result.style.display='';
          var f=score/tques;
          result.textContent="SCORE ="+f*100;
          q.style.display="none";
}
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	 return;// body...
};
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{
            alert("SELECT AN OPTION");
        return;
    }

	if(selected_ans.value==questions[quesindex][5])
		{
            //score=score+1;
            //localStorage.setItem(score, ++score)
            //localStorage.scorecount = Number(localStorage.scorecount)+1;
           
            if (localStorage.check) {
              localStorage.check = Number(localStorage.check)+1;
            } else {
              localStorage.check = 1;
            }
        }
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex==tques-1)
	     	nextbutton.textContent="Finish";
	    // var f=score/tques;
	     if(quesindex==tques)
	     {
	     q.style.display='none';
          quiz.style.display='none';
          result.style.display='';
          document.getElementById("result").innerHTML = "Congratulations! You scored " + localStorage.check;  
          
          return;
    
	     }
        give_ques(quesindex);
        window.onunload = () =>{
            window.localStorage.clear();
        }
}

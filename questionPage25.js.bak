
// answer boxes const
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

const reportPage = document.getElementById('reportPage');
const explanation = document.getElementById('explanation');



// Navigation buttons boxes const
const next = document.getElementById('next-button');
const home = document.getElementById('home-button');
const report = document.getElementById('report-button');
const send = document.getElementById('send-button');

//Check if the question is been answered
var answered = false;

var correctAnswer = 2;



//Variables that are going to save the team scores
var team1Score = localStorage.getItem("team1Score");
var team2Score = localStorage.getItem("team2Score");


//array that is going to keep the number from the pages the user is going to navigate (non repeated randomly ordered)
var randomNums = [];

//Variable which keeps the index of the number from the page will be navigated next
var pageIndex = 0;

//Variables thta save differnt audios that are used on the page
var match_start_sound = new Audio('audios/start_whistle.mp3');
var correct_answer = new Audio('audios/correct_answer.wav');
var incorrect_answer = new Audio('audios/incorrect_answer.wav');
var clock_tick = new Audio('audios/clock_tick.wav');
var background = new Audio('audios/background.mp3');

//Function to change the volume from audios
function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1; 
}

//Show the actual score on the page
document.getElementById("first-num").innerHTML = team1Score;

document.getElementById("second-num").innerHTML = team2Score;


//Disable the button to navigate to the next page until question is answered
next.disabled = true;

next.style.backgroundColor = "#a9bcd0";

//Disable the report button until question is answered

report.disabled = true;

report.style.backgroundColor = "#a9bcd0";




//Hide explanation and report page
explanation.style.display = "none";

reportPage.style.display = "none";


//if the page is reloaded scoreboard will go back to 0 as is considered cheating

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	

	team1Score = 0;
	
	team2Score = 0;
	
	//Scoreboard in page is updated
	document.getElementById("first-num").innerHTML = team1Score;

	document.getElementById("second-num").innerHTML = team2Score;

	
}



//Timer function

//Variable to choose the timer length
var timeleft = 25;


var downloadTimer = setInterval(function(){
  if(timeleft >= 0){
		
		if(answered == true)
		{
			clearInterval(downloadTimer);
		}else
		{
			document.getElementById("timer-num").innerHTML = timeleft ;
			timeleft -= 1;
			clock_tick.play();
	}
	
  }else
	{
		
		clearInterval(downloadTimer);
		document.getElementById("timer-num").innerHTML = "0";
		handleClickWrong();
		
	}
  
  
}, 1000);


//Navigation buttons events


function handleMouseOverHome() {
  home.style.backgroundColor = '#94d8e3';
}

function handleMouseOutHome() {
  home.style.backgroundColor = '#58a4b0';
}

function handleMouseOverNext() {
  next.style.backgroundColor = '#94d8e3';
}

function handleMouseOutNext() {
  next.style.backgroundColor = '#58a4b0';
}

function handleMouseOverReport() {
  report.style.backgroundColor = '#94d8e3';
}

function handleMouseOutReport() {
  report.style.backgroundColor = '#58a4b0';
}

function handleMouseOverSend() {
  send.style.backgroundColor = '#94d8e3';
}

function handleMouseOutSend() {
  send.style.backgroundColor = '#58a4b0';
}

function handleMouseOverX() {
  X.style.backgroundColor = '#94d8e3';
}

function handleMouseOutX() {
  X.style.backgroundColor = '#58a4b0';
}

//Answer boxes events

//Change colors when the mouse is over the box


function handleMouseOver1(){
  answer1.style.backgroundColor = '#58a4b0';
}

function handleMouseOut1() {
  answer1.style.backgroundColor = '#a9bcd0';
}

function handleMouseOver2(){
  answer2.style.backgroundColor = '#58a4b0';
}

function handleMouseOut2() {
  answer2.style.backgroundColor = '#a9bcd0';
}

function handleMouseOver3(){
  answer3.style.backgroundColor = '#58a4b0';
}

function handleMouseOut3() {
  answer3.style.backgroundColor = '#a9bcd0';
}

function handleMouseOver4(){
  answer4.style.backgroundColor = '#58a4b0';
}

function handleMouseOut4() {
  answer4.style.backgroundColor = '#a9bcd0';
}



//When the correct answer box is clicked 

function handleClickRigth() {
	
	//Show the correct and incorrevt answers
	switch (correctAnswer) {
  case 1:
    answer1.style.backgroundColor = 'green';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'red';
    break;
  case 2:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'green';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'red';
    break;

  case 3:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'green';
	answer4.style.backgroundColor = 'red';
    break;
	
  case 4:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'green';
    break;
	
  default:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'red';
    break;
}

	
	correct_answer.play();
	
	answer1.removeEventListener("mouseover", handleMouseOver1);
	answer2.removeEventListener("mouseover", handleMouseOver2);
	answer3.removeEventListener("mouseover", handleMouseOver3);
	answer4.removeEventListener("mouseover", handleMouseOver4);
	
	
	answer1.removeEventListener("mouseout", handleMouseOut1);
	answer2.removeEventListener("mouseout", handleMouseOut2);
	answer3.removeEventListener("mouseout", handleMouseOut3);
	answer4.removeEventListener("mouseout", handleMouseOut4);
	
	answered = true;
	
	//User team sums up a point
	team1Score++;
	
	//Scoreboard in page is updated
	document.getElementById("first-num").innerHTML = team1Score;

	document.getElementById("second-num").innerHTML = team2Score;
	
	//Scoreboard local variables are updated
	localStorage.setItem("team1Score", team1Score);
	localStorage.setItem("team2Score", team2Score);

	//Events for choosing the answer are disabled
	answer1.removeEventListener("click", handleClickRigth);
	answer2.removeEventListener("click", handleClickWrong);
	answer3.removeEventListener("click", handleClickWrong);
	answer4.removeEventListener("click", handleClickWrong);
	
	
	explanation.style.display = "block";
	
	//Naviagtion button for next question is abled
	next.disabled = false;
	
	//Report button and next button are abled
	
	
	report.disabled = false;
	
	report.style.backgroundColor = "#58a4b0";
	
	report.addEventListener('mouseover', handleMouseOverReport);
	
	report.addEventListener('mouseout', handleMouseOutReport);



	next.style.backgroundColor = "#58a4b0";
		
	next.addEventListener('mouseover', handleMouseOverNext);
	
	next.addEventListener('mouseout', handleMouseOutNext);
	
	
	



}


//When the wrong answer box is clicked 

function handleClickWrong() {
	
	//Show the correct and incorrevt answers
	switch (correctAnswer) {
  case 1:
    answer1.style.backgroundColor = 'green';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'red';
    break;
  case 2:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'green';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'red';
    break;

  case 3:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'green';
	answer4.style.backgroundColor = 'red';
    break;
	
  case 4:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'green';
    break;
	
  default:
    answer1.style.backgroundColor = 'red';
	answer2.style.backgroundColor = 'red';
	answer3.style.backgroundColor = 'red';
	answer4.style.backgroundColor = 'red';
    break;
}

	
	incorrect_answer.play();
	
	answer1.removeEventListener("mouseover", handleMouseOver1);
	answer2.removeEventListener("mouseover", handleMouseOver2);
	answer3.removeEventListener("mouseover", handleMouseOver3);
	answer4.removeEventListener("mouseover", handleMouseOver4);
	
	
	answer1.removeEventListener("mouseout", handleMouseOut1);
	answer2.removeEventListener("mouseout", handleMouseOut2);
	answer3.removeEventListener("mouseout", handleMouseOut3);
	answer4.removeEventListener("mouseout", handleMouseOut4);
	
	answered = true;
	
	//User team sums up a point
	team2Score++;
	
	//Scoreboard in page is updated
	document.getElementById("first-num").innerHTML = team1Score;

	document.getElementById("second-num").innerHTML = team2Score;
	
	//Scoreboard local variables are updated
	localStorage.setItem("team1Score", team1Score);
	localStorage.setItem("team2Score", team2Score);

	//Events for choosing the answer are disabled
	answer1.removeEventListener("click", handleClickRigth);
	answer2.removeEventListener("click", handleClickWrong);
	answer3.removeEventListener("click", handleClickWrong);
	answer4.removeEventListener("click", handleClickWrong);
	
	
	explanation.style.display = "block";
	
	//Naviagtion button for next question is abled
	next.disabled = false;
	
	//Report button and next button are abled
	
	
	report.disabled = false;
	
	report.style.backgroundColor = "#58a4b0";
	
	report.addEventListener('mouseover', handleMouseOverReport);
	
	report.addEventListener('mouseout', handleMouseOutReport);



	next.style.backgroundColor = "#58a4b0";
		
	next.addEventListener('mouseover', handleMouseOverNext);
	
	next.addEventListener('mouseout', handleMouseOutNext);
	
	

}


//answer box 1

//Change cholor when moving mouse over

answer1.addEventListener('mouseover', handleMouseOver1);

answer1.addEventListener('mouseout', handleMouseOut1);

//Answer selected (correct)
answer1.addEventListener('click', handleClickWrong);


//answer box 2

answer2.addEventListener('mouseover', handleMouseOver2);

answer2.addEventListener('mouseout', handleMouseOut2);


answer2.addEventListener('click', handleClickRigth);

//answer box 3

answer3.addEventListener('mouseover',  handleMouseOver3);

answer3.addEventListener('mouseout', handleMouseOut3);


answer3.addEventListener('click', handleClickWrong);


//answer box 4

answer4.addEventListener('mouseover', handleMouseOver4);


answer4.addEventListener('mouseout', handleMouseOut4);


answer4.addEventListener('click', handleClickWrong);




//Page navigation buttons


home.addEventListener('mouseover', handleMouseOverHome);

home.addEventListener('mouseout', handleMouseOutHome);



send.addEventListener('mouseover', handleMouseOverSend);

send.addEventListener('mouseout', handleMouseOutSend);


X.addEventListener('mouseover', handleMouseOverX);

X.addEventListener('mouseout', handleMouseOutX);


//When next question button is clicked

next.addEventListener('click', function handleClick() {
  
  // Get the array of random numbers 
	randomNums = JSON.parse(localStorage.getItem("randomNums"));
  
	pageIndex = localStorage.getItem("pageIndex");
  
  //So we can get the next number from the array 
	pageIndex++;
  
   //Set the new index on the local storage so we dont repeat the question
	localStorage.setItem("pageIndex", pageIndex);
	
	
	//If any of the teams has won already naviagte to the proper page
	if(team1Score == 15) 
	{
		location.href = ('winner.html');
		
	}else if (team2Score == 15)
	{
		location.href = ('looser.html');
	}else
	{

		location.href = ('questionPage' + randomNums[pageIndex] + '.html');
	}

	
	//Link of the page the user is going to be moved to
	
	/*
	location.href = ('html/questionPage' + randomNums[pageIndex] + '.html');
	*/
	
	
	
});


//When report button  is clicked

report.addEventListener('click', function handleClick() {
  
  // Show the report page 
  document.getElementById("reportPage").style.display = "inline";
  
	
});

send.addEventListener('click', function handleClick() {
  
  // Hide the report page 
  
	document.getElementById("reportPage").style.display = "none";
	
	
});

X.addEventListener('click', function handleClick() {
  
  // Hide the report page 
  
	document.getElementById("reportPage").style.display = "none";
  
	
});


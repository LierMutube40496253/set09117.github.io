
//Start button box
const box = document.getElementById('start-button');

//Audios for the page
var match_start_sound = new Audio('audios/start_whistle.mp3');

//array that is going to keep the number from the pages the user is going to navigate (non repeated randomly ordered)
var randomNums = [];

//Variable which keeps the index of the number from the page will be navigated next
var pageIndex = 0;

//Local varuable that are going to keep the value of score
localStorage.setItem("team1Score", "0");

localStorage.setItem("team2Score", "0");


//Function to create an array of non-repeated random numbers

function Myrand(max,min){
	//Array that is going to keep the values
    let array = [];
	
	//Loop to create the spicifed amount of numbers
    for (i = 0; i < max; i++) {
		// Method that returns a random number 
        x = Math.floor(Math.random() * max) + min;
		
		//Make sure the are no repeated numbers
        if(array.includes(x) == true){
            i--;
        }else{
			//Push the number inside the array
            if(x > max == false){
                array.push(x);
            }
        }
    }
    return array
	
}


randomNums = Myrand(30,1);

console.log(randomNums);

//Save the array locally as it keeps the question page path the user is going to take during the whole quiz
localStorage.setItem("randomNums", JSON.stringify(randomNums));

//An index so we go trough  the array during the quiz
localStorage.setItem("pageIndex", "0");


//Change colors when the mouse is over the box

box.addEventListener('mouseover', function handleMouseOver() {
  box.style.backgroundColor = '#94d8e3';
});


box.addEventListener('mouseout', function handleMouseOut() {
  box.style.backgroundColor = '#58a4b0';
});

box.addEventListener('click', function handleClick() {
	
  match_start_sound.play();
   // Get the array of random numbers 
	randomNums = JSON.parse(localStorage.getItem("randomNums"));
  
	pageIndex = localStorage.getItem("pageIndex");
  
  //So we can get the next number from the array 
	pageIndex++;
  
   //Set the new index on the local storage so we dont repeat the question
	localStorage.setItem("pageIndex", pageIndex);

	
  match_start_sound.addEventListener('ended', function audioEnded() { 
  
	
	location.href = ('questionPage' + randomNums[pageIndex] + '.html');
	
	
  });
});



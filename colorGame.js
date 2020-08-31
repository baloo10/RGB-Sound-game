	var numSquares = 6;
	//this is a array
	//var colors = generateRandomColors(numSquares);
	var colors = [];
	//var pickedColor = pickColor();
	var pickedColor;
	var colorDisplay = document.querySelector("#colorDisplay");
	var colorDisplayEasy = document.querySelector("#colorDisplay");
	
	//select the elements
	var squares = document.querySelectorAll(".square");
	var easySquares = document.querySelectorAll("#easySquare");
	var hardSquares = document.querySelectorAll("#hardSquare");
	var colorIsEqual = false;
	
	var bgColor = document.getElementsByTagName("body")[0];
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	//var newColors = document.querySelector("#stripe");
	var newButtonText = document.querySelector("#buttonText");
	// var easyMode = document.querySelector("#buttonText2");
	// var hardMode = document.querySelector("#buttonText3");
	var modeButtons = document.querySelectorAll(".mode");
	
	
	init();

	function init(){
		
		//mode buttons eventlistners
		setupModeButtons();
		setupSquares();
		reset();

	}

	function setupModeButtons(){

		//mode buttons eventlistners
		for (var i = 0; i< modeButtons.length;i++){
			modeButtons[i].addEventListener("click", function(){
				//removing the class selected from both buttones
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				modeButtons[2].classList.remove("selected");
				//and then add the selected class to the one we just clicked on
				//referts to what was click on
				this.classList.add("selected");
				h1.style.background = "steelblue";

	
				if(this.textContent === "Easy"){
					numSquares = 3;
				} else if(this.textContent === "Hard"){
						numSquares = 6;
				}else {
					numSquares = 9;
			}
				//this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
				reset();
			});
		}
	}

	function setupSquares(){
		for(var i = 0; i < squares.length; i++){
		
			//add click listners to the squares
			squares[i].addEventListener("click", function(){
				
			//we gran the color of the click squares
				var clickedColor = this.style.backgroundColor;	
				
				//check if rgb is eqaul to the h1 on the page
				//if click color is not equal to the h2 color, then go inside here
				if(clickedColor === pickedColor ){
	
					//display text that you typed correct
					messageDisplay.textContent = "Correct color";
					
					//add background color to the text that user typed correct
					messageDisplay.classList = "message2";
	
					//when clicked correct color, change text on the "new  color" button to "play again? "
					newButtonText.textContent = "Play again?";
	
					colorDisplay.textContent = clickedColor;
	
					//if click correct color, change background of all the square, and h1 baclground also
					changeColor(clickedColor);
					
					//change the background color to the h1, to the same right correct clicked color
					h1.style.background = clickedColor;
	
	
	
				} 
				
				// if clicked color is equal,then go inside here
				else {
	
					//display a text that user click wrong color
					messageDisplay.textContent = "Not correct color, try again";
					
					//change background color on the message display via css
					messageDisplay.classList = "message2";
	
					//make the background of the square same as the body background color
					this.style.backgroundColor = "232323";
					
				}//end if
				
			});
	
		}//end for loop
	}


	


	function reset(){

		//h1.style.background = "steelblue";

		//take away the text when we resett the game
		messageDisplay.textContent = "";
		console.log("sokker  " + numSquares);
		colors = generateRandomColors(numSquares);
		console.log("frokost" + colors);
		pickedColor = pickColor();
		//colorDisplay.textContent = pickedColor;
		newButtonText.textContent = "New Colors";
		//messageDisplay.textContent = "";
		//colorDisplay.background = "steelblue";

		
		for(var i = 0; i < squares.length; i++){
			//if it is a color
			if(colors[i]){
				squares[i].style.display = "block";			
				//then we change the squares colors  
				squares[i].style.backgroundColor = colors[i];

			}else {
				//if it not colors, then display none
				squares[i].style.display ="none";			
			}//end else
		}

		// h1.style.background = "steelblue";
		// colorDisplay.background = "steelblue"
		h1.style.background = "steelblue";
	}
	
	
	//colorDisplay.textContent = pickedColor;
	
	
	
	// new colors - play again button
	newButtonText.addEventListener("click", function(){

			//when click newcolor button, change the background color of the colorDisplay
			colorDisplay.style.backgroundColor = "steelblue";

			reset();
			
		});

	// a fucntion to get randoms colors	
	function chooseRandomColor(){
		
		// a array with all colors
		var colors = ["red", "green", "blue", "orange", "yellow" , "dodgerblue", "midnightblue", "yellowgreen" ];

		for(var i = 0; i < 3; i++){
		
		    colors.push(Math.floor(Math.random() * 255));
			var color2019 = colors[Math.floor(Math.random() * colors.length)];
			return color2019;

	} // end for 
	
	}// end function
	
	// a fucntion to get randoms colors	
	//this works also hex
	//code got from https://www.redips.net/javascript/random-color-generator/
	function chooseRandomColor2xx (){
		
		var hex = ["0", "1", "3", "4", "5", "6", "7", "8", "9", "A", "B", "B", "D", "E", "F"];
		var color = "#", i;
	
		for (var i = 0; i < 6; i++){
			
			color = color + hex[Math.floor(Math.random() * 16)];
			
		}//end for 
		
		return color;
	}
    

	function generateRandomColors(num){
		console.log("ja" +  num);
		//make a array
		var arr = [];
		
		//add num random colors to array
		//repeat num times. We push randoms collors innside the array, by calling the function randomColor2020
		//and push it inside the foor loop, add the random color
		for(var i = 0; i<num; i++){
			//arr.push(randomColor2020())
			arr.push(randomColor2020());
			console.log("what" +  arr[i]);
		}
		//return array
		return arr;
		
	}//end 
	

	// a fucntion to get randoms colors	
	//this work also, code from: https://teamtreehouse.com/community/adding-a-random-rgb-generator-function-when-clicking-on-the-button-it-doesnt-work 	
	
	function randomColor2020(){
		
		//pick a red from 0- 255 - pick a green from 0-255 and pick a blue from 0-255
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var color = "rgb(" + red + ", " + green + ", " + blue + ")";
		
		return color;
		
	}
	
	function pickColor(){
		
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}//end function pickColor
    
	//when sqare click correct, change all the squares to the correct color
	function changeColor(clickedColor){
		
		for (var y = 0; y < squares.length; y++){
					
			squares[y].style.backgroundColor = clickedColor;
			colorDisplay.style.backgroundColor = clickedColor;
			
			
		}//end for
		
	}//end 
	
	  
	
	
	
		
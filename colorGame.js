//lange åpningstider, åpent 365 dager året, lange åpningstider, god service

//make a list of colors
	
	// var colors = [
		
		// 'red', 'green', 'blue', 'orange', 'yellow' , "dodgerblue", "midnightblue", "yellowgreen"
	
	// ];
	
	var numSquares = 6;
	//this is a array
	var colors = generateRandomColors(numSquares);
	
	var colorDisplay = document.querySelector("#colorDisplay");
	var colorDisplayEasy = document.querySelector("#colorDisplay");
	
	//select the elements
	var squares = document.querySelectorAll(".square");
	var easySquares = document.querySelectorAll("#easySquare");
	var hardSquares = document.querySelectorAll("#hardSquare");
	var colorIsEqual = false;
	var pickedColor = pickColor();
	var bgColor = document.getElementsByTagName("body")[0];
	var messageDisplay = document.querySelector("#message");
	var randomColor = chooseRandomColor2();
	var h1 = document.querySelector("h1");
	var newColors = document.querySelector("#stripe");
	var newButtonText = document.querySelector("#buttonText");
	var easyMode = document.querySelector("#buttonText2");
	var easyModeOn;
	var hardModeOn;
	var hardMode = document.querySelector("#buttonText3");
	
	//console.log("All backgrounds colors on squares111: "+ randomColor);
	
	
	easyModeOn = false;
	hardModeOn = false; 
	
	
	//button click on easy mode
		easyMode.addEventListener("click", function(){
		
		easyModeOn = true;
		hardModeOn = false;
		// if selected, add background color, and remove the background color on the other button
		easyMode.classList.add("selected");
		hardMode.classList.remove("selected");
		numSquares = 3;
		// make new colors
		
		colors = generateRandomColors(numSquares);
		// console.log("colors : " +  colors);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		// here we go through all colors in the squares, this will happend on the first 3, since colors is length 3
		
		for(var i = 0; i<squares.length; i++){
			
			squares[i].style.background = colors[i];
			
			//make a random number from 0-2
				var random22 = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
				//seta the colors display to be one of the squares, with random number 0-2
				colorDisplay.textContent = squares[random22].style.backgroundColor;
				
				
			
			
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
				
			}else {
			
			squares[i].style.background = "none";
			
			}//end else
			
		}
			

		
		// updated from one of the tree colors, the h2 color text

	}); //end easy mode
	
	
	hardMode.addEventListener("click", function(){
		
		//if selected, add background color, and remove the background color on the other button
		hardMode.classList.add("selected");
		easyMode.classList.remove("selected");
		numSquares = 6;
		easyModeOn = false;
		hardModeOn = true;
		
		
		colors = generateRandomColors(numSquares);
		// console.log("colors : " +  colors);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		// here we go through all colors in the squares, this will happend on the first 6, since colors is length 6
		
		for(var i = 0; i<squares.length; i++){
			
			squares[i].style.background = colors[i];
			
				//make a random number from 0-5
				var random22 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
				//seta the colors display to be one of the squares, with random number 0-2
				colorDisplay.textContent = squares[random22].style.backgroundColor;
				
			
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
							squares[i].style.background = "block";

				
			}
			
		}
		
	});
	

	
	for(var i = 0; i < squares.length; i++){
		
		

		squares[i].style.backgroundColor = randomColor2020();
		var allColors = squares[i].style.backgroundColor;
		//console.log("All backgrounds colors on squares: "+ squares[i].style.backgroundColor);
		
		//sets the h1, to the first color in the square
		//this code choose a number between 5 and 0
		var random22 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
		colorDisplay.textContent = squares[random22].style.backgroundColor;
		//pickedColor = pickColor();
		console.log("colorDisplay: " +  colorDisplay.textContent);
		squares[i].addEventListener("click", function(){
			
			
			
			//check if rgb is eqaul to the h1 on the page
			//if click color is not equal to the h2 color, then go inside here
			if(this.style.backgroundColor != colorDisplay.textContent ){
				
				//display a text that user click wrong color
				messageDisplay.textContent = "Not correct color, try again";
				
				//change background color on the message display via css
				messageDisplay.classList = "message2";
				//console.log("color is incorrect:");						
					
				//make the background of the square same as the body background color
				this.style.backgroundColor = "232323";
				

				
			} 
			
			// if clicked color is equal,then go inside here
			else {
				
				//we add the correct clicked color inside var clickedcolor
				var clickedColor = this.style.backgroundColor;
				//display text that you typed correct
				messageDisplay.textContent = "Correct color";
				
				//add background color to the text that user typed correct
				messageDisplay.classList = "message2";
				
				
				
				//if click correct color, change background of all the square, and h1 baclground also
				changeColor(clickedColor);
				
				//check if we are on easy mode 
				if(easyModeOn === true){
					changeColors2(clickedColor);

				}else if (hardModeOn === true) {
					//changeColors(clickedColor);
				}
				
				
				// change this 19/12/2019 chooseRandomColor2();
				//change the background color to the h1, to the same right correct clicked color
				h1.style.background = clickedColor;
				
				
				//when clicked correct color, change text on the "new  color" button to "play again? "
				newButtonText.textContent = "Play again?";
				
				
			}//end if
			
		});
		
		
		
		
		
	}//end for loop
	
	// new colors - play again button
	newButtonText.addEventListener("click", function(){
			
			
			
			colors = generateRandomColors(6);
			messageDisplay.textContent = "";
			//pickedColor = pickColor();
			//colorDisplay.textContent = pickedColor;

			for(var i = 0; i < squares.length; i++){
				
				//sets the squares to be one of the new colors from colors array
				squares[i].style.background = colors[i];
				
				//make a random number from 0-5
				var random22 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
				//seta the colors display to be one of the squares, with random number 0-5
				colorDisplay.textContent = squares[random22].style.backgroundColor;
				
				newButtonText.textContent = "New Colors";
				//change the background color on the h1
				h1.style.background = "steelblue";
				colorDisplay.style.background = "000000";
				
				//if its easy mode, then generate 3 colors after click "play again button", if its on hard mode, then generater 6 colors and do the same
			if(easyModeOn === true){
				
				colors = generateRandomColors(3);
				squares[i].style.background = colors[i];
				//make a random number from 0-5
				var random22 = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
				//seta the colors display to be one of the squares, with random number 0-5
				colorDisplay.textContent = squares[random22].style.backgroundColor;
				
				
			} else {
				// colors = generateRandomColors(6);
				// squares[i].style.backgroundColor = colors[i];
				// var random22 = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
				//seta the colors display to be one of the squares, with random number 0-5
				//colorDisplay.textContent = squares[random22].style.backgroundColor;
				
				
				
			}//end else if
				
			}
		});
		
		
		

		
	function chooseRandomColor(){
		
		// a array with all colors
		var colors = ["red", "green", "blue", "orange", "yellow" , "dodgerblue", "midnightblue", "yellowgreen" ];

		for(var i = 0; i < 3; i++){
		
		    colors.push(Math.floor(Math.random() * 255));
			//console.log("tell me something boy: " + colors);
		var color2019 = colors[Math.floor(Math.random() * colors.length)];
		return color2019;

	} // end for 
	
	}// end function
	
	
	
	
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
    
	
	//this works also rgb
	//code from https://blog.jayantsingh.in/2018/01/22/howto-generate-random-color-values-in-javascript/ 
	function chooseRandomColor2xx (){
		
	var red = Math.floor(Math.random() * 256);
	console.log("red: " + red);
	var green = Math.floor(Math.random() * 256);
	console.log("green:" + green);
	var blue = Math.floor(Math.random() * 256);
	console.log("blue: " + blue );
	
	
	var color = red + green + blue;
	return color; 
	
	

	}
	
	//this work also, code from: https://teamtreehouse.com/community/adding-a-random-rgb-generator-function-when-clicking-on-the-button-it-doesnt-work 	
	function chooseRandomColor2 (){
		
	var red = Math.floor(Math.random() * 256);
	
	var green = Math.floor(Math.random() * 256);
	
	var blue = Math.floor(Math.random() * 256);
	
	
	//console.log("red: " + red + "  green:" + green + "  blue: " + blue);
	
	
	
	var color = 'rgb(' +  red + ',' +  green + ',' +  blue + ')';
	return color; 
	
	}
	
	function generateRandomColors(num){
		
		//make a array
		var arr = [];
		
		//add num random colors to array
		//repeat num times. We push randoms collors innside the array, by calling the function randomColor2020
		//and push it inside the foor loop, add the random color
		for(var i = 0; i<num; i++){
			arr.push(randomColor2020())
		}
		//return array
		return arr;
		
	}//end fuction chooseRandomColor2020
	
	function randomColor2020(){
		
		var red = Math.floor(Math.random() * 256);
	
		var green = Math.floor(Math.random() * 256);
	
		var blue = Math.floor(Math.random() * 256);
		
		var color = 'rgb(' +  red + ',' +  green + ',' +  blue + ')';
		
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
		
	}//end function change color
	
	//change all squares color to the color that the user clicked correct
	function changeColors(color){
		
		for (var i = 0; i < squares.length; i++){
			
			squares[i].style.backgroundColor = color;
			//change the background on the color display also to the correct clicked color
			colorDisplay.style.backgroundColor = color;
			
		}//end for 
		
	}//end function
	
	function changeColors2(color){
		
		var numSquares = 3;
		// colors = generateRandomColors(numSquares);
		for (var i = 0; i < squares.length; i++){
			
			//make all squares the same color as clicked "color"
			squares[i].style.backgroundColor = color;
				
				//make the last 3 squares hide
				squares[5].style.background = "none";
				squares[4].style.background = "none";
				squares[3].style.background = "none";
			
		}//end for 
		
	}//end function
	
	function hardEasyMode(){
		
		//default mode is hard mode
		//but user can change to easy mode, will just get 3 squares to click on
		
		
	}
	
	
	
	
	
	function newColors(){
		
		//go throug all squares 
		//give the squares new random colors
		
		for (var i = 0; y < squares.length; i++){
			
			squares[i].style.backgroundColor = chooseRandomColor2() ;
		var allColors = squares[i].style.backgroundColor;
		
		//sets the h1, to the first color in the square
		var random22 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
		colorDisplay.textContent = squares[random22].style.backgroundColor;
			
			//return colorDisplay.textContent;
			
			
		}//end for 
		
	}// end new colors
		
	
	//compare the picked color to the one in the html, if equal, then correct, if not wrong change the 
	//square to the background body color
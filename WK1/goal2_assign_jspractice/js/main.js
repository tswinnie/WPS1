// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/
	var average;
	function avgNumbers(numbers){
		var total = 0;
		var nums = [5,4,3,2,1];
		nums.forEach(function (e){
			total += e;
			})
		 average = total / nums.length; 
		 totalAverage = "Your Average is "+average;
		
		return totalAverage;
	}//end of first function
	
	
	console.log(avgNumbers());
	
	var first;
	var last;
	
	function fullName(firstName, lastName){
		first = "Tyrone";
		last = "Swinnie";
		var wholeName = first + ' ' + last ;
		
		//return wholeName;
		
		
		return wholeName;
		
	}
	
	//fullName();
	console.log(fullName());
	
	var words;
	var newWords;
	var count;
	
	
	
	
	function wordCount(words){
		
		words = "and, but, could, once, three";
		 newWords = words.split(" ");
		 count = newWords.length;
		
		return(count);
	}
	console.log("Their are "+wordCount()+ " numbers in the array");
	
	function charCount(text){
		
		var text = "Georgia";
		var textlength = text.length;
		var lengthText =textlength;
		
		return lengthText;
		
		
		
		
	}
	console.log("Their are "+charCount()+ " characters in this string");
	/*
	function vowelsInWord(text){
		var vowels = ["a","e","i","o","u"];
		count = 0;
		for(i = 0; i < text.length; i++){
			// text[i] = vowels[i]
			if("aeiou".indexof(text.substr(i,1).toLowerCase())!=-1){
				count++;
				return count;
			}
		}
	}
	
	
	console.log(vowelsInWord("Georgia"));//not working yet
	*/
	
	
	/*
	function findNum(nums, conds){
		 nums = [2,3,4,5,6,7,8,9];
		 cond = true;
	
		for(var i = 0; i < nums.length; i+=2){
				if(i % 2 === 1){
					nums.push([i]);
					console.log(nums);
				}
			
			}
			else {
				for(var i = 0; i < nums.length; i++){
						if(i % 3 === 1){
				
								nums.push([i]);
								console.log(nums);
							}
						}
					}
				
	
			
	
		}
		findNum();
	
	*/
	var rv;
	var conds;
	var arr;
	
	function oddorEven(arr, conds){
		
			 arr = [2,3,4,5,6,7,8,9,10];
			 conds = "";
			 rv = [];
			 
			 for (var i=1; i<=arr.length; i++){ 
			 if (i%2 !== 0 && conds !== true) {
				 rv.push(arr[i]);
			 
			 }
			 
		     
		 }		 
	
			else {
				for(var i = 0; i < arr.length; i++){
				
					if(! (arr[i] % 2) && conds !== true){
						rv.splice(arr,1);
						rv.push(arr[i]);
			   		 console.log(rv);
						
						
						
		}
					
					
	}
}		
				

	}
	oddorEven(arr, false);
	
	
	
	
	
		
	/*
    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        //CODE GOES HERE
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));
	

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));
*/
})();

/*
Tyrone Swinnie
8-4-13
Dual I
*/


(function(){
	
	
	
	var playerOne = "Spiderman";
	var PlayerTwo = "Batman";
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	var playerOneDamage = 15;
	var playerTwoDamage = 15;
	
	//console.log("five");
	var round = 0;
	
	

	
var fight = function (){
	
	alert(playerOne+":"+playerOneHealth+ " Start "+PlayerTwo+":"+playerTwoHealth);
	for(var i = 0; i < 10; i++){
		var minDamage1 = playerOneDamage * .5;
		var minDamage2 = playerTwoDamage * .5;
		
		var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
		var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);
		
		playerOneHealth-=f1;
		playerTwoHealth-=f2;
		
		console.log(playerOne+":" +playerOneHealth+ " " +PlayerTwo+":"+playerTwoHealth);
		var results = winnerCheck();
		console.log(results)
		if(results === "no winner"){
			round++;
			alert(playerOne+":"+playerOneHealth+ "Round " +round+ " Over " + PlayerTwo +":"+playerTwoHealth);
			
		}else{
			alert(results);
			break;
		}
		
		
	
	} 
}


	
fight();

function winnerCheck(){
	console.log("in winnerCheck FN")
	
	var result = "no winner";
	if(playerOneHealth < 1 && playerTwoHealth < 1 ){
		result = "You Both Die";
	}else if(playerOneHealth < 1){
		result = PlayerTwo+ "Wins!";
	}else if(playerTwoHealth < 1){
		result = playerOne+ "Wins!";
	}
	return result;
	
	
	
	
	
	
	
	
}
		
		
	
	

	
})();



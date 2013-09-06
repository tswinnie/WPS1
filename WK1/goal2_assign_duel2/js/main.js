
/*
Tyrone Swinnie
8-5-13
Dual I
*/


(function(){
	
	
	
	var playerOne = ["Spiderman", 100, 15];//player one name, health and damage
	var PlayerTwo = ["Batman", 100, 15];//player two name, health, and damage

	
	//console.log("five");
	var round = 0;
	
	

	
var fight = function (){
	
	alert(playerOne[0]+":"+playerOne[1]+ " Start "+PlayerTwo[0]+":"+PlayerTwo[1]);
	for(var i = 0; i < 10; i++){
		var minDamage1 = playerOne[2] * .5;
		var minDamage2 = PlayerTwo[2] * .5;
		
		var f1 = Math.floor(Math.random() * (playerOne[2] - minDamage1) + minDamage1);
		var f2 = Math.floor(Math.random() * (PlayerTwo[2] - minDamage2) + minDamage2);
		
		playerOne[1]-=f1;
		PlayerTwo[1]-=f2;
		
		console.log(playerOne[0]+":" +playerOne[1]+ " " +PlayerTwo[0]+":"+PlayerTwo[1]);
		var results = winnerCheck();
		console.log(results)
		if(results === "no winner"){
			round++;
			alert(playerOne[0]+":"+playerOne[1]+ "Round " +round+ " Over " + PlayerTwo[0] +":"+PlayerTwo[1]);
			
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
	if(playerOne[1] < 1 && PlayerTwo[1] < 1 ){
		result = "You Both Die";
	}else if(playerOne[0] < 1){
		result = PlayerTwo[0]+ "Wins!";
	}else if(PlayerTwo[1] < 1){
		result = playerOne[0]+ "Wins!";
	}
	return result;
	
	
	
	
	
	
	
	
}
		
		
	
	

	
})();



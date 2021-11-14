//Week 8 Lab HS 14Nov21
//Rock Paper Scissors Game
function check(){	
	var playOne=document.getElementById("playerOne").value;
	var playTwo=document.getElementById("playerTwo").value;
	if(playOne=="r"){
		if(playTwo=="s"){
			document.getElementById("rpsCheck").innerHTML="Player 1 wins";
		}
		else if(playTwo=="p"){
			document.getElementById("rpsCheck").innerHTML="Player 2 wins";
		}
		else{
			document.getElementById("rpsCheck").innerHTML="It's a draw!";
		}
		hide();
	}
	if(playOne=="p"){
		if(playTwo=="r"){
			document.getElementById("rpsCheck").innerHTML="Player 1 wins";
		}
		else if(playTwo=="s"){
			document.getElementById("rpsCheck").innerHTML="Player 2 wins";
		}
		else{
			document.getElementById("rpsCheck").innerHTML="It's a draw!";
		}
		hide();
	}
	if(playOne=="s"){
		if(playTwo=="p"){
			document.getElementById("rpsCheck").innerHTML="Player 1 wins";
		}
		else if(playTwo=="r"){
			document.getElementById("rpsCheck").innerHTML="Player 2 wins";
		}
		else{
			document.getElementById("rpsCheck").innerHTML="It's a draw!";
		}
		hide();
	}
}
function hide(){
	document.getElementById('button').style.visibility='hidden';
}
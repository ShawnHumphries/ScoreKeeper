var p1Button = document.querySelector("#player1");
var p2Button = document.getElementById("player2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;

	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	resetGame();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	resetGame();
});

function resetGame() {
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.classList.remove("winner");
	gameOver = false;
}
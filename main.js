function login(){
n1=document.getElementById("p1n"). value;
n2=document.getElementById("p2n").value;
localStorage.setItem("player1name",n1);
localStorage.setItem("player2name",n2);

window.location="game.html"
}
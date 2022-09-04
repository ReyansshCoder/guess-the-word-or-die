p1=localStorage.getItem("player1name");
p2=localStorage.getItem("player2name");

s1=0;
s2=0;

document.getElementById("p1na").innerHTML=p1+": ";
document.getElementById("p2na").innerHTML=p2+": ";

document.getElementById("p1s").innerHTML=s1;
document.getElementById("p2s").innerHTML=s2;

document.getElementById("pq").innerHTML="Question Turn: " + p1;
document.getElementById("pa").innerHTML="Answer Turn :" + p2;

function send() {
w=document.getElementById("word"). value ;
word= w.toLowerCase();

c1=word.charAt(1);
mid=Math.floor(word.length/2);
c2=word.charAt(mid);
last=word.length-1;
c3=word.charAt(last);

r1=word.replace(c1,"_");
r2=r1.replace(c2,"_");
r3=r2.replace(c3,"_");

q="<h4 id='word_display'>Q: "+r3+"</h4>";
i="<br> A: <input type='text' id='input_check_box'>";

b="<br> <br> <button class='btn btn-info' onclick='check()'>CHECK ANSWER</button>";
z=q+i+b;

document.getElementById("output").innerHTML=z;
document.getElementById("word").value="";
}

at="pl2"
qt="pl1"

 function check(){
getans=document.getElementById("input_check_box"). value;
ans=getans.toLowerCase()
if(ans==word){
if(at=="pl1"){
s1= s1 + 1;
document.getElementById("p1s").innerHTML=s1;
}
else{s2=s2+1;
document.getElementById("p2s").innerHTML=s2;}
}

if(qt=="pl1"){
    qt="pl2";
    document.getElementById("pq").innerHTML="question turn : " + p2;
}
else{
    qt="pl1";
    document.getElementById("pq").innerHTML="question turn : " + p1;
}

if(at=="pl1"){
at="pl2";
document.getElementById("pa").innerHTML="answer turn : " + p2;
}
else{
    at="pl1";
    document.getElementById("pa").innerHTML="answer turn : " + p1;
}

document.getElementById("output").innerHTML="";

 }
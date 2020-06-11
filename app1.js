var score,roundscore,activeplayerside,activeplayer,dice,a,diceprevious;
score=[0,0];
roundscore=0;
activeplayer=0;
gameplaying=true;
dice=Math.floor(Math.random()*6)+1;
document.querySelector('#score-0').textContent='0';
document.querySelector('#aman').style.display="none";
document.querySelector('#amann').style.display="none";
document.querySelector('#score-1').textContent='0';
document.querySelector('#text0').textContent='0';
document.querySelector('#text1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){
if(gameplaying){
var dice=Math.floor(Math.random()*6)+1;
var dice1=Math.floor(Math.random()*6)+1;
var diceDOM=document.querySelector('#aman');
diceDOM.style.display="block";
diceDOM.src="dice-"+dice+".png";
var diceDOM1=document.querySelector('#amann');
diceDOM1.style.display="block";
diceDOM1.src="dice-"+dice1+".png";
/*
if(diceprevious===6&&dice===6){
    score[activeplayer]=0;
    document.getElementById("score-"+activeplayer).textContent="0";
    document.getElementById('#score-0').style="left:22%";
    nextplayer();
}*/
if(dice!==1&&dice1!==1){
    roundscore+=dice;
    roundscore+=dice1;
    document.querySelector('#text'+activeplayer).textContent=roundscore;
}
else{
    nextplayer()
}    
}
diceprevious=dice;})
document.querySelector('.btn-hold').addEventListener('click',function(){
var input=document.querySelector("#winnerscore").value;
var winnerscore;
if(input){
winnerscore=input
}
else{
winnerscore=100;
}
    if(gameplaying){
score[activeplayer]+=roundscore;
document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
if(score[activeplayer]>=winnerscore){
    document.querySelector("#player-"+activeplayer).textContent="WINNER!";
    document.querySelector("#player-"+activeplayer).style="color:red;left:13%"
    document.querySelector('#aman').style.display="none";
    document.getElementById('left').classList.remove("active");
    document.getElementById('right').classList.remove("active");
    gameplaying=false;
}
else{
    nextplayer();
}
if(score[0]>=10){
    document.querySelector('#score-0').style="left:10%";
}
    }
    
}
)
document.querySelector('.btn-new').addEventListener('click',function(){
    score=[0,0];
    roundscore=0;
    activeplayer=0;
    dice=Math.floor(Math.random()*6)+1;
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-0').style="left:22%"
    document.querySelector('#aman').style.display="none";
    document.querySelector('#amann').style.display="none";
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#text0').textContent='0';
    document.querySelector('#text1').textContent='0';
    document.querySelector('#player-0').textContent='Player-1'
    document.querySelector('#player-1').textContent="Player-2";
    document.querySelector('#player-0').style="color:black";
    document.querySelector('#player-1').style="color:black";
    document.getElementById('left').classList.remove('active');
    document.getElementById('right').classList.remove('active');
    document.getElementById('left').classList.add('active');
    gameplaying=true;
});
function nextplayer(){
    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
    document.querySelector('#text0').textContent='0';
    document.querySelector('#text1').textContent='0'
    document.getElementById('left').classList.toggle("active");
    document.getElementById('right').classList.toggle("active");
    document.querySelector('.dice-1').style.display="block"
    document.querySelector('.dice-0').style.display="block"
}

const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const result=document.getElementById("result");

document.getElementById("play").onclick=()=>{
  const a=Math.floor(Math.random()*13)+1;
  const b=Math.floor(Math.random()*13)+1;

  p1.textContent=a;
  p2.textContent=b;

  if(a>b) result.textContent="Player 1 Wins";
  else if(b>a) result.textContent="Player 2 Wins";
  else result.textContent="Draw";
};
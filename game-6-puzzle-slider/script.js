
const grid=document.getElementById("grid");
let tiles=[];

function create(){
  tiles=[...Array(15).keys()].map(x=>x+1);
  tiles.push("");
  render();
}

function render(){
  grid.innerHTML="";
  tiles.forEach((n,i)=>{
    const div=document.createElement("div");
    div.className="tile"+(n===""?" empty":"");
    div.textContent=n;
    div.onclick=()=>move(i);
    grid.appendChild(div);
  });
}

function move(i){
  const empty=tiles.indexOf("");
  const valid=[i-1,i+1,i-4,i+4];
  if(valid.includes(empty)){
    [tiles[i],tiles[empty]]=[tiles[empty],tiles[i]];
    render();
  }
}
function shuffle(){
  tiles.sort(()=>Math.random()-0.5);
  render();
}

document.getElementById("start").onclick=shuffle;
create();
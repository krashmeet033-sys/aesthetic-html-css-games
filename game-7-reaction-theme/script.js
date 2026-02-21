const box=document.getElementById("box");
let start;

function begin(){
  box.textContent="Wait...";
  box.classList.remove("ready");

  setTimeout(()=>{
    box.textContent="CLICK!";
    box.classList.add("ready");
    start=Date.now();
  },Math.random()*3000+1000);
}

box.onclick=()=>{
  if(box.classList.contains("ready")){
    const time=Date.now()-start;
    box.textContent=time+" ms";
    setTimeout(begin,2000);
  } else {
    // clicked too early; give feedback and restart
    box.textContent="Too soon!";
    setTimeout(begin,1000);
  }
};

begin();
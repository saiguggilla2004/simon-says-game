let started=false;
let gameSeq=[];
let userSeq=[];
let colors=["yellow","green","blue","red"];
let h3=document.querySelector("h3");
let level=0;
function levelup(){
    userSeq=[];
    level++;
    console.log("now level up"); 
    
    h3.innerText=`level ${level}`;
 
    let colorindex=Math.floor(Math.random()*3);
    let color=colors[colorindex];
    console.log("random color is ",color);
    let btn=document.querySelector(`.${color}`);
    btnflash(btn);
    // console.dir(btn);
    gameSeq.push(color);
    console.log("game sequence=",gameSeq);
}
document.addEventListener("keypress",function(){
    if(started==false)
    {
        started=true;
        console.log("game started");
        levelup();
    }
});
function btnflash(btn){
//    console.log("in flash function");
       btn.classList.add("flash");
    //    console.log(btn.classList);
    setTimeout(function(){
        btn.classList.remove("flash");
    },700);
}


function check()
{
    
    
    for(let i=0;i<userSeq.length;i++)
    {    
        if(userSeq[i]==gameSeq[i])
        {
            console.log("user sequence=",userSeq);
          console.log("correct sequence");
          if(userSeq.length==level)
          {
            levelup();
          }
        }
        else{
            console.log("game over");
            h3.innerHTML="game over and your score is "+level;
            reset();
        }
    }
}
let btns=document.querySelectorAll(".btn");
for(button of btns){
    button.addEventListener("click",function(){
        let pressedbutton=this;
        let usercolor=pressedbutton.getAttribute("id");
        // console.log("user selected color=",usercolor);
        userSeq.push(usercolor);
        
     pressedbutton.classList.add("userflash");
     setTimeout(function(){
      pressedbutton.classList.remove("userflash");
     },200);
     check();
     
    })
   
    
}
function reset()
{
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}



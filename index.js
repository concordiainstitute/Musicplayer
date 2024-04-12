var pag=document.getElementById('pag');
var salam=document.getElementById('salam');
var abhi=document.getElementById('abhi');
var masti=document.getElementById('masti');

pag.addEventListener("click",()=>{

})
salam.addEventListener("click",()=>{

    var audio=new Audio("khali.mp3");
    audio.play();
    document.getElementById('pause').addEventListener("click",()=>{
        audio.pause();
    })
    document.getElementById('salamb').classList.add("tar");
    
    
})
abhi.addEventListener("click",()=>{
    
})
masti.addEventListener("click",()=>{
    
})
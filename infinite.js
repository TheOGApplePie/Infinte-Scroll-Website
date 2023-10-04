let lastKnownY = 0;
document.addEventListener("scroll",(event)=>{
if(window.scrollY === window.innerHeight*4 && lastKnownY < window.scrollY){
    window.scrollTo(0,0);
}
else if(window.scrollY === 0 && lastKnownY > window.scrollY){
window.scrollTo(0,window.innerHeight*4);
}
lastKnownY = window.scrollY;
});
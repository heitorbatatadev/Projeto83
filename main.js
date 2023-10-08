var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var lastPosX,lastPosY;

var color = "blue";
var wline = 2;
var width=screen.width
var newW=screen.width-70;
var newH=screen.height-300

if(width<992){
    document.getElementById("myCanvas").width=newW;
    document.getElementById("myCanvas").height=newH;
    document.body.style.overflow="hidden"
}

canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
mouseEvent = "mouseUp"
}

canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave(e){
mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
posMx = e.clientX - canvas.offsetLeft;
posMy = e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown") {
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = wline;
ctx.moveTo(lastPosX,lastPosY);
ctx.lineTo(posMx,posMy);
ctx.stroke()
}
lastPosX = posMx;
lastPosY = posMy
}

canvas.addEventListener("touchstart", mytouchstart)

var lastPostx,lastPostY
function mytouchstart(e){
 lastPostx=e.touches[0].clientX-canvas.offsetLeft
 lastPostY=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove",Mytouchmove)
function Mytouchmove( e ){
    correntpositiontx=e.touches[0].clientX-canvas.offsetLeft
    correntpositionty=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=wline;
    ctx.moveTo(lastPostx,lastPostY);
    ctx.lineTo(correntpositiontx,correntpositionty);
    ctx.stroke()
    lastPostx=correntpositiontx;
    lastPostY=correntpositionty ;  
}
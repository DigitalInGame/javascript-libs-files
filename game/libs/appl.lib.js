
let LIB_APPL='lib: appl.lib.js is succefull loaded!';


let APP={
//return string if lib succefull loaded
get loaded (){
return 'lib: APP from appl.lib.js is succefull loaded!';
}
,
//create a canvas element
createCanvas (){
let canvas=document.createElement('canvas');
canvas.id='app';
canvas.width=320;
canvas.height=400;
canvas.style.background='black';
document.body.style.margin='0px';
document.body.appendChild(canvas);
}
,
//return main canvas apo
get mainCanvas (){

let properties={
get canvas(){
return document.getElementById('app');
}
,
get context (){
return APP.mainCanvas.canvas.getContext ('2d');
}
}

return properties;
}
,
//return the canvas context
get context(){
return this.mainCanvas.context;
}
,
setBackground (color){
this.mainCanvas.canvas.style.background=color;
}
,
//style the canvas
style (css_style){
this.mainCanvas.canvas.style=css_style;
}
,
//set new width for this canvas
setWidth(w){
this.mainCanvas.canvas.width=w;
}
,
//set new height for this canvas
setHeight(h){
this.mainCanvas.canvas.height=h;
}
,
setPositionType (s){
this.mainCanvas.canvas.style.left=0
this.mainCanvas.canvas.style.top=0;

switch  (s){
case 'relative':
this.mainCanvas.canvas.style.position=s;
break;

case 'absolute':
this.mainCanvas.canvas.style.position=s;

break;

case 'fixed':
this.mainCanvas.canvas.style.position=s;
break;

default:
this.mainCanvas.canvas.style.position='absolute';
break;
}

}
,
//return width
get width (){
return this.mainCanvas.canvas.width;
}
,
//return height
get height (){
return this.mainCanvas.canvas.height;
}
,
//repaint-clear canvas
repaint:function(){
//let context=this.mainCanvas.getContext ('2d');
this.mainCanvas.context.clearRect (0,0,this.mainCanvas.canvas.width,this.mainCanvas.canvas.height);
}
,
openWEB:function (url){
let u=url;
if (u.startsWith ('http://')){
window.open(u);
}
else
{
u='http://'+u;
window.open(u);
}

}
,
//return  the device orientation
get device(){

let callbcs={
//return the orientation rotation from device
get rotation(){
switch (window.deviceRotation()){
case 0:
return 'default-primary';
break;

case 90:
return 'landscape-left';
break;

case 180:
return 'default-secondary';
break;

case -90:
return 'landscape-right';
break;
}
}
,
onOrientationChange (f){
window.addEventListener ('orientationchange',f);
}
}

return callbcs;
}
,
get error (){
let opts={
FileFormatError:function  (msg){
return msg;
}
,
get InvalidFileFormat(){
return 'InvalidFileFormat: ';
}

,
get InvalidIDNotFound(){
return 'InvalidIDNotFound';
}
}
return opts;
}
,
//load scripts
loadScript (pathname){
let e=document.createElement('script');
e.src=pathname;
document.head.appendChild(e);
}
,
lib(pn){
'use strict'
let p=pn;

if(p.endsWith ('.lib.js')){
let e=document.createElement('script');
e.src=p;
document.head.appendChild(e);
}else  {
let e=application.error.FileFormatError(application.error.InvalidFileFormat+'\n'+'application.loadLib(path) requires file ends with \'.lib.js\' , ex: \'mylib.lib.js\'');
throw e;
console.log(e);
}

}

}
//default callback functions

//onload page
window.onload =function (){ 
start (); //ocurre when page load
//run (teste);
//gameLoop ();

}

//errs
function  ErrorID(msg){
this.name=APP.error.InvalidIDNotFound;
this.message=msg||'';
//this.stack=(new Error()).stack;
}

//GEOMETRY NAMESPACE
let LIB_GEOMETRY='lib: geometry.lib.js is succefull loaded!';


let Geo={
// { CREATE NEW RECT OBJECT }
Rect:function(x=10,y=10,sets={}){

//this.name=sets.name||'';
this.tag=sets.tag||null;
this.x=x;
this.y=y;

this.width=sets.w||20;
this.height=sets.h||20;

this.borderTop=sets.borderTop||0;
this.borderRight=Math.toNegative (sets.borderRight)||0;
this.borderBottom=Math.toNegative (sets.borderBottom)||0;
this.borderLeft=sets.borderLeft||0;


this.color=sets.color||'white';
this.borderColor1=sets.borderColor1||'black';
this.borderColor2=sets.borderColor2||'black';

this.borderSize1=sets.borderSize1||1;
this.borderSize2=sets.borderSize2||1;

this.visible=true;
this.bodyWidth=null;
let radius=3;
this.parentArr=[];
let context=APP.mainCanvas.context;


this.draw=function(){
if(this.visible){
context.fillStyle=this.color;
context.strokeStyle=this.borderColor1;
context.lineWidth=this.borderSize1;
context.lineCap='round';
context.beginPath ();
context.moveTo(this.x,this.y);
context.lineTo(this.x+this.width,this.y);

//rad 1
context.lineTo(this.x+this.width+radius,this.y+radius);
//height right
context.lineTo(this.x+this.width+radius,this.y+this.height);
//radius down right
context.lineTo(this.x+this.width,this.y+this.height+radius);
//largura down
context.lineTo(this.x,this.y+this.height+radius);
//rar down left
context.lineTo(this.x-radius,this.y+this.height);
//height up
context.lineTo(this.x-radius,this.y+radius );

//radius top left
context.lineTo(this.x,this.y);
context.fill ();
//context.closePath();
context.stroke ();


//border for this rect 
context.strokeStyle=this.borderColor2;
context.lineWidth=this.borderSize2;
context.beginPath ();
context.moveTo(this.x+this.borderLeft,this.y+this.borderTop);
context.lineTo(this.x+this.width+this.borderRight,this.y+this.borderTop);

//rad right top
context.lineTo(this.x+this.width+this.borderRight+radius,this.y+this.borderTop+radius);
//altura right
context.lineTo(this.x+this.width+this.borderRight+radius,this.y+this.height+this.borderBottom);
//radius down right
context.lineTo(this.x+this.width+this.borderRight,this.y+this.height+radius+this.borderBottom);
//largura down
context.lineTo(this.x+this.borderLeft,this.y+this.height+radius+this.borderBottom);
//rad down left
context.lineTo(this.x+this.borderLeft-radius,this.y+this.height+this.borderBottom);
//height up
context.lineTo(this.x+this.borderLeft-radius,this.y+radius+this.borderTop);

//radius top left
context.lineTo(this.x+this.borderLeft,this.y+this.borderTop );
//context.closePath();
context.stroke ();

this.bodyWidth=this.x+this.width;
this.bodyHeight=this.y+this.height;

}

}

}

,
//{create new CIRCLE OBJECT }
Circle:function(x,y,sets){
this.name=name||sets.name;
this.tag=sets.tag||null;
this.x=x;
this.y=y;
this.radius=sets.r||10;
this.color=sets.color||'black';
this.visible=true;

let context=APP.mainCanvas.context;

this.draw=function(){
if(this.visible){
context.fillStyle=this.color;
context.beginPath();
context.arc(this.x,this.y,this.radius,0,2*Math.PI);
context.fill();
//can.stroke();
}//if

}
}

,

//create an point smallest,used for medids
//{create new point OBJECT }
radPoint:function(x,y,sets=null){
//this.name=name||sets.name;
//this.tag=sets.tag||null;
this.x=x;
this.y=y;
this.radius=sets.r<8?sets.r:8;
this.color=sets.color||'black';
this.visible=true;

let context=APP.mainCanvas.context;

this.draw=function(){
if(this.visible){
context.fillStyle=this.color;
context.beginPath();
context.arc(this.x,this.y,this.radius,0,2*Math.PI);
context.fill();
//can.stroke();
}

}


}
,
//create ClipRect
clipRect:function  (){
let context=APP.mainCanvas.context;

this.open =function (x,y,w,h,sets){
context.save ();
context.fillStyle=sets.background||'white';
context.strokeStyle=sets.strokeColor||'black';
context.lineWidth=0.5;
context.beginPath ();
context.rect (x,y,w,h);
if (typeof sets.fill=='boolean'==true)
context.fill ();
if (typeof sets.stroke=='boolean'==true)
context.stroke ();
context.clip ();

//context.restore ();
}
this.close=function  (){
context.restore ();
}
},

//create ClipARC
clipArc:function  (){
let context=APP.mainCanvas.context;

this.open =function (x,y,r,sets){
context.save ();
context.fillStyle=sets.background||'white';
context.strokeStyle=sets.strokeColor||'black';
context.lineWidth=0.5;
context.beginPath ();
context.arc(x,y,r,0,2*Math.PI);
if (typeof sets.fill=='Boolean'==true)
context.fill ();
if (typeof sets.stroke=='Boolean'==true)
context.stroke ();
context.clip ();

//context.restore ();
}
this.close=function  (){
context.restore ();
}
}
,
get loaded (){
return 'lib: Geo from geometry.lib.js is succefull loaded!';
}
}
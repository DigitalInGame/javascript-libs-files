//graphics.js 
//use ui components
let LIB_GRAPHICS='lib: graphics.lib.js is succefull loaded!';



let UI={
//Create Text OBJECT
Text:function  (x,y, sets){
this.color=sets.color||'black';
this.text=sets.text||'Demo Text';
this.x=x;
this.y=y;

let context=APP.mainCanvas.context;

this.draw=function  (){
context.fillStyle=this.color;
context.fillText (this.text,this.x,this.y);
}

}
,
//create  a DIALOGBOX Object
dialogBox:function (x,y, sets){
this.color=sets.color||'lightblue';
this.x=x;
this.y=y;
this.width=APP.width/1.6;
this.height=sets.h||50;
let radius=3;

let context =APP.mainCanvas.context;

this.draw =function  (){
context.fillStyle=this.color;
context.strokeStyle='black';;
context.lineWidth=1;
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

}

}
,
//create New IMAGE Object
Image:function  (x,y,sets){
this.x=x;
this.y=y;
this.width=sets.w||20;
this.height=sets.h||20;
this.source=sets.source;

let i=new Image ();
i.src=this.source;
//render image
this.draw=function  (){
APP.mainCanvas.context.drawImage (i,this.x,this.y,this.width,this.height);
}

}
,
//create new Button Object
Button:function  (x,y,sets){
const iX=sets.x;
const iW=sets.w;

this.fontStyle=sets.fontStyle||'Normal';
this.fontSize=sets.fontSize||10;
this.fontFamily=sets.fontFamily||'Normal';
this.text=sets.text||'Text';
this.textColor=sets.textColor||'black';
this.x=x;
this.y=y;
this.width=sets.w||80;
this.height=sets.h||30;
this.borderTop=sets.borderTop||0;
this.borderRight=Math.toNegative (sets.borderRight)||0;
this.borderBottom=Math.toNegative (sets.borderBottom)||0;
this.borderLeft=sets.borderLeft||0;


this.borderColor1=sets.borderColor1||'black';
this.borderColor2=sets.borderColor2||'black';

this.borderSize1=sets.borderSize1||1;
this.borderSize2=sets.borderSize2||1;

let radius=3;
this.color=sets.color||'white';
let click=false,clicked=false,clickDown=false,clickUp=true;
let tX,tY;
let delay=0;
let spand=false;

let context=APP.mainCanvas.context;


this.draw=function  (){
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

context.fillStyle =this.textColor;
context.font=this.fontStyle+' '+this.fontSize+'px '+this.fontFamily;
context.fillText(this.text,this.x+(sets.ancX||0),this.y+10+(sets.ancY||10));
//this.w=ctx.measureText(this.text).width;
//iW=this.w;
}

//click button 
this.click=function  (){
addEventListener('touchstart',function  (e){
tX=e.touches[0].clientX;
  tY=e.touches[0].clientY;
    clicked=true;

});

addEventListener('touchend',function  (){
 if (clicked)
 clicked=false;
 delay =0;
});

/*addEventListener('touchcanceled',function  (){
 clicked=false;
});*/

if (clicked)
{
  delay+=0.1;
}

 if(clicked && delay>0 &&
    delay<0.2 &&
     (tX>this.x && tX <this.x+this.width)&&
        (tY>this.y && tY <this.y +this.height))
        {
        
             return clicked; 
        } 
        
        if(!clicked)
        {
        delay=0;
        }
  
}

//clickDown
this.clickDown=function  (){

addEventListener('touchstart',function  (e){
tX=e.touches[0].clientX;
tY=e.touches[0].clientY;
//click=true;
clickDown =true; 

});

addEventListener('touchend',function  (){
clickDown=false;
});

 if (clickDown&&
 (tX>this.x&& tX<this.x+this.width)&&
 (tY>this.y && tY <this.y+this.height)){
 clickUp=false;
 return true; 
}
   
   //return false; 
}

this.clickUp=function(){
addEventListener('touchend',function()
{
clickUp=true;
clickDown=false;
});

return clickUp;
}
}  //close Button 
,

//create  SpriteSheet and animate in animate (array) function 
spriteAnimate:function  (x,y, sets){
this.x=x;
this.y=y;
this.width=sets.w;
this.height=sets.h;

this.image=new Image ();
this.image.src=sets.source;
this.data=[];

this.index=0;
this.frame=10;
let startFrame=0;

this.sourceX=0;
this.sourceY=0;
this.sourceW=0;
this.sourceH=0;
let context =APP.mainCanvas.context;

this.animate=function (arr){
//startFrame ++;
this.a=arr[this.index];

this.sourceX =this.a[0];
this.sourceY=this.a[1];
this.sourceW =this.a[2];
this.sourceH =this.a[3];

/*if (startFrame>fram){
this.index++;
startFrame  =0;
}

if (this.index>arr.length-1)
this.index=0;*/
}

this.draw=function  (){

context.drawImage(this.image,
this.sourceX,this.sourceY,this.sourceW,this.sourceH,
this.x,this.y,this.width,this.height);

}

} //close sprite 
,

//Create SpriteSheet Frame create Frames array to animate using play (id)
spriteFrame:function  (x,y, sets){
this.x=x;
this.y=y;
this.width=sets.w;
this.height=sets.h;
this.index=0;
this.length=0;
let img=new Image ();
img.src=sets.source;
let pause=false;

let c=APP.mainCanvas.context;

this.sourceX=0;
this.sourceY=0;
this.sourceW=120,this.sourceH=30;
let data=[];

this.createFrames=function  (id,arr){
data.push ({id:id,frames:arr});
}

this.play =function  (id){
for (let x in data){
if (data[x].id==id){
this.sourceX=data[x].frames[this.index][0];
this.sourceY=data[x].frames[this.index][1];
this.sourceW=data[x].frames[this.index][2];
this.sourceH=data[x].frames[this.index][3];

this.length=data[x].frames.length;
if (!pause)
this.index++;
if (this.index  >this.length-1)
this.index =0;
}}
}

//preview frame in 0 created frame 
this.preview=function  (){
this.sourceX=data[0].frames[this.index][0];
this.sourceY=data[0].frames[this.index][1];
this.sourceW=data[0].frames[this.index][2];
this.sourceH=data[0].frames[this.index][3];

}

this.pause=function  (p){
pause=p;
}

this.draw=function  (){
c.drawImage (img,this.sourceX,this.sourceY,
this.sourceW,this.sourceH,
this.x,this.y,this.width,this.height);
}
}
,
get loaded (){
return 'lib: UI from graphics.lib.js is succefull loaded!';
}
}//close UI
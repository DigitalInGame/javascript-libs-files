//SPECIAL EXTRA BASE FUNCTIONS
//'use strict'
//data save values using keys
let Base =function  (){
let s=this;
s.dataID={};

//add new key + value
s.add=function(k,v)
    {
    for (let x in s.dataID){
    if (Object.keys(s.dataID)[x].id!=k)
        s.dataID[k]=v;
    }
}
//return values using key
s.get=function (k)
   {
   for (let x in s.dataID){
       if (Object.keys(s.dataID )[x][k]!=null )
          {
         // document.write (s.dataID[x].value+'<br>');
              return s.dataID[x].value;

          }
   }
   }
   
  s.all= function (){
  return s.dataID; 
  }
}



//CREATE PRELOAD DATA,use to PRELOAD ASSETS

let loader={

loads:[],


//setBase
setBase:function (id_path,p){
this.loads.push({idPath:id_path,base:p});
//return this;
}
,

load:function (id,p){
this.loads.push({id:id,path:p});
}//load

,
getID:function (id){
for(let x=0; x<this.loads.length; x++){
if(this.loads[x].id==id){
return this.loads[x].path;
} //if
}//for

} //function get
,
getSRC:function (id_path,s_n){
for(let x=0; x<this.loads.length; x++){
if (this.loads [x].idPath==id_path)
return this.loads[x].base+s_n;

}//for
}

,

//load image before create a id for
createID:function (id,i_n){
for(let x=0; x<this.loads.length; x++){
if(this.loads[x].base){
//return loads[x].path;
this.loads.push({'id':id,'path':this.loads[x].base+i_n});
}}
return this;
}
,
//getFBase
fromBase:function (id=null){
for(let x=0; x<this.loads.length; x++){
if(this.loads[x].id===id){
return this.loads[x].path;
} //if
}//for
}
,
// return ALL id for this path/
/*loads:function (){
let res=[];
for(let x=0; x<this.loads.length; x++){
 return this.loads;
}//for

}//break loads*/

} //BREAK PRELOAD


//SIGLE EXTRAS

//color return
let color=(r=undefined,g=undefined,b=undefined)=>{
let rr=r;
let gg=g;
let bb=b;

if((
typeof rr!='undefined' && 
typeof gg=='undefined' && 
typeof bb=='undefined'))
{
rr=rr;
gg=rr;
bb=rr;
}

if((
typeof gg!='undefined' && 
typeof rr=='undefined' && 
typeof bb=='undefined'))
{
gg=gg;
rr=gg;
bb=gg;
}

if((
typeof bb!='undefined' && 
typeof rr=='undefined' && 
typeof gg=='undefined'))
{
bb=bb;
rr=bb;
gg=bb;
}

//two values and not one
if((
typeof rr!='undefined' && 
typeof gg!='undefined' && 
typeof bb=='undefined'))
{
rr=rr;
gg=gg;
bb=0;
}

//-----
if((
typeof rr!='undefined' && 
typeof bb!='undefined' && 
typeof gg=='undefined'))
{
rr=rr;
bb=bb;
gg=0;
}
//----
if((
typeof gg!='undefined' && 
typeof bb!='undefined' && 
typeof rr=='undefined'))
{
gg=gg;
bb=bb;
rr=0;
}
//-----



return `rgb(${rr},${gg},${bb})`;
}



//RANDOM ABOUT TWO NUNBERS
random=(min,max)=>{
return Math.floor (Math.random()*(max-min+1)+min);

}


//event
let td;
let touchDown=function (){


addEventListener('touchstart',function(e){

state=true;
});

addEventListener('touchend',function(e){
state=false;
});

state=state;
return state;
}


//CREATE NEE COROUTINE OBJECT WITH KEYS IDENTIFIER
//call that function when tine greather or equal defined time
let Coroutine=function(keys)
{
   let data=[];
       for (let k in keys){
           data.push ({id:keys[k],startTime:0});
                          }

   this.call=function  (id,f,maxTime){
      for (let i in data)
    {
          if (data [i].id==id)
               {
                 data [i].startTime++;
           if (data [i].startTime>=maxTime)
           {
             f ();
                 data[i].startTime=0;
           }

               }
    }
   }
 }


/* double function,
*call first function then call seconds function
*when startTime greather or equal maxTime 
in test*/
let dbFunction=function(keys)
{
let startTime=0;
   let data=[];
       for (let k in keys){
           data.push ({id:keys[k]});
                          }
this.reset=function  (){
startTime =0;
}


   this.call=function  (id,f1,id2,f2,maxTime,erro){
      for (let i=0; i <data.length; i++)
    {
          if (data [i].id==(id && id2))
               {
                 startTime++;
           if (startTime<maxTime)
           f1();
           if (startTime>=maxTime)
            {
           startTime=maxTime;
             f2();
                 //data[i].startTime=0;
           } //if startTime

               }else {
               if ((id||id2)!=data [i].id){
             erro ();
               }
               }
    }
   }
 }


//CREATE A TIME COUNT(HOUR ,MINUTE , SECOND)
let timeLap=function(h,m,s){
const p=this;
   let initH=h;
     let initM=m;
        let initS=s;

p.h=h;
  p.m=m;
    p.s=s;

   let paused=false;
     let done;
        let dayStr,hourStr,minStr,segStr='';

    p.start=function(){
//less 1 seconf
//if LOOP
    if (!paused)
      p.s-=0.01;

  if (p.s <=0 && p.m>0){
    p.s=60;
      p.m-=1;
                       }

   if (p.s<=0 &&p.m <=0 && p.h>0){
      p.h-=1;
         p.m=60;
              }

  if (p.s <0 && p.h <=0 && p.m<=0){
     p.s=0;
       p.h=0;
         p.m=0;
     }
  hourStr =p.h;
    minStr=p.m;
      segStr=Math.floor (p.s);

if (p.h <10)
   hourStr ='0'+hourStr;
     if (p.m <10)
       minStr ='0'+minStr;
          if (p.s <10)
              segStr  ='0'+segStr;
}

//check time end
   p.finish=function(){
      let r= (p.h==0 && p.m==0 && p.s==0)?true:false;
         if (r)
         {
            done=true;
         }
            else {
            done=false;
                 }
            return done; 

             }

    p.pause=function  (b)
    {
      paused=b;
    }

     p.isPaused=function()
     {
        return paused;
     }

p.restart=function  (){
  if (done)
     p.h=initH;
       p.m=initM;
           p.s=initS;
                      }

      //return hour as string
      p.getHour=function()
      {
           return this.result=hourStr;
      }

     //return minutes as strin
    p.getMinutes=function()
       {
         return this.result=minStr;
       }

    //return time as string
     p.getTime =function (){
        return this.result=hourStr+':'+minStr+':'+segStr;
     }
     }
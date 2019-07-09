var slider = document.querySelectorAll(".slider")

var magnifySlider = document.querySelector("#magnifyRange");
var magnifyOutput = document.querySelector("#magnify");
magnifyOutput.innerHTML = magnifySlider.value;

var xSlider = document.querySelector("#xRange");
var xoutput = document.querySelector("#xCoord");
xoutput.innerHTML = xSlider.value;

var ySlider = document.querySelector("#yRange");
var youtput = document.querySelector("#yCoord");
youtput.innerHTML = ySlider.value;

// var magnify = slider.value;
var magnifySlide = document.querySelector(".magnifySlide")
var magnify = magnifySlide.value;

var xCoord = document.querySelector(".xSlide");
var yCoord = document.querySelector(".ySlide");

// slider.oninput=function(){
//   output.innerHTML = slider.value;
//   magnify = slider.value;
//   console.log(magnify);
//   return magnify;
// }

magnifySlider.oninput=function(){
magnifyOutput.innerHTML = magnifySlider.value;
}

xSlider.oninput = function(){
  xoutput.innerHTML = xSlider.value;
}

ySlider.oninput = function(){
youtput.innerHTML = ySlider.value;

 }





var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 800;

var ctx = canvas.getContext("2d");

function belongToSetCheck(x,y){
  var real = x;
  var imaginary = y;
  var iterations=100;

  for(var i=0; i<iterations; i++){

    var tempReal = real*real - imaginary*imaginary + x;
    var tempImaginary = 2*real*imaginary + y;

    real = tempReal;
    imaginary = tempImaginary;


  if (Math.sqrt(real*real + imaginary*imaginary) >= 4){
  // return true;
    return (i/iterations *100)}
    // console.log(i/iterations *100);
  }

  // else {return false}


return 0;
}

// var magnify = slider.value;

// slider.onchange = slideChange();
//
// slideChange(){
//   magnify = slider.value
// }


var panX = xCoord.value;
var panY = yCoord.value;


for (var x=0; x < canvas.width; x++){
  for (var y = 0; y < canvas.height; y++){
    var belongToSet = belongToSetCheck(x/magnify - panX,y/magnify - panY);
    // if(belongToSet){
    //   ctx.fillRect(x,y,1,1);
    // }
    // console.log(belongToSet);
    if(belongToSet===0){
      ctx.fillStyle="#000000";
      ctx.fillRect(x,y, 1,1)
    }
    else{
      // console.log(belongToSet);
      // ctx.fillStyle="hsl(150,90%,"+ belongToSet+10+"%)";
      ctx.fillStyle="hsl("+belongToSet*2.55+",100%, 60%)";
      // ctx.fillStyle="hsl("+belongToSet*3.6+",90%, 100%)";
      // ctx.fillStyle="#ffffff";
      ctx.fillRect(x,y, 1,1);
    }
  }

}




magnifySlider.onchange=function(){

  magnify = magnifySlide.value;
  console.log(magnify);


for (var x=0; x < canvas.width; x++){
  for (var y = 0; y < canvas.height; y++){
    var belongToSet = belongToSetCheck(x/magnify - panX,y/magnify - panY);
    // if(belongToSet){
    //   ctx.fillRect(x,y,1,1);
    // }
    // console.log(belongToSet);
    if(belongToSet===0){
      ctx.fillStyle="#000000";
      ctx.fillRect(x,y, 1,1)
    }
    else{
      // console.log(belongToSet);
      // ctx.fillStyle="hsl(150,90%,"+ belongToSet+10+"%)";
      ctx.fillStyle="hsl("+belongToSet*2.55+",100%, 60%)";
      // ctx.fillStyle="hsl("+belongToSet*3.6+",90%, 100%)";
      // ctx.fillStyle="#ffffff";
      ctx.fillRect(x,y, 1,1);
    }
  }

}
}


xSlider.onchange=function(){

  panX = xCoord.value;


for (var x=0; x < canvas.width; x++){
  for (var y = 0; y < canvas.height; y++){
    var belongToSet = belongToSetCheck(x/magnify - panX,y/magnify - panY);
    // if(belongToSet){
    //   ctx.fillRect(x,y,1,1);
    // }
    // console.log(belongToSet);
    if(belongToSet===0){
      ctx.fillStyle="#000000";
      ctx.fillRect(x,y, 1,1)
    }
    else{
      // console.log(belongToSet);
      // ctx.fillStyle="hsl(150,90%,"+ belongToSet+10+"%)";
      ctx.fillStyle="hsl("+belongToSet*2.55+",100%, 60%)";
      // ctx.fillStyle="hsl("+belongToSet*3.6+",90%, 100%)";
      // ctx.fillStyle="#ffffff";
      ctx.fillRect(x,y, 1,1);
    }
  }

}
}

ySlider.onchange=function(){

  panY = yCoord.value;


for (var x=0; x < canvas.width; x++){
  for (var y = 0; y < canvas.height; y++){
    var belongToSet = belongToSetCheck(x/magnify - panX,y/magnify - panY);
    // if(belongToSet){
    //   ctx.fillRect(x,y,1,1);
    // }
    // console.log(belongToSet);
    if(belongToSet===0){
      ctx.fillStyle="#000000";
      ctx.fillRect(x,y, 1,1)
    }
    else{
      // console.log(belongToSet);
      // ctx.fillStyle="hsl(150,90%,"+ belongToSet+10+"%)";
      ctx.fillStyle="hsl("+belongToSet*2.55+",100%, 60%)";
      // ctx.fillStyle="hsl("+belongToSet*3.6+",90%, 100%)";
      // ctx.fillStyle="#ffffff";
      ctx.fillRect(x,y, 1,1);
    }
  }

}
}

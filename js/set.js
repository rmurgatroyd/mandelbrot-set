var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1200;

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


var magnify = 600;
var panX = 1.5;
var panY = 1;
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

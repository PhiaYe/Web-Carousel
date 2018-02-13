

var c;
var ctx;
var x = 150;
var y = 100;
var shape;

window.onload = function () {
  c=document.getElementById("canvas");
  ctx=c.getContext("2d");
};



function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}

//-----------[class Circle starts here]------------------//

class Circle{

//  var x = 150;
//  var y = 100

  constructor(x, y) {
      this.r = 50;
      this.start = 0;
      this.end = 2*Math.PI;
      this.x = 150;
      this.y = 100;
      this.strokeStyle = "#000000"
      this.lineWidth = 5;
      this.removeLineWidth = 7;
      this.drawCircle(this.x, this.y);
  }

  drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, this.r, this.start, this.end);
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
  }

  removeCircle(x,y){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.start, this.end);
    ctx.strokeStyle="#FFFFFF";
    ctx.lineWidth = this.removeLineWidth;
    ctx.stroke();
  }

  moveUp(x,y){
    this.removeCircle(this.x, this.y)
    y = this.y - 10;
    ctx.beginPath();
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.strokeStyle="#000000";
    ctx.lineWidth=5;
    ctx.stroke();
  }

  moveDown(x,y){

  }

  moveLeft(x,y){

  }

  moveRight(x,y){

  }


}

//-----------[class Circle ends here]------------------//



document.addEventListener('keydown', function(event) {

      switch (event.keyCode) {

        case 80: //p
          shape = new Circle(x,y);
        break;

        case 87: //w
          shape = shape.moveUp(x,y);
         break;

        case 65: //a
          ctx.beginPath();
          ctx.arc(x,y,50,0,2*Math.PI);
          ctx.strokeStyle="#FFFFFF";
          ctx.lineWidth=10;
          ctx.stroke();

          x = x - 10;

          ctx.beginPath();
          ctx.arc(x,y,50,0,2*Math.PI);
          ctx.strokeStyle="#000000";
          ctx.lineWidth=5;
          ctx.stroke();
         break;

         case 68: //d
           ctx.beginPath();
           ctx.arc(x,y,50,0,2*Math.PI);
           ctx.strokeStyle="#FFFFFF";
           ctx.lineWidth=10;
           ctx.stroke();

           x = x + 10;

           ctx.beginPath();
           ctx.arc(x,y,50,0,2*Math.PI);
           ctx.strokeStyle="#000000";
           ctx.lineWidth=5;
           ctx.stroke();
          break;

          case 83: //s
             ctx.beginPath();
             ctx.arc(x,y,50,0,2*Math.PI);
             ctx.strokeStyle="#FFFFFF";
             ctx.lineWidth=10;
             ctx.stroke();

             y = y + 10;

             ctx.beginPath();
             ctx.arc(x,y,50,0,2*Math.PI);
             ctx.strokeStyle="#000000";
             ctx.lineWidth=5;
             ctx.stroke();
            break;



        default:
          break;
      }
  });

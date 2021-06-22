var canvas =document.getElementById("myCanvas");
var ctx =canvas.getContext("2d");
var last_position_x   , last_position_y  ,  start_position_x  , start_position_y;
var color="pink";
var penwidth=15;
var mouse_event;
var start_X,start_Y,end_X,end_Y;

canvas.addEventListener("mouseup" , mymouseup);

function mymouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave" , mymouseleave);

function mymouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousedown" , mymousedown);

function mymousedown(e){
    mouse_event="mousedown";

    start_X=e.clientX - canvas.offsetLeft;
    start_Y=e.clientY - canvas.offsetTop;
}


canvas.addEventListener("mousemove" , mymousemove);

function mymousemove(e){
   
    end_X=e.clientX - canvas.offsetLeft;
    end_Y=e.clientY - canvas.offsetTop;
     
    if(mouse_event=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = penwidth;
        ctx.moveTo(start_X,start_Y);
        ctx.lineTo(end_X,end_Y);
        
        ctx.stroke();
       
console.log("  start X -"+  start_X +"  start Y - "  +  start_Y);
console.log("  End X -"+  end_X +"  End Y - "  +  end_Y);
    }
    start_X=end_X;
    start_Y=end_Y;
      
}
canvas.addEventListener("touchstart", my_touchstart);
    
function my_touchstart(e)
{
   start_position_x=e.touches[0].clientX-canvas.offsetLeft;
   start_position_y=e.touches[0].clientY-canvas.offsetTop; 

}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = penwidth;


    console.log("Start position of x and y coordinates = ");
    console.log("x = " + start_position_x + "y = " + start_position_y);

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_x + "y = " + last_position_y);
    ctx.moveTo(start_position_x , start_position_y);

  
    ctx.lineTo(last_position_x , last_position_y);
    ctx.stroke();
    
   start_position_x= last_position_x;
   start_position_y=last_position_y;
}

var screen_width =screen.width;
var screen_height=screen.height;

var canvas_width_new = screen.width- 100;
var canvas_height_new = screen.height- 200;

if(screen_width<992){
    canvas.width=canvas_width_new;
    canvas.height=canvas_height_new;

    document.body.style.overflow="hidden";
}

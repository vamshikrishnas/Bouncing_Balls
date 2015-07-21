var x;
var y;
var friction=0.02;

var xacc=0.0;
var yacc=0.0;
var xvel=0.0;
var yvel=0.0;

var g=0.02;
var w,h;

function init()
{
	w=window.innerWidth;
	h=window.innerHeight;
	x=0;
	y=h-50;
	console.log(w,h,x,y);
	setInterval(draw,10);
}

function draw()
{
	bE = document.getElementById("ball");
	//console.log(x,y);

	xvel = xvel + xacc ;
	
	if ( xvel > 0 )
	{
		xvel-=friction;
	}else if (xvel < 0)
	{
		xvel+=friction;
	}
	
	x= x + xvel;

	
	
	
	

	// touching the wall on one of the side
	if( (x<=0) || (x+50)>=w && xvel>0)
	{
		xvel*=-1;
	}else if((x<=0) || (x+50)>=w && xvel<0)
	{
		xvel*=1;
	}

	yvel= yvel + yacc ;
	if( (y<=0) || (y+50)>=h && yvel>0)
	{
		yvel*=-0.8;
	}else if((y<=0) || (y+50)>=h && yvel<0)
	{
		yvel*=0.8;
	}
	y=y+yvel;
	bE.style.left=x+"px";
	bE.style.top=y+"px";
	


}



window.addEventListener("keydown",accl, false);
// Accelerate
function accl(e)
{
	switch(e.keyCode) 
	{
		case 37: xacc = -0.1;
				break;
		case 38:
				yacc=-0.1+g;
				break;
		case 39:
				xacc=0.1;
				break;
		case 40:
				yacc=0.1-g;
				break;
	}
}

window.addEventListener("keyup", deaccl, false);
//Deaccelerate
function deaccl(e)
{
	switch(e.keyCode) 
	{
		case 37: xacc =0.0;
				break;
		case 38:
				yacc=g;
				break;
		case 39:
				xacc=0.0;
				break;
		case 40:
				yacc=g;
				break;
	}
}
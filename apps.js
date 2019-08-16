// Rover Object Goes Here
// ======================

// ======================



var rover=
{
	direction:'N',
	x:0,
	y:0,
	travelLog:[],
	turn:function(attr){
		console.log(attr);
		if (this.direction==='N' && attr ==='l') this.direction='W';
		else
		if (this.direction==='W' && attr ==='l') this.direction='S';  
    	else
		if (this.direction==='N' && attr ==='r') this.direction='E';
	  	else
		if (this.direction==='E' && attr ==='r') this.direction='S';
	  	else
		if (this.direction==='S' && attr ==='r') this.direction='W';
	    else
		if (this.direction==='S' && attr ==='l') this.direction='E';
	    else
			alert('conditon pending '+this.direction+ ' '+attr);
	},
	move:function(){
		console.log('move '+this.direction);
		
		switch(this.direction) {
          case 'W':
             this.x--;
             break;
          case 'N':
             this.y--;
             break;
          case 'S':
             this.y++;
             break;
         default:
          // code block
      }
		
	 
	 if (this.x<0)this.x=0;
	 if (this.y<0)this.y=0;
	 
	 this.travelLog.push(this.x+','+this.y);
		
	},
	
	doCommands:function(str){
	  for (var i=0;i<str.length;i++)
		  if(str[i]==='f')
		    this.move();
		   else 
			   this.turn(str[i]);
		  
	}
}


rover.doCommands('rffrfflfrff');
console.log(rover.travelLog);



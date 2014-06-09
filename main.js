window.onload=function(){

    (function(){
	var player = new Chara();
	//var stage1 = new map();

    
	//	stage1.drawMap();
	player.drawChara();
    })();
	
    
    
}
var Chara = function(){
  
    var self;
    self = this;
    /*
    var SPEED = 5;
    var JUMP = 10;
    var x,y = 10;
    var vx,vy;
    */
    
    (function(){document.createElement("id")})()
    var picture;

    this.moveChara = function(){
	self.x = vx + x;
	self.y = vy +y;
    };

    this.drawChara=function(){
	self.picture = document.createElement("img");
	document.body.appendChild(self.picture);
	self.picture.src = "pict/chara01.png";
    }
};

function map(){
    function drawMap(){
	}
}

window.onload=function(){

	var player = new Chara();
    (function(){
	//var stage1 = new map();    
	//	stage1.drawMap();
	player.drawChara();
    })();
 player.moveChara();   

    
}
var Chara = function(){
  
    var self;
    self = this;
var abd;
var lll;    
   // (function(){document.createElement("id")})()
    var picture;
    picture = document.createElement("img");
    picture.id = "ch"; 
	document.body.appendChild(picture);
    this.moveChara = function(){
	self.x = event.clientX;
	document.getElementById("ch").style.left= self.x;
	//self.y = vy +y;
    };

    this.drawChara=function(){
  

	picture.src = "pict/chara01.png";
    }
};

function map(){
    function drawMap(){
	}
}

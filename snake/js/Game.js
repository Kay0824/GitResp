
function Game(parThis){
	
	//主页面的this
	this.parThis = parThis;
 	this.row = 20;
 	this.col = 20;
	
	this.score = 0;
	//初始化节点
 	this.init();
	//实例化蛇
	this.snake = new Snake();
	//初始化食物
	this.food = new Food(this);
	
	//this.user = new User();
	
	//游戏开始监听
	this.startGame();
	//重新开始监听
	this.startAgain();
	//键盘监听器
	this.bindEvent();
	

}
Game.prototype.init = function(){
	this.dom = document.createElement("table");
	var tr,td;
	//遍历行和列
	for(var i = 0; i < this.row; i++){
		//遍历行，创建节点
		tr = document.createElement("tr");
		//追加节点
		this.dom.appendChild(tr);
		for(var j = 0;j <this.col; j++){
			 
			td = document.createElement("td");
			 
			tr.appendChild(td);
		}
		 
	}
	//表格上树
	document.getElementById("app").appendChild(this.dom);
	
	
};
 
//设置颜色的方法
Game.prototype.setColor = function(row,col,color){
	//让表格的第几行第几列设置成什么颜色
	this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
	
};

Game.prototype.clear = function(){
	//遍历表格，清除画布
	for(var i = 0; i<this.row; i++){
		for(var j = 0;j<this.col; j++){
			this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = "#AAAAAA";
		
		}
	}
};

//游戏开始监听
Game.prototype.startGame = function(){
	var self = this;
	var startGame = document.getElementById("b1");
	startGame.onclick = function(){
		
		self.start();
	}	
}

//再来一局监听

Game.prototype.startAgain = function(){
	var self = this;
	var againGame = document.getElementById("b2");
	againGame.onclick = function(){
		self.clear();
		self.score = 0;
		self.snake = new Snake();
		self.start();
				
	}
}


//设置键盘监听事件
Game.prototype.bindEvent = function(){
	var self = this;
	document.onkeydown = function(event){
		switch(event.keyCode){
			case 37:
				//先进行判断，如果当前的方向是向右移动，此时我们不能按左键
				if(self.snake.direction == "R") return;
				
				self.snake.changeDirection("L")
				break;
			case 38:
				if(self.snake.direction == "D") return;
				self.snake.changeDirection("U")
				break;
			case 39:
				if(self.snake.direction == "L") return;
				self.snake.changeDirection("R")
				break;
			case 40:
				if(self.snake.direction == "U") return;
				self.snake.changeDirection("D")
				break;
		}
	}
};

//定时器操作蛇的三步走
Game.prototype.start = function(){
	
	
	this.f = 0;
	this.timer = setInterval(function(){	
		game.f++;
		document.getElementById("f").innerHTML = "帧编号：" + game.f;
		document.getElementById("scores").innerHTML = "分数: " + game.score;
		document.getElementById("score").innerHTML = game.score;
		
		//清屏
		game.clear();
		 	
		//蛇的更新速度，当蛇变长时，速度加快
		var during = game.snake.body.length < 20 ? 20 - game.snake.body.length : 1;
		//蛇的更新
		game.f % during == 0 && game.snake.update();
		
		//渲染蛇
		game.snake.render();
		//渲染食物
		game.food.render();	
			
	},20)
	
}

//方便修改弹出框的样式

Game.prototype.setCss = function(targetObj, cssObj){
	var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
	for(var i in cssObj) {
		str += i + ":" + cssObj[i] + ";";
	}
	
	targetObj.style.cssText = str;
	

}

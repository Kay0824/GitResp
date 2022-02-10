function Snake(){
	//设置蛇的初始化身体
	this.body =[
		{"row":3,"col":4},
		{"row":3,"col":3},
		{"row":3,"col":2}			
	];
	//信号量，设置运动方向
	this.direction = "R";
	//即将改变的方向，目的就是为了防止原地掉头的情况
	this.willDirection = "R";
	

	
	
}

Snake.prototype.render = function(){
	
	game.setColor(this.body[0].row,this.body[0].col,'pink');
	
	for(var i =1;i<this.body.length; i++){
		game.setColor(this.body[i].row,this.body[i].col,'skyblue');
	}
	
}
//蛇运动
Snake.prototype.update = function(){
	//当前的direction接收一下willDirection
	this.direction = this.willDirection;
	//设置不同的方向，不同的运动轨迹
	switch(this.direction){
		case "L":
			this.body.unshift({"row":this.body[0].row,"col":this.body[0].col - 1});
			break;
		case "U":
			this.body.unshift({"row":this.body[0].row - 1,"col":this.body[0].col});
			break;
		case "R":
			this.body.unshift({"row":this.body[0].row,"col":this.body[0].col + 1});
			break;
		case "D":
			this.body.unshift({"row":this.body[0].row + 1,"col":this.body[0].col});
			break;
	}
	
	//死亡判断1，超出表格边缘
	if(this.body[0].col > game.col - 1||this.body[0].row > game.row -1||this.body[0].col < 0||this.body[0].row < 0){
		this.setAlert("您当前得分为：" + game.score);
		this.body.shift();
		clearInterval(game.timer);
		game.parThis.updataMes();	
	}
	
	//死亡判断2，自己撞到自己
	for(var i=1; i<this.body.length; i++){
		if(this.body[0].row == this.body[i].row && this.body[0].col == this.body[i].col){
			this.setAlert("您当前得分为：" + game.score);zx
			this.body.shift();
			clearInterval(game.timer);
			game.parThis.updataMes();	
		}
	}
	//蛇吃食物
	//判断如果当前的蛇头部和食物重合，则不执行尾部删除（即增加一格身体），否则再删除一格（显示运动），
	if(this.body[0].row == game.food.row && this.body[0].col == game.food.col){
		//重新添加食物
		game.food = new Food(game);
		//加分
		game.score ++;
		//防止蛇在吃到食物时猛窜，使真帧编号为0
		game.f = 0;
	}else{
		//尾部删除一格
		this.body.pop();
	}
	
}

//防止出现掉头bug
Snake.prototype.changeDirection = function(d){
	this.willDirection = d ;
	
}


Snake.prototype.setAlert = function(data){
	
	var a = document.createElement("div"),
	b = document.createElement("div"),
	text = document.createElement("div"),
	c = document.createElement("div"),
	btn = document.createElement("button"),
	textNode = document.createTextNode(data ? data : ""),
	btnText = document.createTextNode("确定");
	fail = document.createTextNode("GAME OVER!")
			
	// 控制样式
	game.setCss(a, {
		"position" : "fixed",	
		"left" : "600px",
		"top" : "280px",
			
		"width" : "300px",
		"height" : "250px",
		"background-color" : "white",
		"font-size" : "20px",
		"border" : "2px solid #318762",
		"border-radius" : "8px",
		"text-align" : "center",
			
	});
			
	game.setCss(b,{
		"margin-top":"0",
		"height" : "90px",
		"font-size" : "30px",
		"color" : "black",
		"line-height": "90px",
		"border-radius" : "8px 8px 0 0",
		"background" : "#38BC8D",
	
	})
	game.setCss(c,{
		//"background" : "red",
		"height" : "60px",
	
	})
			
	game.setCss(text,{
		"height" : "100px",
		"line-height": "100px",
	})
			
	game.setCss(btn, {
		"width" : "70px",
		"height" : "35px",
		"border-radius" : "10px",
		"background" : "#38BC8D",
		"border" : "1px solid #38BC8D"
			
	})
			
	// 内部结构套入
			
	text.appendChild(textNode);
	btn.appendChild(btnText);
	b.appendChild(fail);
	a.appendChild(b);
	a.appendChild(text);
	a.appendChild(c);
	c.appendChild(btn);
			
	// 整体显示到页面内
	document.getElementsByTagName("body")[0].appendChild(a);
			
	// 确定绑定点击事件删除标签
	btn.onclick = function() {	
		a.parentNode.removeChild(a);		
	}
	
}

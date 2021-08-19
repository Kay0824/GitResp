function Food(gameSnake){
	var self = this;
	//随机出食物位置
	//do-while语句先创建食物，再判断食物是否在蛇身上
	do{
		this.row = parseInt(Math.random() * gameSnake.row);
		this.col = parseInt(Math.random() * gameSnake.col);
	}while((function(){
		//遍历蛇身，判断随机出来的食物是否与蛇身重合
		for(var i = 0; i < gameSnake.snake.body.length; i++){
			if(gameSnake.snake.body[i].row == self.row && gameSnake.snake.body[i].col == self.col){
				return true;
			}
		}
		return false;
	})());
	
}

//渲染食物
Food.prototype.render = function(){
	game.setColor(this.row,this.col,'skyblue');
}
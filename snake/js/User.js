function User(){
	var flag=false;//false表示当前用户是新用户,true为老用户
	var currentName;//当前用户
	var currentscore = game.score;//当前得分

}
    //游戏开始，初始化用户信息
User.prototype.initMes = function(){
	var message_child = {};
	var historyMessage = JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
//        console.log("初始化--》"+historyMessage);
	currentName = prompt('请输入你的名字：','');
	if(currentName!= null && currentName!=''){
		document.getElementById('name').innerHTML=currentName;
	}
	if(historyMessage != null){
		for(var i=0;i<historyMessage.length;i++){
			if(historyMessage[i].name == currentName){
				flag=true; //已经有该用户
//                    console.log("旧用户");
			}
		}
	}
	if(!flag){//新用户
		console.log("新用户");
		message_child.name=currentName;
		message_child.score=[0];
		if(historyMessage==null){
			historyMessage=new Array();//不仅是新用户，而且该游戏还没有任何历史记录
//                console.log("新用户且该游戏还没有任何历史记录");
		}
		historyMessage.push(message_child);//将新用户的信息对象放入数组中
		localStorage.setItem("messageStorage",JSON.stringify(historyMessage));//存入本地

//            console.log("新用户加入--》"+JSON.parse(localStorage.getItem("messageStorage")));
	}
}

/**

User.prototype.displayHistory = function() {
	var historyMessage=JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
//        console.log("历史记录--》"+historyMessage);
//        console.log(historyMessage.length);
	var ul=document.getElementById('historyScore');
	for(var i=0;i<historyMessage.length;i++) {
		console.log(historyMessage[i].name);
		if(historyMessage[i].name==currentName){
			var score=historyMessage[i].score;
			for(var j=1;j<score.length;j++){
				var li=document.createElement('li');
				li.innerHTML='第'+j+'次：'+score[j];
				ul.appendChild(li);
			}
			return;
		}
	}
}

User.prototype.displayRanking = function() {
	var historyMessage=JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
	var ranking=new Array();
	for(var i=0;i<historyMessage.length;i++) {
		var player=historyMessage[i];
		var name_highScore={};
		var currentScore=player.score;//当前玩家历史得分数组
		var currentHighScore=currentScore[0];//当前玩家最高分
		for(var j=0;j<currentScore.length;j++){
			if(currentHighScore<currentScore[j])
			{
				currentHighScore=currentScore[j];
			}
		}
		name_highScore.name=player.name;
		name_highScore.score=currentHighScore;
		ranking.push(name_highScore); //将玩家以及对应的最高分组成的对象放入数组中
	}

	//对数组按照分数排序
	var k, m, tmp;
	for (k = 1; k < ranking.length; k++)
	{
		tmp = ranking[k];
		m = k - 1;
		while (m>=0 && tmp.score < ranking[m].score)
		{
			ranking[m + 1] = ranking[m];
			m--;
		}
		ranking[m + 1] = tmp;
	}
//        console.log(ranking);
	//创建结点
	for(var f=ranking.length-1;f>=0;f--){
		var ul=document.getElementById('ranking');
		var li=document.createElement('li');
		li.innerHTML="玩家："+ranking[f].name+"------最高分："+ranking[f].score;
		ul.appendChild(li);
	}

}

User.prototype.clearStorage = function() {
	localStorage.clear();
	alert("记录已清除");
}

//游戏结束，更新用户信息
function updataMes() {
	var historyMessage=JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
	console.log("游戏结束--》"+historyMessage);
//        console.log(historyMessage.length);

	for(var i=0;i<historyMessage.length;i++){
		if(historyMessage[i].name==currentName){
			historyMessage[i].score.push(currentscore);
			localStorage.setItem("messageStorage",JSON.stringify(historyMessage));//存入本地
//                console.log(JSON.parse(localStorage.getItem("messageStorage"))[i].score);
			return;
		}
	}
}

**/
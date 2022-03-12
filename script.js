var lvl = 1;
var str = 1;
var spd = 3;
var int = 4;
var end = 2;
var pointsNum = 10;
var wagerNum = 0;
var cat = 'init';
var stat = '';

function randomPick(array) {
 var randomNumber = Math.floor(Math.random() * (array.length));
 return array[randomNumber];
}

function print(text){
	// print text
	var readout = document.getElementById('readout');
	if (text != ""){
		readout.innerHTML = text + "<br>" + readout.innerHTML;
	}
}

function statOut(){
	var statOut = document.getElementById("stats");
	var concatStat = ("pet: " + 'Patches' + " | level: " + lvl + " | str: " + str + " | spd: " + spd + " | int: " + int + " | end: " + end + ' | <b> Points: ' + pointsNum + ' | Current Wager: ' + wagerNum + '</b>');
	statOut.innerHTML = concatStat;
}

function wager(){
	wagerNum += 1;
	pointsNum = pointsNum - 1;
	statOut();
}

function challenge(chglvl){
	var statLevel = 0;
	if (stat == 'spd'){
		statLevel = spd;
	} else if (stat == 'str'){
		statLevel = str;
	} else if (stat == 'int'){
		statLevel = int;
	} else {
		statLevel = end;
	}
	netlvl = statLevel - chglvl; // lower num = more challenge
	var petRoll = Math.floor(Math.random() * 100) + 1
	var winCondition = 50;
	if (netlvl == 0){
		winCondition = 50;
	} else if (netlvl == 1){
		winCondition = 63;
	} else if (netlvl == 2){
		winCondition = 74;
	} else if (netlvl == 3){
		winCondition = 81
	} else if (netlvl == 4){
		winCondition = 89;
	} else if (netlvl == 5){
		winCondition = 93;
	} else if (netlvl == 6){
		winCondition = 96;
	} else if (netlvl == 7){
		winCondition = 97;
	} else if (netlvl >= 8){
		winCondition = 99
	} else if (netlvl == -1){
		winCondition = 37;
	} else if (netlvl == -2){
		winCondition = 26;
	} else if (netlvl == -3){
		winCondition = 17;
	} else if (netlvl == -4){
		winCondition = 11;
	} else if (netlvl == -5){
		winCondition = 7;
	} else if (netlvl == -6){
		winCondition = 4;
	} else if (netlvl <= -7){
		winCondition = 2
	} 
	if (petRoll <= winCondition){
		result = 'You win!!! +' + wagerNum + ' points!'
		pointsNum += 2 * wagerNum
	} else {
		result = 'You lost ' + wagerNum + ' points :('
		pointsNum -= wagerNum
	}
	
	report = stat + ' ' + statLevel + ' vs. challenge level ' + chglvl + '<br> You need to roll ' + winCondition + ' or less... you rolled a ' + petRoll + '<br>' + result + '<br>';
	return report
}

function explore(){
	var text = '';
	var doneList = ['tame', 'easy challenge']; // for testing purposes
	var topList = ['tame', 'hunt', 'hazard', 'nomad', 'flavor', 'flavor', 'flavor', 'flavor', 'flavor', 'flavor', 'flavor', 'resource', 'resource', 'resource', 'easy challenge', 'medium challenge', 'double challenge', 'hard challenge', 'hard challenge', 'evidence'];
	cat = randomPick(doneList);
	if (pointsNum <= 0 ){
		var text = 'Game Over!';
	} else {
		stat = randomPick(['spd', 'str', 'int', 'end']);
		if (cat == 'easy challenge'){
			var chalText = cat + ' vs. ' + stat
		} else {
			var chalText = cat;
		}
		var text = 'the challenge is: ' + chalText + '<br>';
	}
	print(text);
}

function commit(){
	var text = 'dang';
	if (cat == 'tame'){
			var tameDice = 2 + wagerNum;
			var tameTotal = 0
			text = 'You rolled ' + tameDice + ' dice and got: '
			for (i = 0; i < tameDice; i++){
				var tameRoll = Math.floor(Math.random() * 10) + 1;
				text += ' ' + tameRoll
				tameTotal += tameRoll;
			}
			text += '<br> Total: ' + tameTotal;
			if (tameTotal >= 20){
				text += '<br>Taming Successful!';
				pointsNum += wagerNum;
			} else { 
				text += '<br>Taming Failed';
			}
			text += '<br>'
	} else if (cat == 'flavor') {
		var flavorList = ['flavor text']
		text = randomPick(flavorList);
	} else if (cat == 'easy challenge') {
		var challengeLevel = Math.floor(Math.random() * 4) + 1;
		chText = challenge(challengeLevel);
		text = 'easy challenge<br> ' + chText;
	} else if (cat == 'medium challenge') {
		var challengeLevel = Math.floor(Math.random() * 4) + 5;
		chText = challenge(challengeLevel);
		text = 'medium challenge<br> ' + chText;
	} else {
		text = 'some other thing';
	}
	wagerNum = 0;
	statOut();
	//text = 'oops';
	print(text);
}
function opposite(number){
	return number<0?Math.abs(number):Number("-"+number);
}
console.log(opposite(-1));
console.log(opposite(30));

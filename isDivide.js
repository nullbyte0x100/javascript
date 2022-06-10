function isDivideBy(number,a,b){
	return number%a==0&&number%b==0?true:false;
}
console.log(isDivideBy(-12,2,6));
console.log(isDivideBy(-12,2,-5));
console.log(isDivideBy(4,1,4));
console.log(isDivideBy(15,-5,4));

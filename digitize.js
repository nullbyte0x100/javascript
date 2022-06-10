function digitize(n){
	//create an array
	var arr=[];
	return n.split('').replaceAll('',' ').join('');


}
console.log(digitize(43567));


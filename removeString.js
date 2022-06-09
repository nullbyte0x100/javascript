function noSpace(x){
	//split the string
	//return x.split(' ').join('');
	return x.replace(/\s/g,'');
}
console.log(noSpace('malesi trevor'));


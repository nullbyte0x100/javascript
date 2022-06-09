function repeatStr(n,s){
	var a=[];
	for (var i=0;i<n;i++){
		a.push(s);
	}
	//convert array to string
	return a.toString().replaceAll(',','');
	
}
console.log(repeatStr(6,'I')); 

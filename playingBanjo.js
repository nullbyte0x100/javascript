function areyouPlayingBanjo(name){
	return name.split('')[0]=='R'?`${name} plays banjo`:name.split('')[0]=='r'?`${name} plays banjo`:`${name} does not play banjo`;
}
console.log(areyouPlayingBanjo('malesi'));

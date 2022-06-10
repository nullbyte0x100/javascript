function getGrade(s1,s2,s3){
	var average=(s1+s2+s3)/3;
	return average>=90 && average<=100?'A':average>=80 && average<90?'B':average>=70 && average<80?'C':average>=60 && average<70?'D':'F';
}
console.log(getGrade(95,90,90));
console.log(getGrade(100,85,96));
console.log(getGrade(92,93,94));

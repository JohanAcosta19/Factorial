function factorial (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorial (n-1); 
}
var n=10
console.log("El factorial es : " + factorial);

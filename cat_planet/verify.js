function num_length(num) {
	var len = 0;
	while(num) {
		num = Math.floor(num / 10);
		len ++;
	}
	return len;
}
function specified_rand(num) {
	return Math.floor(Math.random() * Math.pow(10, num_length(num))) % num;
}
function verify_code() {
	var cases = 4;
	/* switch(specified_rand(cases)) {
	} */
}
// alert(specified_rand(4));

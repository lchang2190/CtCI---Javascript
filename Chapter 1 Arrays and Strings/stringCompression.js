var stringCompression = function(string) {
	var result = '';

	//count all occurences of letter
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		//concat first letter
		if (i === 0) {
			result += string[i];
			count++;
		} else if (string[i] === string[i-1]) { //check to see if its same consecutive letter
			count++;
		} else { //if not, reset count, add first new letter
			result += count.toString();
			count = 1;
			result += string[i];
		}

		//if letter is last, concat the count;
		if (i === string.length - 1) {
			result += count.toString();
		}

	}

	return result;
}

console.log(stringCompression('aabcccccaaa'))
console.log(stringCompression('aaaaaa'))
console.log(stringCompression('aAbBbbbccc'))
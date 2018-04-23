var isSubstring = function(string1, string2) {
	return string1.indexOf(string2) >= 0;
}

var stringRotation = function(string1, string2) {
	var doubleString = string1 += string1;
	return isSubstring(doubleString,string2);
}

console.log(stringRotation('waterbottle', 'erbottlewat'))
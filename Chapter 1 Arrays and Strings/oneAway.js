var oneAway = function(string1, string2) {
	var oneMissing = function(first, second) {
		console.log(first.length, second.length)
		if (first.length !== second.length -1) {

			return false;
		} else {
			var flag = true;
			var pointer1 = 0;
			var pointer2 = 0;
			while (pointer1 < first.length) {
				if (first[pointer1] !== second[pointer2]) {
					if(flag === false) {
						return false;
					} else {
						flag = false;
						pointer1++;
				 	}
				} else {
					pointer1++;
					pointer2++;
				}
			}
		}
	}
	
	oneMissing(string1, string2);

}

console.log(oneAway('pale', 'ple'));

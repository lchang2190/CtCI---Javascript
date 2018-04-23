var zeroMatrix = function(matrix) {
	var addRow = [];
	for (var k = 0; k < matrix[0].length; k++) {
		addRow[k] = 0;
	}

	change = [];

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix.length; j++) {
			if (matrix[i][j] === 0) {
				change.push([i,j]);
			}
		}
	}

	for (var i = 0; i < change.length; i++) {
		matrix.splice(change[i][0],1, addRow);
		var n = 0;
		while(n < matrix.length) {
			matrix[n][change[i][1]] = 0;
			n++;
		}
	}
	console.log(change);
	return matrix;
}

var testMatrix = [
[0, 2, 3, 4],
[1, 0, 2, 3],
[1, 3, 0, 2],
[1, 1, 1, 0]
];

console.log(zeroMatrix(testMatrix))
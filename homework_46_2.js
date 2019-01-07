let firstArray = [1, 5, 12, 4, 3]
let secondArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let thirdArray = [3, 10, 17]

function average(Array) {
	let sum = 0;
	for (let i = 0; i < Array.length; i++) {
		sum += Array[i];
	}
	let avg = sum / Array.length;
	return avg;
}


console.log(average(firstArray))
console.log(average(secondArray))
console.log(average(thirdArray))
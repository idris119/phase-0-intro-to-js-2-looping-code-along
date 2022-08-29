// Code your solutions in this file
function writeCards(names, event) {
	let message = [];
	for (let a = 0; a < names.length; a++) {
		message.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`);
	}
	return message;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "Surprise"));
function countDown(number) {
	while (number >= 0) {
		console.log(number);
		number--;
	}
}
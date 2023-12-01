// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
//is this the correct place to instantiate this variable?
//const copyCats = cats.slice();

function destructivelyAppendCat(name) {
	cats.push(name);
}

function destructivelyPrependCat(name) {
	cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
	cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
	cats.shift(name);
}
function appendCat(name) {
// the function can have the same name as an array used within that function?
	const appendCat = [...cats, name];
	return (appendCat);
}
function prependCat(name) {

	const prependCat = [name, ...cats];
	return (prependCat);
}
function removeLastCat() {
	const removeLastCat = [...cats];
	removeLastCat.pop();
	return (removeLastCat);
}

function removeFirstCat() {
	const removeFirstCat = [...cats];
	removeFirstCat.shift();
	return (removeFirstCat);
}
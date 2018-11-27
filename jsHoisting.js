console.log('-------EXAMPLE-ONE--------');
console.log(hello);
var hello = 'world';
console.log(hello);

console.log('-------EXAMPLE-TWO--------');
var needle = 'haystack';
test();
console.log(needle);
function test(){
	var needle = 'magnet';
	console.log(needle);
}

console.log('------EXAMPLE-THREE-------');
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
print();

console.log('-------EXAMPLE-FOUR-------');
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
  	console.log(food);
}

console.log('-------EXAMPLE-FIVE-------');
console.log(mean + ' 1')
console.log(food + ' 2');
var mean = function() {
	food = "chicken";
	console.log(food + ' 3');
	var food = "fish";
	console.log(food + ' 4');
    return food;
}
console.log(mean + ' 5');
console.log(food + ' 6');

console.log('-------EXAMPLE-SIX--------');
console.log(genre + ' 1');
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre + ' 2');
	var genre = "r&b";
	console.log(genre + ' 3');
}
console.log(genre + ' 4');


console.log('------EXAMPLE-SEVEN------');
dojo = "san jose";
console.log(dojo + ' 1');
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo + ' 2');
	var dojo = "burbank";
	console.log(dojo + ' 3');
}
console.log(dojo + ' 4');

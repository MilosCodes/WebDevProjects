var count = 1;
var outputArray = [];

function fizzBuzz() {
    while(count <= 100) {
if (count % 3 === 0 && count % 5 === 0) {
    outputArray.push("FizzBuzz");
} else if (count % 3 === 0) {
    outputArray.push("Fizz");
} else if (count % 5 === 0) {
    outputArray.push("Buzz");
} else {
    outputArray.push(count);
}
count ++
}
console.log(outputArray);
}

fizzBuzz()

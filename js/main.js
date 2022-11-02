let j = 0;
const square = document.getElementById ("square");

for (let i = 0; i < 100; i++) {

    j = i + 1;

    let valore = '';

    if ((j % 3 == 0) && (j % 5 == 0)) {
        console.log("FizzBuzz");
        square.innerHTML += `<div class="my-col bg-danger">FizzBuzz</div>`;
    } else if (j % 3 == 0) {
        console.log("Fizz");
        square.innerHTML += `<div class="my-col bg-success">Fizz</div>`;
    } else if (j % 5 == 0) {
        console.log("Buzz");
        square.innerHTML += `<div class="my-col bg-warning">Buzz</div>`;
    } else {
        console.log(j);
        valore = j;
        square.innerHTML += `<div class="my-col">${valore}</div>`;
    }
}

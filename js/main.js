let j = 0;
const square = document.getElementById ("square");

for (let i = 0; i < 100; i++) {

    j = i + 1;

    let valore = '';

    if ((j % 3 == 0) && (j % 5 == 0)) {
        console.log("FizzBuzz");
        valore = `FizzBuzz`;
    } else if (j % 3 == 0) {
        console.log("Fizz");
        valore = `Fizz`;
    } else if (j % 5 == 0) {
        console.log("Buzz");
        valore = `Buzz`;
    } else {
        console.log(j);
        valore = j;
    }

    square.innerHTML += `<div class="col my-col">${valore}</div>`;
}

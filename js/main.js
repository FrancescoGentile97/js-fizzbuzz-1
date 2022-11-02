let j = 0;

for (let i = 0; i < 100; i++) {

    j = i + 1;

    if ((j % 3 == 0) && (j % 5 == 0)) {
        console.log("FizzBuzz");
        square.innerHTML += `FizzBuzz`;
    } else if (j % 3 == 0) {
        console.log("Fizz");
        square.innerHTML += `Fizz`;
    } else if (j % 5 == 0) {
        console.log("Buzz");
        square.innerHTML += `Buzz`;
    } else {
        console.log(j);
        square.innerHTML += `${j}`;
    }

    square.innerHTML += `<div class="col my-col"></div>`;
}

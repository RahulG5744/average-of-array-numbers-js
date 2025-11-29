// Program to calculate the average of numbers in an array

function calculateAverage(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
}

const numbers = [20, 35, 15, 50, 40];

const average = calculateAverage(numbers);

console.log("Numbers:", numbers);
console.log("Average:", average);

//Task 1

//Write a function that takes two numbers as arguments and returns an array containing all the
//even numbers between the arguments.If there are no even numbers between the
//arguments the function should return “There are no even numbers”.


function evenFrom(num1, num2) {
    let result = [];

    if (num2 - num1 <= 2) {
        return "There are no even numbers"
    }

    for (num1; num1 < num2; num1++) {
        if (num1 % 2 === 0) {
            result.push(num1);
        }
    }

    return result;
}


//Task 2

//Write a function that takes a number as an argument. Return an array containing the two
//halves of the number.If the number is odd, make the rightmost number higher

function numberSplit(num) {
    let result = [];

    if (num % 2 === 0) {
        result.push(num / 2);
        result.push(num / 2);
    } else {
        result.push(Math.floor(num / 2));
        result.push(num / 2);
    }

    return result;
}


//Task 3

//Write a function that takes an array of numbers as an argument. The function  should
//reverse the array and return it

function getReverse(arr) {
    let result = [];

    for (let i = 0; i < arr.lenhth; i++) {
        result.unshift(arr[i]);
    }

    return result;
}


//Task 4

//Write a function that takes an array as an argument. The function should return true if the
//array includes positive numbers more than negatives, and it should return false otherwise


function isPositive(arr) {
    let countPositive = 0;
    let countNegative = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPositive += 1;
        } else if (arr[i] < 0) {
            countNegative += 1;
        }
    }

    return countPositive > countNegative;
}


//Task 5

//Write a function that takes two sorted arrays of numbers and returns an array of numbers
//which are common to both the input arrays


function getCommonElements(arr1, arr2) {
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && commonElements.includes(arr[i]) === false) {
            commonElements.push(arr[i]);
        }
    }

    return commonElements;
}










// 1. Вывести сумму чисел от 1 до N

let n = 10;
let sumOfNumbers = 0;
for (let i = 1; i <= n; i++) {
    sumOfNumbers += i;
}
console.log(sumOfNumbers);

// 2. Вывести факториал числа N

let n = 5;
let factorialOfNumber = 1;
for (let i = 1; i <= n; i++) {
    factorialOfNumber *= i;
}
console.log(factorialOfNumber);

// 	3. Вывести четные и нечетные числа от 1 до 100

let evenNumbers = "";
let oddNumbers = "";

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers += `${i} `;
        } else {
        oddNumbers += `${i} `;
        }
}
console.log("Even numbers: " + evenNumbers);
console.log("Odd numbers: " + oddNumbers);

//  4. Вывести проверку на простое число

let n = 12;
let isSimple = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        isSimple = false;
        break;
    }
}

if (isSimple) {
    console.log(`${n} - простое число`);
    } else {
    console.log(`${n} - не является простым числом`);
    }

//  5. Вывести таблицу умножения для числа N

let n = 5;
let result = 0;
for (let i = 1; i <= 10; i++) {
    result = n * i;
    console.log (`${i}*${n}`+' = '+(result));
}

//  6. Вывести сумму цифр числа N

let n = 12345;
let sumOfDigits = 0;
let num = n;

while (num !== 0) {
    sumOfDigits += num % 10;
    num = Math.floor(num / 10);
}
console.log(sumOfDigits);

//  7. Обратное число

let n = 123456789;
let reverse = 0;

while (n !== 0) {
    reverse = reverse * 10 + n % 10;
    n = Math.floor(n / 10);
}
console.log(reverse);

//  8. Количество цифр в числе N

let n = 123456789;
let convertNtoString = n.toString();
console.log(convertNtoString.length);

//  9. Проверка палиндрома для числа N

let n = 123454321;
let num = n;
let reverseNum = 0;

while (num !== 0) {
    reverseNum = reverseNum * 10 + num % 10;
    num = Math.floor(num / 10);
}

if (n === reverseNum) {
    console.log(`${n} - число является палиндром`);
    } else {
    console.log(`${n} - число не является палиндромом`);
    }

//  10. Сумма квадратов чисел от 1 до N

let n = 10;
let sumOfSquares = 0;

for (let i = 1; i <= n; i++) {
    sumOfSquares += i * i;
}
console.log(sumOfSquares);
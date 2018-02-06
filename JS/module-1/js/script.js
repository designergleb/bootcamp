'use strict';

/*
var a = 5;
var b = 10;

var c = a + b;

//alert(c);

console.log('var c',c);
console.log('var a', a);
console.log('var b', b);

var cat = {
    name: 'cat',
    age: 2,
};

console.log(cat);

// var request = prompt('Enter your age', '5');
// console.log(request);

var conf = confirm('Самец?');
console.log(conf);*/

/*
var a = 128;
var b = 5;

var c = a % b;

console.log(c);


var x = '5';
var y = 5;
var res2 = +x === y;
console.log(res2);
var z = x + y;
console.log(z);

var str = 'hello';
var str2 = 'world';
var str3 = '!';

var sentense = str + ',' + ' ' + str2 + str3;
console.log(sentense);*/

/*
//task 1
var num = 3;
alert(num);

//task 2
var a = 10;
var b = 2;

var task2 = {
    sum: a + b,
    dif: a - b,
    mult: a * b,
    div: a / b
};

console.log(task2);

//task3
var c = 15;
var d = 2;

var result = c + d;
console.log(result);

//task6
var name = prompt();
alert('Your name is ' + name);

//task7
var value = prompt('Enter a number', 'from 1 to 100');
var squire = value * value;
console.log(squire);
*/


// //task8
// var sec = 1;
// var min = sec * 60;
// var h = min * 60;
// var day = h * 24;
// var month = day * 30;
//
// var seconds = {
//     sec: sec,
//     min: min,
//     hours: h,
//     day: day,
//     month: month
// };
//
// console.log(seconds);
//
// //task10
// var a = 10;
// var b = a * a;
//
// console.log(b);
//
// //task11
// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);
//
// //task25
// var firstName = prompt('Enter your first name');
// var lastName = prompt ('Enter your last name');
// var age = prompt('Enter your age');
//
// console.log('My name ' + firstName + ' my last name is ' + lastName + ' and my age is ' + age + ' year.');


// let word = 'Hello';
// let word2 = 'world';
// let word3 = '!';
// let space = ' ';
//
// console.log(word + ' ' + word2 + ' ' + word3);
// console.log(`${word} ${word2} ${word3}`);
// console.log(word.concat(space,word2, word3));
//
// // console.log(text.startsWith('Lorem'));
// // console.log(text.endsWith('Lorem'));
// console.log(word.includes('H'));
// console.log(word.indexOf('l'));
// console.log(word.repeat(5));


// //task16
// let str = 'abcde';
// console.log(str.charAt(0));
// console.log(str.charAt(2));
// console.log(str.charAt(4));

//task17
let num = '12345';

let num1 = +num.charAt(0);
let num2 = +num.charAt(1);
let num3 = +num.charAt(2);
let num4 = +num.charAt(3);
let num5 = +num.charAt(4);

let num6 = {
    sum: num1+num2+num3+num4+num5,
    minus: num1-num2-num3-num4-num5,
    div: num1/num2/num3/num4/num5,
    mult: num1*num2*num3*num4*num5,
};

console.log(num6);

//task18
let str1 = 'js';
console.log(str1.toUpperCase());

//task19
let str2 = 'JS';
console.log(str2.toLowerCase());

//task20
let str3 = 'I\'m learning javascrip';
console.log(str3.length);

//task21
let str4 = 'I\'m learning javascrip';
let word1 = str3.substring(3);
let word2 = str3.substr(3);
console.log(word1, word2);

//tast22
let str5 = 'I\'m learning javascrip';
console.log(str5.indexOf('I\'m'));

//task23
let str6 = 'I\'m learning javascrip';
console.log(str6.split('_'));

//task27
let str27_1 = 'a',
    str27_2 = 'b',
    str27_3 = 'c',
    str27_4 = ' ';

let str27_5 = str27_1.concat(str27_2 + str27_3);
console.log(str27_5);

//task28
let str28 = 'Hello world, welcome to the universe';
console.log(str28.endsWith('universe'));

//task29
let str29 = 'I\'m learning javascrip';
console.log(str29.includes('I\'m'));
console.log(str29.includes('CSS'));


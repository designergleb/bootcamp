// for (i = 1; i <= 10; i++) {
//     if (i % 3 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// let counter = 0;
//
// for (let i = 0; i < 100; i++) {
//     let b = Math.floor((Math.random()*10) + 1);
//     console.log(b);
//     i = i + b - 1;
// }

// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolore enim, fugit, harum incidunt molestiae, optio quae qui sit tempora totam unde! Alias assumenda odio recusandae reprehenderit velit vero.';
//
// let n = text.split('');
// let sum = n.length;
//
// for (let i = 0; i < sum; i++) {
//     console.log(n[i]);
// }
//
// console.log(sum);

// let arr = [];
// let sum = 0;
//
// for (let i = 1; i <= 100; i++) {
//     arr.push(i);
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(sum += i);
// }
//
// console.log('Sum = ', sum);

// const outerString = "You can see me inside and outside.";
//
// function showMessage() {
//     const innerString = "You can see me inside";
//     console.log(outerString);
//     console.log(innerString);
//     //console.log(thirdString);
//     function show() {
//         const thirdString = "I'm here";
//         console.log('show text', outerString);
//         console.log('show text', innerString);
//         console.log('show text', thirdString);
//     }
//     show();
// }
//
// showMessage();

// function add(a = 5, b = 10) {
//     return a + b;
// }
//
// let res1 = add();
// let res2 = add(100, 200);
//
// console.log(res1);
// console.log(res2);

// console.log(add(5, 10));
//
// function add(a ,b) {
//     return a + b;
// }
//
// let a = function (a, b) {
//     return a + b;
// }

// function add(a, b) {
//     console.log(arguments);
//     let arr = Array.from(arguments);
//     console.log(arr);
//     return a + b;
// }
//
// add(2,3,5,4);

// const add2 = (x, y) => {
//     return x + y;
// };
//
// const add3 = (x, y) => x + y;
//
// console.log(add(5, 6));
// console.log(add2(10, 12));
// console.log(add3(100, 200));

// let arr = [0, 2, 4];
// let arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] + 2);
// }
//
// console.log(arr2);

let arr = [0, 2, 4];
let arr2 = arr.map( function (item) {
    return item + 2;
});
console.log(arr2);

let arr3 = arr.map(item => item + 3);
console.log(arr3);
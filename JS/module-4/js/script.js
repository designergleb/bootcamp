// let sayName = function () {
//     console.log(`My name is ${this.name}`);
// };
//
// let cat = {
//     name: 'Cat',
// };
//
// let dog = {
//     nemt: 'Dog',
// };
//
// let pig = {
//     name: 'Pig',
// };
//
// sayMame


//apply
//
// let sayName = function (lang1, lang2, lang3) {
//     console.log(`My name is ${this.name} I know ${lang1}, ${lang2}, ${lang3}`)
// };
//
// let lang = ['HTML', 'JS', 'CSS', 'Node.js', 'React.js'];
//
// let dog = {
//     name: 'Jack',
// };
//
// let cat = {
//     name: 'Spark',
// };
//
// sayName.call(dog, lang[0], lang[1], lang[2], lang[3], lang[4])
// sayName.apply(cat, lang);


//bind
//
// const hotel = {
//     name: `Resort`,
//     hello: function (a) {
//         return `${a}, Wellcome in ${this.name} hotel!`;
//     }
// };
// const casino = {
//     name: `Royal`,
// };
//
// console.log(hotel.hello('Homer'));
//
// const hi = hotel.hello.bind(casino);
// console.log(hi('Homer'));

// let arr = [];
// let obj = {};
// let arr2 = new Array();
// let obj2 = new Object();

// let Car = function (speed, color) {
//     this.speed = speed;
//     this.color = color;
// };
//
// let bmw = new Car(200, 'black');
// let zaper = new Car(50, 'blue');
//
// console.log(bmw);
// console.log(zaper);
// console.log({name: 'jack', age: '22'});


// const ua = 'йцукенгшщзхїфівапролджєячсмитьбю';
// const en = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.';
// const ru = 'йцукенгшщзхъфывапролджэячсмитьбю';
//
// const keyboard = {
//     layouts: {
//         en: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ru: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ua: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         }
//     },
//     langs: ['en', 'ru', 'ua'],
//     currentLang: '',
//     createLayout: function (letters, lang) {
//         let firstRow = letters.slice(0, 13).split('');
//         let secondRow = letters.slice(13, 23).split('');
//         let thirdRow = letters.slice(23).split('');
//
//         keyboard.layouts[lang].topRow =  firstRow;
//         keyboard.layouts[lang].middleRow =  secondRow;
//         keyboard.layouts[lang].bottomRow = thirdRow;
//     },
//     chooseLang: function () {
//         let choose = prompt('Enter number for lang. EN - 0, RU - 1, UA - 2');
//         if (choose === '0') {
//             keyboard.currentLang = 'en';
//         } else if (choose === '1') {
//             keyboard.currentLang = 'ru';
//         } else if (choose === '2') {
//             keyboard.currentLang = 'ua';
//         } else if (choose === null) {
//             return;
//         } else {
//             alert('Incorrect data. Use 0 for EN, 1 for RU and 2 for UA');
//             keyboard.chooseLang();
//         }
//     },
//     getRandCharInAlph: function () {
//         let finalResult = [];
//         let alphabet = keyboard.layouts[keyboard.currentLang];
//         for (let key in alphabet) {
//             finalResult = finalResult.concat(alphabet[key]);
//         }
//         return finalResult[Math.floor(Math.random() * finalResult.length)];
//     }
//
// };
//
// keyboard.createLayout(ua, 'ua');
// keyboard.createLayout(ru, 'ru');
// keyboard.createLayout(en, 'en');
// keyboard.chooseLang();
// console.log(keyboard.getRandCharInAlph());

// const ua = 'йцукенгшщзхїфівапролджєячсмитьбю';
// const en = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.';
// const ru = 'йцукенгшщзхъфывапролджэячсмитьбю';
//
// const keyboard = {
//     layouts: {
//         en: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ru: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ua: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         }
//     },
//     langs: ['en', 'ru', 'ua'],
//     currentLang: '',
//     createLayout: function (letters, lang) {
//         let firstRow = letters.slice(0, 13).split('');
//         let secondRow = letters.slice(13, 23).split('');
//         let thirdRow = letters.slice(23).split('');
//
//         this.layouts[lang].topRow =  firstRow;
//         this.layouts[lang].middleRow =  secondRow;
//         this.layouts[lang].bottomRow = thirdRow;
//     },
//     chooseLang: function () {
//         let choose = prompt('Enter number for lang. EN - 0, RU - 1, UA - 2');
//         if (choose === '0') {
//             this.currentLang = 'en';
//         } else if (choose === '1') {
//             this.currentLang = 'ru';
//         } else if (choose === '2') {
//             this.currentLang = 'ua';
//         } else if (choose === null) {
//             return;
//         } else {
//             alert('Incorrect data. Use 0 for EN, 1 for RU and 2 for UA');
//             this.chooseLang();
//         }
//     },
//     getRandCharInAlph: function () {
//         let finalResult = [];
//         let alphabet = this.layouts[this.currentLang];
//         for (let key in alphabet) {
//             finalResult = finalResult.concat(alphabet[key]);
//         }
//         return finalResult[Math.floor(Math.random() * finalResult.length)];
//     }
//
// };
//
// keyboard.createLayout(ua, 'ua');
// keyboard.createLayout(ru, 'ru');
// keyboard.createLayout(en, 'en');
// keyboard.chooseLang();
// console.log(keyboard.getRandCharInAlph());

const keyTrainer = {};
keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

keyTrainer.charCount = '';

keyTrainer.checkPositiveInteger = function (num) {
    if (num > 0 && Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
};

keyTrainer.setCharCount = function () {
    let charAmount = +prompt('Enter amount');
    if (keyTrainer.checkPositiveInteger(charAmount)) {
        keyTrainer.charCount = charAmount;
    } else {
        keyTrainer.setCharCount();
    }
};

keyTrainer.task = [];
keyTrainer.setTask = function () {
    for (let i = 0; i < keyTrainer.charCount; i++) {
        // keyTrainer.task.push(keyTrainer.chars[Math.floor(Math.random() * keyTrainer.chars.length)]);
        let randomIndex = Math.floor(Math.random() * keyTrainer.chars.length);
        let randomLetter = keyTrainer.chars[randomIndex];
        keyTrainer.task.push(randomLetter);
    }
};

keyTrainer.startTask = function () {
    let string = keyTrainer.task.join('');
    let userInput = prompt(`Enter this string ${string}`).split('');
    if ()
};

keyTrainer.setCharCount();
keyTrainer.setTask();
keyTrainer.startTask();
console.log(keyTrainer);
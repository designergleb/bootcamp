let a = ["https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg",
        "http://kb4images.com/images/picture/37509081-picture.jpg",
        "http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg",
        "http://cdn.newsapi.com.au/image/v1/9fdbf585d17c95f7a31ccacdb6466af9"];

let container = document.querySelector('.box');
console.log(container);

let str = "";
for (let i = 0; i < a.length; i++) {
    str += `<img src=${a[i]} class="picture">`
}

container.innerHTML = str;

let container2 = document.querySelector('.box2');
let str2 = "";
for (let i = 0; i < a.length; i++) {
    str2 += `<img src=${a[i]} class="picture">`
}

container2.innerHTML = str2;
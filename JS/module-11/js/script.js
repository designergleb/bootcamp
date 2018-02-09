$('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        //     alert("Ready");
        //     console.log(modal, trigger);
        // },
        //complete: function() { alert('Closed'); } // Callback for Modal close
    }
);

// objects
let input = document.createElement('input');
let btn = document.createElement('button');
let cloud = document.createElement('i');
let gallery = document.createElement('div');
let bag = document.createDocumentFragment();

//classes
btn.classList.add('waves-effect', 'waves-light', 'btn');
gallery.classList.add('gallery');
btn.textContent = 'BUTTON';
cloud.classList.add('material-icons', 'left');
cloud.textContent = 'cloud';

//choose element by class selector
let container = document.querySelector('.container');

//rec
let endPoint = '';
let target = '';
const apiKey = '7986315-a6d4826b51775f34bbbade86c';
const images = document.getElementById('images');
const video = document.getElementById('video');

// const value = function () {
//     return input.value;
// };

function show() {
    //putting in
    container.append(input);
    container.append(btn);
    btn.append(cloud);
    container.append(gallery);
}

function request(q) {
    fetch(endPoint + apiKey + `&q=${q}&per_page=50&`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let string = '';
            for (let i = 0; i < data.hits.length; i++) {
                if (target === 'images') {
                    string += `<img src="${data.hits[i].webformatURL}">`;
                } else if (target === 'videos') {
                    string += `<video controls="controls"><source src="${data.hits[i].videos.tiny.url}"></video>`;
                }
            }
            gallery.innerHTML = string;
        })
}

images.addEventListener('click', function() {
    show();
    endPoint = 'https://pixabay.com/api/?key=';
    target = 'images';
    $('#modal1').modal('close');
});

video.addEventListener('click', function() {
    show();
    endPoint = 'https://pixabay.com/api/videos/?key=';
    target = 'videos';
    $('#modal1').modal('close');
});

btn.addEventListener('click', function() {
    request(input.value);
    console.log(input.value);
});


//
// fetch (endPoint + apiKey + question())
//     .then(function(response) {
//         //console.log(response);
//         return response.json();
//     })
//
//     .then(function(data) {
//         //console.log(data);
//         // let img = document.createElement('img');
//         // img.setAttribute('src', data.hits[0].webformatURL);
//         // gallery.append(img);
//         let string = '';
//         for (let i = 0; i < data.hits.length; i++) {
//             // let img = document.createElement('img');
//             // img.setAttribute('src', data.hits[i].webformatURL);
//             // gallery.append(img);
//             string += `<img class="gallery__item" src="${data.hits[i].webformatURL}">`;
//         }
//         gallery.innerHTML = string;
//     });
//

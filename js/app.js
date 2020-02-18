import "../sass/style.scss";

function listBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => data.message);
}

function getRandomImage() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => data.message);
}

function getRandomImageByBreed(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then(data => data.message);
}

const imgTag = document.querySelector("img");

// getRandomImage().then(img => imgTag.setAttribute("src", img));

getRandomImageByBreed('boxer')
    .then(imgSrc => imgTag.setAttribute('src', imgSrc) )

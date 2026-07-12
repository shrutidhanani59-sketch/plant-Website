const imges = ["main.webp", "mainImg2.avif", "mainImg3.webp", "mainImg4.jpg", "mainImg5.avif"];

let index = 0;
document.querySelector(".right").onclick = function () {
    index++;
    if (index >= imges.length) {
        index = 0;
    }
    document.querySelector('img').src = `${imges[index]}`


};


document.querySelector(".left").onclick = function () {
    index--;

    document.querySelector('img').src = `${imges[index]}`

    if (index < 0) {
        index = imges.length-1;
    }
    document.querySelector('img').src = imges[index]

};

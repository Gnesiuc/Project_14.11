// создаем переменные и подключаем их при помощи querySelector к диву

const slideContainer = document.querySelector(".slide_content")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttons-container")

// создаем переменную и загружаем фото
const btnScr = [
    'img/Html_icon.png',
    'img/CSS_icon.png',
    'img/Js_icon.png',
]


// запускаем цикл forEach для того чтобы пройти через переменную btncsr
// btnScr.forEach(element => {
//     console.log(element);
// })


// мы выводим картинки на экран и запускаем цикл для этого + создаем класс img
btnScr.forEach(element => {
    const img = document.createElement("img");
    console.log(img);
    img.className = "btn";
    img.src = element;
    buttonsContainer.append(img);
})



const footerDecoration = document.createElement("div")
footerDecoration.className = "footer_const_decoration";
container.append(footerDecoration)




const containerSrc = [
    'img/iconHTML.png',
    'img/iconCSS.png',
    'img/iconJS.png',

]




containerSrc.forEach(element => {
    const divContainer = document.createElement("div");
    const img = document.createElement("img");
    img.className = "img";
    img.src = element;
    const longLine = document.createElement("div")
    longLine.className = "text_decoration long-line";

    const shortLine = document.createElement("div")
    shortLine.className = "text_decoration short-line";

    const longLine1 = document.createElement("div")
    longLine1.className = "text_decoration long-line";

    const footerContBar = document.createElement("div")
    footerContBar.className = "footer_cont_bar";

    divContainer.append(img, longLine, shortLine, longLine1, footerContBar)
    slideContainer.append(divContainer)
})
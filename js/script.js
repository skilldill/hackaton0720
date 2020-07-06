const aboutBlock = document.getElementById('about');

const consoleContent = document.getElementById('console-content');
const btnGotoCases = document.getElementById('btn-goto-cases');


const consoleText = ' Привет, ты попал на страницу \n' + 
    'хакатона, который устроили обычные ребята заручившись поддержкой \n' + 
    'Тюменской школы программирования. Участие в хакатоне - отличная \n' +
    'возможность прокачать свои скиллы, улучшить навыки работы в команде \n' + 
    'и просто найти единомышленников. Мы подобрали для тебя \n' + 
    'вкусные кейсы, а спонсоры хакатона посчитали что будет \n' + 
    'не хорошо оставлять победителя без заслуженного приза. \n' + 
    '👇 👇 👇 Жмякай на кнопку ниже и переходи к кейсам...';

let consoleTextRendered = false;

function renderTextLetters(text) {
    consoleTextRendered = true;

    for (let i = 0; i < text.length; i++) {
        const promise = new Promise((res) => {
            setTimeout(() => res(text[i]), 50 * i);
        })

        promise.then((char) => {
            const prevText = consoleContent.innerText;
            const prepareText = prevText + char;
            consoleContent.innerHTML = prepareText;

            if (i === text.length - 1) {
                btnGotoCases.style.display = "block";
            }
        });
    }
}

function handleScrollPage() {
    if (window.pageYOffset >= 700 && !consoleTextRendered) {
        renderTextLetters(consoleText);
    } 
}

function init() {
    btnGotoCases.style.display = "none";

    window.addEventListener('scroll', handleScrollPage);
}

// INITIAL
init();

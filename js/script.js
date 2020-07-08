const aboutBlock = document.getElementById('about');

const consoleContent = document.getElementById('console-content');
const btnGotoCases = document.getElementById('btn-goto-cases');
const casesItems = document.getElementsByClassName('case-item');
const giftsCodes = document.getElementsByClassName('gift-code');

const consoleText = ' Привет, ты попал на страницу \n' + 
    'хакатона, который устроили обычные ребята заручившись поддержкой \n' + 
    'Тюменской школы программирования. Участие в хакатоне - отличная \n' +
    'возможность прокачать свои скиллы, улучшить навыки работы в команде \n' + 
    'и просто найти единомышленников 🐰 🦊 🐻. Мы подобрали для тебя \n' + 
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

function handleHoverCaseItem(event) {
    const target = event.currentTarget;
    const arrow = target.querySelector('.case-arrow');
    arrow.classList.add('case-arrow-show');
}

function handleLeaveCaseItem(event) {
    const target = event.currentTarget;
    const arrow = target.querySelector('.case-arrow');
    arrow.classList.remove('case-arrow-show');
}

function addMouseEventCases() {
    for (let i = 0; i < casesItems.length; i++) {
        const caseItem = casesItems[i];
        caseItem.addEventListener('mousemove', handleHoverCaseItem);
        caseItem.addEventListener('mouseleave', handleLeaveCaseItem);
    }
}

function handleHoverGiftCode(event) {
    const target = event.currentTarget;
    const des = target.querySelector('.description');
    des.classList.add('description-show');
}

function handleLeaveGiftCode(event) {
    const target = event.currentTarget;
    const des = target.querySelector('.description');
    des.classList.remove('description-show');
}

function addMouseEventGiftCode() {
    for (let i = 0; i < giftsCodes.length; i++) {
        const giftCode = giftsCodes[i];
        giftCode.addEventListener('mousemove', handleHoverGiftCode);
        giftCode.addEventListener('mouseleave', handleLeaveGiftCode);
    }
}

function init() {
    btnGotoCases.style.display = "none";
    addMouseEventCases();
    addMouseEventGiftCode();
    window.addEventListener('scroll', handleScrollPage);
}

// INITIAL
init();

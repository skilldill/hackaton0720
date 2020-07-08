const headerBlock = document.getElementById('header');
const aboutBlock = document.getElementById('about');
const casesBlock = document.getElementById('cases');
const giftsBlock = document.getElementById('gifts');

const consoleContent = document.getElementById('console-content');
const btnGotoCases = document.getElementById('btn-goto-cases');
const casesItems = document.getElementsByClassName('case-item');
const giftsCodes = document.getElementsByClassName('gift-code');
const menuItems = headerBlock.querySelectorAll('.menu-item a');

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

function handleClickMenuItem(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const href = target.getAttribute('href');
    const block = document.querySelector(href);
    window.scrollTo({
        top: block.offsetTop,
        behavior: "smooth"
    });
}

function handleHoverMenuItem(event) {
    const target = event.currentTarget;
    const arrow = target.querySelector('span');
    arrow.classList.add('arrow-show');
}

function handleLeaveMenuItem(event) {
    const target = event.currentTarget;
    const arrow = target.querySelector('span');
    arrow.classList.remove('arrow-show');
}

function addMouseEventMenuItems() {
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        item.addEventListener('mouseenter', handleHoverMenuItem);
        item.addEventListener('mouseleave', handleLeaveMenuItem);
        item.addEventListener('click', handleClickMenuItem);
    }
}

function handleClickBtnGoToCase() {
    window.scrollTo({
        top: casesBlock.offsetTop,
        behavior: "smooth"
    });
}

function init() {
    btnGotoCases.style.display = "none";
    
    addMouseEventCases();
    addMouseEventGiftCode();
    addMouseEventMenuItems();
    btnGotoCases.addEventListener('click', handleClickBtnGoToCase);

    window.addEventListener('scroll', handleScrollPage);
    
    document.title === 'Х А К А Т 0 Н'
    //INTERVAL FOR TITLE
    setInterval(() => { 
        if (document.title === 'Х А К А Т 0 Н') {
            document.title = 'H @ C K @ T O N'
        } 

        if (document.title === 'H @ C K @ T O N') {
            document.title = 'H ☠️ C K ☠️ T O N';
        }

        if (document.title === 'H ☠️ C K ☠️ T O N') {
            document.title = 'Х 👾 К 👾 Т 🤖 Н';
        }

        if (document.title === 'Х 👾 К 👾 Т 🤖 Н') {
            document.title = 'ハッカソン';
        }

        if (document.title === 'ハッカソン') {
            document.title = 'Х А К А Т 0 Н';
        }
    }, 3000);
}

// INITIAL
init();

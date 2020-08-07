const desktop = document.getElementById('desktop');
const mobile = document.getElementById('mobile');

const headerBlock = document.getElementById('header');
const aboutBlock = document.getElementById('about');
const casesBlock = document.getElementById('cases');
const giftsBlock = document.getElementById('gifts');
const endpointsBlock = document.getElementById('endpoints');

const consoleContent = document.getElementById('console-content');
const casesItems = document.getElementsByClassName('case-item');
const giftsCodes = document.getElementsByClassName('gift-code');
const menuItems = headerBlock.querySelectorAll('.menu-item a');
const endpointsConsole = endpointsBlock.querySelector('#console-endpoints');
const endpointsForm = endpointsBlock.querySelector('#console-endpoints-form');
const endpointsLogs = endpointsBlock.querySelector('#logs');
const endpointsConsoleForm = endpointsBlock.querySelector('.console-form');
const trackSecurityPicture = casesBlock.querySelector('#track-security-picture');
const endpointsModal = document.getElementById('endpoints-body');
const endpointsModalBody = endpointsModal.querySelector('.endpoints-modal-body');

const caseOpeners = casesBlock.querySelectorAll('.case-opener');

function bindClickCasesBlock() {

    for (let i = 0; i < caseOpeners.length; i++) {
        const opener = caseOpeners[i];

        opener.addEventListener('click', () => {
            const idTarget = opener.getAttribute('data-case');
            const caseContent = casesBlock.querySelector(`[data-case-content="${idTarget}"]`);
            const opened = caseContent.getAttribute('data-opened') === "1";

            if (opened) {
                caseContent.style.display = 'none';
                caseContent.setAttribute('data-opened', '0');
                opener.innerText = opener.innerText.replace('V', '>');
            } else {
                caseContent.style.display = 'block';
                caseContent.setAttribute('data-opened', '1');
                opener.innerText = opener.innerText.replace('>', 'V');
            }
        })
    }
}

const consoleText = ' Привет, ты попал на страницу \n' + 
    'хакатона, который устроили обычные ребята, заручившись поддержкой \n' + 
    'Тюменской школы программирования. Участие в хакатоне - отличная \n' +
    'возможность прокачать свои скиллы, улучшить навыки работы в команде \n' + 
    'и просто найти единомышленников 🐰 🦊 🐻. Мы подобрали для тебя \n' + 
    'вкусные кейсы, а спонсоры хакатона посчитали, что будет \n' + 
    'нехорошо оставлять победителя без заслуженного приза.';

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
        });
    }
}

const endpointsCommandResult = `
    <div class="endpoints-map">
        <p> > > > START 12:00 < < <</p>
        <p>| 07.08.2020</p>
        <p>+ --- 12:00 – приветствие, знакомство с командами и экспертами</p>
        <p>|</p>
        <p>+ --- 12:30 – выдача кейсов</p>
        <p>|</p>
        <p>+ --- 13:30 – фиксирование кейсов за командами</p>
        <p>|</p>
        <p>+ --- 13:45 – самостоятельная работа</p>
        <p>|</p>
        <p>| 08.08.2020</p>
        <p>|</p>
        <p>+ --- 12:00 – промежуточный чек-поинт</p>
        <p>|</p>
        <p>+ --- 18:00 – промежуточный чек-поинт</p>
        <p>|</p>
        <p>| 09.08.2020</p>
        <p>|</p>
        <p>+ --- 9:00 – экспресс-интервью с работодателями по 5 минут на человека</p>
        <p>|</p>
        <p>+ --- 10:00 – сбор материалов от команд</p>
        <p>|</p>
        <p>+ --- 10:30 – защита проектов</p>
        <p>|</p>
        <p>+ --- 11:30 – награждение команд</p>
        <p> > > > END < < <</p>
    </div>
`

const it2gContent = `
<pre>
     __   ________    _____     _____
    |__| |        |  /  _  \\   /  __ \\
     __  |__    __| |__/ \\  | |  |  |_|
    |  |    |  |         / /  |  | ___  
    |  |    |  |        / /   |  ||_  |
    |  |    |  |       / /    |  |  | |
    |  |    |  |      / /____ |  |__| |
    |__|    |__|     |_______| \\______/
</pre>
`

const hackerVideoContent = `
    <iframe width="400" height="200" src="https://www.youtube.com/embed/xb8G8qA9ibI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`

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

endpointsConsole.addEventListener('click', () => endpointsForm['command'].focus());

endpointsModal.addEventListener('click', () => { endpointsModal.style.display = 'none' });
endpointsModalBody.addEventListener('click', (event) => event.stopPropagation());


endpointsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const command = endpointsForm['command'].value;
    endpointsForm['command'].setAttribute('data-prevcommand', command);

    if (!!command.length) {
        switch(command) {
            case 'clear':
                endpointsLogs.innerHTML = '';
                endpointsForm['command'].value = '';
                break;
            
            case 'time':
                endpointsLogs.innerHTML += `<p>Online-Hackaton: TIME TO START: ${consoleTime}</p>`;
                endpointsForm['command'].value = '';
                break;

            case 'it2g':
                endpointsLogs.innerHTML = it2gContent;
                endpointsForm['command'].value = '';
                break;

            case 'happy hack':
                endpointsLogs.innerHTML = hackerVideoContent;
                endpointsForm['command'].value = '';
                break;

            case 'help':    
            case '-help':
            case '--help':
                endpointsLogs.innerHTML = `
                    <p>COMMANDS:</p>
                    <p>endpoints</p>
                    <p>time</p>
                    <p>clear</p>
                `;
                endpointsForm['command'].value = '';
                break;

            case 'endpoints':
                endpointsConsoleForm.style.display = "none";
                endpointsLogs.innerHTML = '';
                endpointsForm['command'].value = '';

                let interval;
                let timer;

                const p = new Promise((resolve) => {
                    let loadRow = '<p>LOADING...</P>';
                    interval = setInterval(() => {
                        loadRow += '=';
                        endpointsLogs.innerHTML = loadRow + '>'
                    }, 60);

                    timer = setTimeout(() => {
                        resolve()
                    }, 4000);
                })
                p.then(() => {
                    clearInterval(interval);
                    clearTimeout(timer);
                    endpointsConsoleForm.style.display = "flex";
                    endpointsModal.style.display = "flex";
                    endpointsLogs.innerHTML = "";
                    endpointsForm['command'].focus();
                });
                break;
    
            default:
                endpointsLogs.innerHTML += `<p>Online-Hackaton: command '${command}' not found, use command 'help'</p>`;
                endpointsForm['command'].value = '';
                break;
        }
    }
})

endpointsForm['command'].addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        const prevcommand = endpointsForm['command'].getAttribute('data-prevcommand');
        !!prevcommand && (endpointsForm['command'].value = prevcommand);
    }
})

function init() {
    addMouseEventCases();
    addMouseEventGiftCode();
    addMouseEventMenuItems();
    bindClickCasesBlock();

    window.addEventListener('scroll', handleScrollPage);
    
    //INTERVAL FOR TITLE
    document.title === 'Х А К А Т 0 Н'
    setInterval(() => { 
        if (document.title === 'Х А К А Т 0 Н') {
            document.title = 'Х 👾 К 👾 Т 🤖 Н'
        } else {
            document.title = 'Х А К А Т 0 Н'
        }
    }, 3000);

    if (window.innerWidth >= 1050) {
        document.body.removeChild(mobile);
    } else {
        document.body.removeChild(desktop);
    }
}

// INITIAL
init();

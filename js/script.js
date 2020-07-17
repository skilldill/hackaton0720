const headerBlock = document.getElementById('header');
const aboutBlock = document.getElementById('about');
const casesBlock = document.getElementById('cases');
const giftsBlock = document.getElementById('gifts');
const endpointsBlock = document.getElementById('endpoints');

const consoleContent = document.getElementById('console-content');
const btnGotoCases = document.getElementById('btn-goto-cases');
const casesItems = document.getElementsByClassName('case-item');
const giftsCodes = document.getElementsByClassName('gift-code');
const menuItems = headerBlock.querySelectorAll('.menu-item a');
const endpointsConsole = endpointsBlock.querySelector('#console-endpoints');
const endpointsForm = endpointsBlock.querySelector('#console-endpoints-form');
const endpointsLogs = endpointsBlock.querySelector('#logs');
const endpointsConsoleForm = endpointsBlock.querySelector('.console-form');
const trackSecurityPicture = casesBlock.querySelector('#track-security-picture');

const consoleText = ' Привет, ты попал на страницу \n' + 
    'хакатона, который устроили обычные ребята заручившись поддержкой \n' + 
    'Тюменской школы программирования. Участие в хакатоне - отличная \n' +
    'возможность прокачать свои скиллы, улучшить навыки работы в команде \n' + 
    'и просто найти единомышленников 🐰 🦊 🐻. Мы подобрали для тебя \n' + 
    'вкусные кейсы, а спонсоры хакатона посчитали что будет \n' + 
    'не хорошо оставлять победителя без заслуженного приза. \n' + 
    '👇 👇 👇 Жмякай на кнопку ниже и переходи к кейсам...';

const doorlockPictures = `
      _____                                   _____
     / ___ \\                                 / ___ \\
    / /   \\ \\                               / /   \\ \\
 __|_|_____|_|__                         __|_|_____|_|__
|               |                       |               |           
|               |                       |               |
|               |                       |               |
|               |                       |               |
|               |                       |               |
|_______________|         _____         |_______________|
                         / ___ \\
                        / /   \\ \\
                     __|_|_____|_|__
                    |               |
                    |               |
                    |               |
                    |               |
                    |               |
                    |_______________|
`

const doorlockOpenedPictures = `
      _____                                   _____
     / ___ \\                                 / ___ \\
    / /   \\ \\                               / /   \\ \\
   | |     |_|                             | |     |_|
 __|_|__________                         __|_|__________
|               |                       |               |           
|               |                       |               |
|               |                       |               |
|               |                       |               |
|               |                       |               |
|_______________|         _____         |_______________|
                         / ___ \\
                        / /   \\ \\
                       | |     |_|
                     __|_|__________
                    |               |
                    |               |
                    |               |
                    |               |
                    |               |
                    |_______________|
`

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

const endpointsCommandResult = `
    <div class="endpoints-map">
        <p> > > > START 12:00 < < <</p>
        <p>|</p>
        <p>+ --- <a href="#">Первая контрольная точка</a></p>
        <p>|</p>
        <p>+ --- <a href="#">Вторая контрольная точка</a></p>
        <p>|</p>
        <p>+ --- <a href="#">Третья контрольная точка</a></p>
        <p>|</p>
        <p>+ --- <a href="#">CODE FREEZE</a></p>
        <p>|</p>
        <p> > > > END 12:00 < < <</p>
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
                    endpointsLogs.innerHTML = endpointsCommandResult;
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
    btnGotoCases.style.display = "none";
    
    addMouseEventCases();
    addMouseEventGiftCode();
    addMouseEventMenuItems();
    btnGotoCases.addEventListener('click', handleClickBtnGoToCase);

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

    // INTERVAL FOR TRACKS
    trackSecurityPicture.innerText = doorlockPictures;
    setInterval(() => {
        if (trackSecurityPicture.innerText === doorlockPictures) {
            trackSecurityPicture.innerText = doorlockOpenedPictures;
        } else {
            trackSecurityPicture.innerText = doorlockPictures;
        }
    }, 3000)
}

// INITIAL
init();

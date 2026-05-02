const getSavedUser = () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
        const userObj = JSON.parse(userData);
        return userObj.username.toLowerCase().replace(/\s+/g, '');
    }
    return "guest";
};
const userData = localStorage.getItem('userData');
    if (!userData) {
        window.location.href = 'login.html';
}
const userName = getSavedUser();

const terminalInput = document.querySelector('.terminal-input');
const terminalWrapper = document.querySelector('.terminal-wrapper');
const terminalForm = document.querySelector('.terminal-form');

const Commands = ['about', 'clear', 'help', 'history', 'projects', 'socials', 'echo', 'education', 'email', 'gui', 'welcome', 'pwd', 'whoami'];
let commandHistory = [];
let historyIndex = -1;

window.onload = () => {
    const activePrompt = document.querySelector('.terminal-form .prompt');
    if (activePrompt) {
        activePrompt.textContent = `${userName}@waiyannaing-terminal:~$`;
    }
    welcome(terminalWrapper, terminalForm);
};
// Focus to terminal input when user clicks anywhere on the page
document.addEventListener('click', () => {
    terminalInput.focus();
});

terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        autocomplete(terminalInput, Commands);
    }
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex>0){
            historyIndex--;
            terminalInput.textContent = commandHistory[historyIndex];
            const cursor = document.createRange();
            const selection = window.getSelection();
            cursor.selectNodeContents(terminalInput);
            cursor.collapse(false);
            selection.removeAllRanges();
            selection.addRange(cursor);
        }
    }
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.textContent = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            terminalInput.textContent = '';
        }
        const cursor = document.createRange();
        const selection = window.getSelection();
        cursor.selectNodeContents(terminalInput);
        cursor.collapse(false);
        selection.removeAllRanges();
        selection.addRange(cursor);
    }
    if (event.key === 'Enter') {
        event.preventDefault();
        
        const command = terminalInput.textContent.trim().toLocaleLowerCase();
        if (command.length > 0) {
            terminalHistory(command);
            commandsHandler(command);
            console.log(`Command entered: ${command}`);
        }
        terminalInput.textContent = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
    if(event.key === 'Insert'){
        event.preventDefault();
        terminalInput.classList.toggle('terminal-block-cursor');
    }
});

// terminal form history
const terminalHistory = (input) => {
    const terminalHistory = document.createElement('div');
    terminalHistory.className = 'terminal-box';
    terminalHistory.innerHTML = `
    <span class="prompt">${userName}@waiyannaing-terminal:~$</span>
    <span class="command-text">${input}</span>
    `
    const form = document.querySelector('.terminal-form');
    terminalWrapper.insertBefore(terminalHistory, form);
}


const commandsHandler = (input) => {
    const userName = getSavedUser();
    const args = input.trim().split(/\s+/);
    const cmd = args[0].toLowerCase();
    const commandOutput = document.createElement('div');
    commandOutput.className = 'command-output';

    if (input.trim() !== "") {
        commandHistory.push(input.trim());
        historyIndex = commandHistory.length;
    }
    switch(cmd){
        case 'about':
            about(terminalWrapper, terminalForm);
            return;
        case 'education':
            education(terminalWrapper, terminalForm);
            return;
        case 'help':
            help(terminalWrapper, terminalForm);
            return;
        case 'history':
            history(terminalWrapper, terminalForm);
            return;
        case 'clear':
            clearAll();
            return;
        case 'echo':
            echo(input,terminalForm);
            return;
        case 'welcome':
            welcome(terminalWrapper, terminalForm);
            return;
        case 'email':
            email(terminalWrapper, terminalForm);
            return;
        case 'gui':
            gui();
            return;
        case 'projects':
            projects(terminalWrapper, terminalForm);
            return;
        case 'pwd':
            commandOutput.innerText = '/portfolio/waiyannaing';
            break;
        case 'quit':
            quit();
            return;
        case 'socials':
            socials(terminalWrapper, terminalForm);
            return;
        case 'whoami':
            commandOutput.innerText =`${userName}`;
            break;
        default:
            const suggestion = getSuggestedCommand(cmd, Commands);
            
            if (suggestion) {
                commandOutput.innerHTML = `
                    <span >Command not found: ${cmd}.</span> <span >Did you mean: ${suggestion}?</span>
                `;
            } else {
                commandOutput.innerText = `Command not found: ${cmd}.`;
            }
    }
    terminalWrapper.insertBefore(commandOutput, terminalForm);
}

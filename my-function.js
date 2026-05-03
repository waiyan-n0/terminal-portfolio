const about = (wrapper, terminalForm) => {
        const aboutContainer = document.createElement('div');
        aboutContainer.className = 'command-output';
        aboutContainer.innerHTML = `
        <p>${aboutData.intro}</p>
        <p>${aboutData.career}</p>
        <p>${aboutData.text}</p>
        `;
        wrapper.insertBefore(aboutContainer, terminalForm);
}

const education = (wrapper, terminalForm) => {
    const educationContainer = document.createElement('div');
    educationContainer.className = 'command-output';
    educationContainer.innerHTML = `
    <div class="education-section">
        <span>
            <p>${educationData.text}</p>
            <p>${educationData.location}</p>
            <p>${educationData.duration}</p>
        </span>
        <span>
            <img src="img/Logo_ucst-no-bg.png" alt="UCSTGO"/>
        </span>
    </div>

    `;
    wrapper.insertBefore(educationContainer, terminalForm);
}

const email = (wrapper, terminalForm) => {
    const emailContainer = document.createElement('div');
    emailContainer.className = 'command-output';
    emailContainer.innerHTML = `
    <p>Click <a href="mailto:${emailData.address}">${emailData.address}</a> to email me</p>
    `;
    wrapper.insertBefore(emailContainer, terminalForm);
    
};

//clear all terminal content except the form
const clearAll = () => {
    const allLines = document.querySelectorAll('.terminal-box:not(.terminal-form .terminal-box)');
            const allOutputs = document.querySelectorAll('.command-output');
            const startup = document.querySelector('.startup-content');
            if(startup) startup.remove();
            allLines.forEach(line => line.remove());
            allOutputs.forEach(out => out.remove());
}

// help command
const help = (wrapper, terminalForm) =>{
    const helpContainer = document.createElement('div');
    helpContainer.className = 'command-output';
    
    let helpText = "<br>";
    for (const [command, description] of Object.entries(helpData)) {
        helpText += `<span style="color: #00ff00; width: 100px; display: inline-block;">${command}</span> - ${description}<br>`;
    }
    helpText += "<br><span style='text-decoration: underline;'>Useful Shortcuts:</span><br>";
    for (const [tip, desription] of Object.entries(helpTips)) {
        helpText += `<span style="color: #00ffff; width: 100px; display: inline-block;">${tip}</span> - ${desription}<br>`;
    }
    helpText += "<br>";
    
    helpContainer.innerHTML = helpText;
    wrapper.insertBefore(helpContainer, terminalForm);
}

const history = (wrapper, terminalForm) => {
    const historyContainer = document.createElement('div');
    historyContainer.className = 'command-output';
    if(commandHistory.length === 0){
        historyContainer.innerHTML = "<p>No commands in history.</p>";
    } else {
        let historyText = "<br>";
        commandHistory.forEach((cmd, index) => {
            historyText += `${cmd}<br>`;
        });
        historyContainer.innerHTML = historyText;
    }
    wrapper.insertBefore(historyContainer, terminalForm);
}


const welcome = (wrapper, terminalForm) => {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'command-output startup-content';

    welcomeContainer.innerHTML = `
<span class="prompt">${userName}@waiyannaing-terminal:~$ <span> ${welcomeData.intro} </span></span>
<pre class="ascii-art">${welcomeData.ascii}</pre>
<p style="font-weight: bold;">${welcomeData.title}</p>
<div class="social-icons">
<a href="${socialsData.github}" target="_blank"><img src="img/github.png" alt="GitHub"/></a><a href="${socialsData.dev}" target="_blank"><img src="img/dev.png" alt="Dev.to"/></a><a href="${socialsData.linkedin}" target="_blank"><img src="img/linkedin.png" alt="LinkedIn"/></a><a href="${socialsData.telegram}" target="_blank"><img src="img/telegram.png" alt="Telegram"/></a>
</div>
<span>---</span><br/>
<p>${welcomeData.description}</p>
<span>---</span>
`;
    wrapper.insertBefore(welcomeContainer, terminalForm);
}

const socials = (wrapper, terminalForm) => {
    const socialsContainer = document.createElement('div');
    socialsContainer.className = 'command-output';
    socialsContainer.innerHTML = `
<p>Here are my social media links:</p>
<p>GitHub: <a href="${socialsData.github}" target="_blank">${socialsData.github}</a></p>
<p>Dev.to: <a href="${socialsData.dev}" target="_blank">${socialsData.dev}</a></p>
<p>LinkedIn: <a href="${socialsData.linkedin}" target="_blank">${socialsData.linkedin}</a></p>
<p>Telegram: <a href="${socialsData.telegram}" target="_blank">${socialsData.telegram}</a></p>
    `;
    wrapper.insertBefore(socialsContainer, terminalForm);
}

const echo = (input, terminalForm) => {
    const trimmedInput = input.trim();
    const args = trimmedInput.split(/\s+/);
    const echoOutput = document.createElement('div');
    echoOutput.className = 'command-output';
    const message = args.slice(1).join(' ');

    if (message === "''" || message === '""' || message === "") {
        echoOutput.innerHTML = "&nbsp;"; 
    } else {
        echoOutput.innerText = message.replace(/^['"]|['"]$/g, '');
    }
    terminalWrapper.insertBefore(echoOutput, terminalForm);
};

const gui = () => {
    window.open('https://waiyannaing-portfolio.netlify.app/', '_blank');
}
const quit = () => {
    localStorage.removeItem('userData');
    window.location.href = 'index.html';
}
const projects = (wrapper, terminalForm) => {
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'command-output';
    projectsContainer.innerHTML = `
<span>Here are some of the projects I've worked on:</span>
    ${projectsData.projects.map(project => `
        <div class='project-lists'>${project.id}. <strong>${project.name}</strong> (<a href="${project.url}" target="_blank">View Project</a>)<br/>${project.description}</div>
    `).join('')}
    `;
    wrapper.insertBefore(projectsContainer, terminalForm);
}

const skills = (wrapper, terminalForm) => {
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'command-output';
    const line = "+----------------+-------------------------------------------+";
    const header = "| Category       | Tech Stack                                |";
    
    const rows = [
        { cat: "Languages", data: skillsData.languages.join(', ') },
        { cat: "Frameworks", data: skillsData.frameworks.join(', ') },
        { cat: "Tools", data: skillsData.tools.join(', ') }
    ];

    const tableRows = rows.map(row => {
        const catCol = row.cat.padEnd(14, ' ');
        const dataCol = row.data.padEnd(41, ' ');
        return `| ${catCol} | ${dataCol} |`;
    }).join('\n');

    skillsContainer.innerHTML = `
<pre style="line-height: 1.5;">
${line}
${header}
${line}
${tableRows}
${line}
</pre>`;

    wrapper.insertBefore(skillsContainer, terminalForm);
}

//autocomplete command
const autocomplete = (input, availableCommands) => {
    const currentInput = input.textContent.trim();
    if(currentInput.length === 0 || currentInput === '') return;
    const prediction = availableCommands.find(cmd => cmd.startsWith(currentInput));
    if(prediction){
        input.textContent = prediction;
        const cursor = document.createRange();
        const selection = window.getSelection();
        cursor.selectNodeContents(input);
        cursor.collapse(false);
        selection.removeAllRanges();
        selection.addRange(cursor);
    }
}

// Fuzzy Search using Levenshtein Distance
const getLevenshteinDistance = (a, b) => {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );  
            }
        }
    }
    return matrix[b.length][a.length];
};
const getSuggestedCommand = (input, availableCommands) => {
    let closestCommand = null;
    let minDistance = 3;

    availableCommands.forEach(cmd => {
        const distance = getLevenshteinDistance(input, cmd);
        if (distance < minDistance) {
            minDistance = distance;
            closestCommand = cmd;
        }
    });

    return closestCommand;
};
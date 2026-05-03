const welcomeData = {
    intro: "Welcome.",
    ascii: `
 _       __      _    __  __               _   __      _            
| |     / /___  (_)   \\ \\/ /___  ____     / | / /___  (_)___  ____ 
| | /| / / __ \`/ /     \\  / __ \`/ __ \\   /  |/ / __ \`/ / __ \\/ __ \`/
| |/ |/ / /_/ / /      / / /_/ / / / /  / /|  / /_/ / / / / / /_/ / 
|__/|__/\\__,_/_/      /_/\\__,_/_/ /_/  /_/ |_/\\__,_/_/_/ /_/\\__, /  
                                                           /____/   `,
    title: "Wai Yan Naing - Terminal Portfolio [Version 1.0.0]",
    description: "Welcome to my interactive terminal. Type 'help' to see the list of available commands.",
}

const helpData = {
    'about': 'about Wai Yan Naing',
    'clear': 'clear the terminal',
    'echo': 'display a line of text',
    'education': 'my education background',
    'email': 'send an email to me',
    'gui': 'go to my portfolio in GUI',
    'help': 'check available commands',
    'history': 'view command history',
    'projects': "view projects that I've coded",
    'pwd': 'print current working directory',
    'quit': 'logout the terminal',
    'socials': 'view my social media links',
    'welcome': 'display hero section',
    'whoami': 'current user name'
}
const helpTips = {
    'Tab': 'autocomplete commands',
    'Insert': 'change cursor style',
    'Arrow Up': 'previous command in history',
}

const aboutData = {
    intro: "Hi👋, I'm Wai Yan Naing.",
    career: "I'm a Computer Science student based in Taungoo, Myanmar.",
    text: "I'm passionate about building websites and developing innovative projects.",
}

const educationData = {
    text: "Bachelor of Computer Science (B.C.Sc.)",
    location: "University of Computer Studies, Taungoo",
    duration: "2022 - Present"
}

const emailData = {
    address: "waiyann025674@gmail.com",
}

const socialsData = {
    github: "https://github.com/waiyan-n0",
    dev: "https://waiyannaing-portfolio.netlify.app/",
    linkedin: "https://www.linkedin.com/in/waiyan-naing-355224272/",
    telegram: "t.me/waiyandev",
}

const projectsData = {
    projects: [
        {
            id: 1,
            name: "Personal Portfolio",
            description: "My personal portfolio website showcasing my skills and projects.",
            url: "https://waiyannaing-portfolio.netlify.app/"
        },
        {
            id: 2,
            name: "Love-Note",
            description: "Personal website for my girlfriend (counting anniversary date and cute animation) using pure HTML, CSS, and JavaScript.",
            url: "https://waiyanjourney.netlify.app/"
        },
    ]
}

const skillsData = {
    languages: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java'],
    frameworks: ['React', 'Node.js', 'OpenCV'],
    tools: ['Git', 'Github', 'VS Code']
}

const themeData = {
    os: ['Windows 10'],
}
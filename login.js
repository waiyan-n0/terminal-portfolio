const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = "none";
    
    if (username === "" || password === "") {
        alertBox.innerText = "Please fill in all fields!";
        alertBox.style.display = "block";
        return;
    }
    if(username && password==='kali') {
        const userData = {
            username: username,
            password: password,
            loginTime: new Date().toLocaleString()
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'base.html';
    }else{
        alertBox.innerText = "Incorrect Password! Please try again.";
        alertBox.style.display = "block";
    }
}

const clockBox = document.getElementById('clock-box');
const Clock = () => {
    const clockBox = document.getElementById('clock-box');
    if (!clockBox) return;

    const now = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const month = monthNames[now.getMonth()];
    const days = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    clockBox.innerText = `${month} ${days} ${hours}:${minutes}`;
}
Clock();
setInterval(Clock, 1000);
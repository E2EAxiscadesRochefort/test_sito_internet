// --- 1. Greeting Logic ---
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
    greetingElement.innerText = "Good Morning!";
} else if (hour < 18) {
    greetingElement.innerText = "Good Afternoon!";
} else {
    greetingElement.innerText = "Good Evening!";
}

// --- 2. The "Handshake" Listener ---
// This waits for the Google Popup to say "I'm done!"
window.addEventListener("message", (event) => {
    // Only proceed if the message is our specific success signal
    if (event.data === "PROCEED") {
        console.log("Success signal received from Google!");
        // Redirect to your success page
        window.location.href = "success.html";
    }
}, false);

// --- 3. Button Click Logic ---
const btn = document.getElementById('colorBtn');

btn.addEventListener('click', () => {
    const scriptURL = 'https://script.google.com/a/macros/airbus.com/s/AKfycbyV_mn9jOc-cj6gI9iZv7JAUG0wtxJMoGQ-d9Ha62AuXcuCtrphAvue7EKISBbEbnPd/exec';
    const finalURL = `${scriptURL}?name=Lorenzo&action=ButtonClicked`;

    const width = 400;
    const height = 450;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    // We keep a reference to the window just in case
    window.open(
        finalURL,
        'GoogleLogin',
        `width=${width},height=${height},top=${top},left=${left}`
    );

    btn.innerText = "Processing...";
    btn.style.opacity = "0.5";
    btn.disabled = true;
});
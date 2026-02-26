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

btn.addEventListener('click', async () => {
    btn.innerText = "Sending...";

    const scriptURL = 'https://script.google.com/a/macros/airbus.com/s/AKfycbyV_mn9jOc-cj6gI9iZv7JAUG0wtxJMoGQ-d9Ha62AuXcuCtrphAvue7EKISBbEbnPd/exec';

    try {
        // We use 'no-cors' because Google Scripts redirect several times
        await fetch(scriptURL, {
            method: 'GET', // or 'POST' depending on your script
            mode: 'no-cors'
        });

        alert("Success! The script was triggered.");
        btn.innerText = "Done!";
    } catch (error) {
        console.error('Error!', error.message);
        btn.innerText = "Error";
    }
});
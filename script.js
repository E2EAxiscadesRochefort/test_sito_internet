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
    // Replace with your current /exec URL
    const scriptURL = 'https://script.google.com/a/macros/airbus.com/s/AKfycbw4VyKRJTddjFX3LFGzm8QBShvJUtrWtuBailmlkVZE/dev';

    // We attach data to the URL like this: ?variable=value
    const finalURL = `${scriptURL}?name=Lorenzo&action=ButtonPressed`;
    window.open(finalURL);
    //
    // try {
    //     // 'no-cors' is required for Google Scripts to work from GitHub
    //     await fetch(finalURL, { mode: 'no-cors' });
    //     console.log("Successfully sent to Google Logs!");
    // } catch (error) {
    //     console.log("Failed to send", error);
    // }
});
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
    const scriptURL = 'https://script.google.com/a/macros/airbus.com/s/AKfycb.../exec';
    const finalURL = `${scriptURL}?name=Lorenzo&action=ButtonPressed`;

    // This loads the URL in the hidden iframe
    // Because it's a "frame," it uses your Airbus login cookies!
    document.getElementById('hidden_iframe').src = finalURL;

    console.log("Sent via hidden iframe");
    alert("Action logged!");
});
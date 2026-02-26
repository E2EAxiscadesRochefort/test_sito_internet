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
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6f42c1'];
let colorIndex = 0;

btn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    btn.style.backgroundColor = colors[colorIndex];
    greetingElement.style.color = colors[colorIndex];
});
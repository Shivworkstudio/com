// js/rainbow-effect.js

function getRainbowColor(hue) {
    hue = hue % 360; // Ensure hue is within 0-359 range
    return `hsl(${hue}, 100%, 50%)`; // Saturated, bright rainbow colors
}

// Add transition effect for smooth color changes
document.documentElement.style.transition = 'background-color 0.5s ease';

let hue = 0; // Initial hue value
let hueIncrementScroll = 0.5; // Adjust for color change speed on scroll (smaller = slower)

const hueSpeedControl = document.createElement('input'); // Create a slider for hue speed
hueSpeedControl.type = 'range';
hueSpeedControl.min = '0';
hueSpeedControl.max = '5';
hueSpeedControl.value = '0.5'; // Default speed
hueSpeedControl.style.position = 'fixed';
hueSpeedControl.style.top = '10px';
hueSpeedControl.style.right = '10px';
document.body.appendChild(hueSpeedControl);

hueSpeedControl.addEventListener('input', (event) => {
    hueIncrementScroll = parseFloat(event.target.value);
});

window.addEventListener('scroll', () => {
    hue += hueIncrementScroll;
    document.documentElement.style.setProperty('--rainbow-hue', hue);
    document.documentElement.style.setProperty('--rainbow-accent-color', getRainbowColor(hue));
    // Reset hue if it exceeds 360
    if (hue >= 360) {
        hue = 0;
    }
});

window.addEventListener('mousemove', (event) => {
    // Example: Hue change based on mouse X position (horizontal movement)
    const mouseXPercentage = (event.clientX / window.innerWidth) * 360; // Map mouse X to 0-360 hue range
    hue = mouseXPercentage; // Set hue directly based on mouse X
    document.documentElement.style.setProperty('--rainbow-hue', hue);
    document.documentElement.style.setProperty('--rainbow-accent-color', getRainbowColor(hue));
});

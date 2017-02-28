const SEC_HAND = document.querySelector('.second-hand');
const MIN_HAND = document.querySelector('.min-hand');
const HR_HAND = document.querySelector('.hour-hand');

function setDate() {
    const NOW = new Date();

    // Seconds
    let seconds = NOW.getSeconds();
    // Add 90 to offset the `transition: rotate(90deg)
    let secsDegrees = ((seconds / 60) * 360) + 90;
    SEC_HAND.style.transform = `rotate(${secsDegrees}deg)`;
        
    // Minutes
    let minutes = NOW.getMinutes();
    let minsDegrees = ((minutes / 60) * 360) + 90;
    MIN_HAND.style.transform = `rotate(${minsDegrees}deg)`; 

    // Hours
    let hours = NOW.getHours();
    // Divide by 12 for hours
    let hrsDegrees = ((hours / 12) * 360) + 90;
    HR_HAND.style.transform = `rotate(${hrsDegrees}deg)`; 
};

// Update every second
setInterval(setDate, 1000);
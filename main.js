
const lottoContainer = document.getElementById('lotto-container');
const generateButton = document.getElementById('generate-button');

const getBallColor = (number) => {
    if (number <= 10) return '#fbc400'; // Vibrant Yellow
    if (number <= 20) return '#00b894'; // Teal
    if (number <= 30) return '#d63031'; // Strong Red
    if (number <= 40) return '#6c5ce7'; // Purple
    return '#e17055'; // Orange
};

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const displayNumbers = (numbers) => {
    lottoContainer.innerHTML = '';
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball');
            ball.style.backgroundColor = getBallColor(number);
            ball.textContent = number;
            lottoContainer.appendChild(ball);
        }, index * 200); // Stagger the appearance of each ball
    });
};

generateButton.addEventListener('click', () => {
    // Disable button during animation
    generateButton.disabled = true;
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
    // Re-enable the button after the animation is complete
    setTimeout(() => {
        generateButton.disabled = false;
    }, 6 * 200); // Match the total delay
});

// Initial generation on page load
const initialNumbers = generateLottoNumbers();
displayNumbers(initialNumbers);

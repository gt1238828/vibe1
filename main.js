const lottoContainer = document.getElementById('lotto-container');
const generateButton = document.getElementById('generate-button');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// --- Theme Logic ---

const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
};

const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', toggleTheme);

// --- Lotto Logic ---

const getBallColor = (number) => {
    if (number <= 10) return 'oklch(75% 0.18 85)';   // Yellow/Orange
    if (number <= 20) return 'oklch(65% 0.15 200)';  // Blue
    if (number <= 30) return 'oklch(60% 0.18 20)';   // Red/Pink
    if (number <= 40) return 'oklch(55% 0.12 250)';  // Purple
    return 'oklch(70% 0.15 150)';                    // Green
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
        }, index * 150);
    });
};

generateButton.addEventListener('click', () => {
    generateButton.disabled = true;
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
    setTimeout(() => {
        generateButton.disabled = false;
    }, 6 * 150 + 100);
});

// --- Formspree AJAX Logic ---

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const submitButton = e.target.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        formStatus.textContent = '';

        try {
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.className = 'success';
                formStatus.textContent = 'Thank you! Your inquiry has been sent.';
                contactForm.reset();
            } else {
                const result = await response.json();
                formStatus.className = 'error';
                formStatus.textContent = result.errors ? result.errors.map(error => error.message).join(", ") : 'Oops! Something went wrong.';
            }
        } catch (error) {
            formStatus.className = 'error';
            formStatus.textContent = 'Oops! There was a problem submitting your form.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Inquiry';
        }
    });
}

// Initial generation
displayNumbers(generateLottoNumbers());

// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.nav-links').classList.remove('show');
    });
});

// Scroll animations (fade-in)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button style
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
// Dark Mode Toggle
const darkToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    darkToggle.textContent = '☀️';
}

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        darkToggle.textContent = '🌙';
    }
});

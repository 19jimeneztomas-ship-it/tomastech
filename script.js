// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initial call
revealOnScroll();

// Cursor effect (Optional/Subtle)
const orb = document.querySelector('.bg-orb');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    orb.style.left = `${x - 200}px`;
    orb.style.top = `${y - 200}px`;
});

// Smooth Scroll con efecto de resaltado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Añadir efecto de brillo temporal al llegar
            setTimeout(() => {
                targetElement.style.boxShadow = '0 0 30px var(--accent)';
                targetElement.style.borderColor = 'var(--accent-light)';

                setTimeout(() => {
                    targetElement.style.boxShadow = '';
                    targetElement.style.borderColor = '';
                }, 1500);
            }, 800);
        }
    });
});

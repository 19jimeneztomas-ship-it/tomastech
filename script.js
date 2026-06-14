// --- SISTEMA DE PROTECCIÓN ANTIRROBO AGRESIVO ---

// 1. Bloqueo de Clic Derecho
document.addEventListener('contextmenu', e => e.preventDefault());

// 2. Bloqueo de Selección y Arrastre (Imágenes/Texto)
document.addEventListener('dragstart', e => e.preventDefault());

// 3. Bucle de "Debugger" (Congela la página si abren la consola)
if (window.outerHeight - window.innerHeight > 160 || window.outerWidth - window.innerWidth > 160) {
    // Si la consola ya está abierta al cargar
    document.body.innerHTML = "<h1>ACCESO DENEGADO</h1><p>Las herramientas de desarrollador no están permitidas en este sitio.</p>";
}

setInterval(function() {
    (function() {
        (function a() {
            try {
                (function b(i) {
                    if (("" + i / i).length !== 1 || i % 20 === 0) {
                        (function() {}).constructor("debugger")();
                    } else {
                        debugger;
                    }
                    b(++i);
                })(0);
            } catch (e) {
                setTimeout(a, 50);
            }
        })();
    })();
}, 200);

// 4. Bloqueo de Atajos de Teclado
document.addEventListener('keydown', (e) => {
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 83)    // Ctrl+S
    ) {
        e.preventDefault();
        return false;
    }
});

// 5. Limpiar Consola constantemente
setInterval(() => {
    console.clear();
    console.log("%c PROTECCIÓN ACTIVA ", "background: red; color: white; font-size: 20px; font-weight: bold;");
}, 100);

// --- RESTO DEL SCRIPT ORIGINAL ---
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

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
}

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Cursor effect (Optional/Subtle)
const orb = document.querySelector('.bg-orb');
if (orb) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        orb.style.left = `${x - 200}px`;
        orb.style.top = `${y - 200}px`;
    });
}

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

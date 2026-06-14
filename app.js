// Generate QR Codes
document.addEventListener('DOMContentLoaded', function() {
    // QR Code 1: Agendar Cita
    const qrcode1 = new QRCode(document.getElementById('qrcode'), {
        text: 'https://alan-servicios.com/agendar-cita',
        width: 200,
        height: 200,
        colorDark: '#2c3e50',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    // QR Code 2: Ver Catálogo
    const qrcode2 = new QRCode(document.getElementById('qrcode2'), {
        text: 'https://alan-servicios.com/catalogo-servicios',
        width: 200,
        height: 200,
        colorDark: '#2c3e50',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }
        });
    }, observerOptions);

    // Observe cards
    document.querySelectorAll('.servicio-card, .personal-card, .info-item').forEach(el => {
        observer.observe(el);
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .servicio-card, .personal-card, .info-item {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Form submission (optional)
function contactForm() {
    const email = prompt('¿Cuál es tu correo electrónico?');
    const service = prompt('¿Qué servicio requieres?');
    
    if (email && service) {
        console.log(`Solicitud: ${service} de ${email}`);
        alert('¡Gracias! Tu solicitud ha sido registrada. Nos pondremos en contacto pronto.');
    }
}

// QR Scanner Function (can be integrated with a mobile camera)
function initQRScanner() {
    // This is a placeholder for QR scanner implementation
    // You can use libraries like instascan.js or jsQR
    console.log('QR Scanner initialized');
}

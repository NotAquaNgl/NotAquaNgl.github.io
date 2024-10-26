document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0; // Start hidden
        observer.observe(section);
    });

    // Add a fade-in effect
    setTimeout(() => {
        sections.forEach(section => {
            section.style.transition = 'opacity 0.6s ease-in';
            section.style.opacity = 1; // Fade in
        });
    }, 1000);
});

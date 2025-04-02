// Mouse movement effect
document.addEventListener('mousemove', (event) => {
    const hero = document.querySelector('.hero');
    let x = (window.innerWidth - event.pageX * 2) / 100;
    let y = (window.innerHeight - event.pageY * 2) / 100;
    hero.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

// GSAP Animation (optional)
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1 });
});

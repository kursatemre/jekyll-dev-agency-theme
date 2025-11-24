// Modern animations using GSAP (loaded via CDN) and Alpine.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements on scroll with class 'animate-on-scroll'
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    animateElements.forEach((element) => {
      element.classList.add('will-animate');

      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => element.classList.add('animated'),
      });
    });

    // Stagger animation for card groups
    const cardGroups = document.querySelectorAll('.card-group');

    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll('.card');
      if (cards.length > 0) {
        // Set initial opacity to 1 to ensure visibility
        gsap.set(cards, { opacity: 1 });

        gsap.from(cards, {
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }
    });

    // Hero parallax effect (desktop only)
    if (window.innerWidth > 768) {
      const heroSection = document.querySelector('.hero-section');
      const heroParallax = document.querySelector('.hero-parallax');
      if (heroSection && heroParallax) {
        gsap.to(heroParallax, {
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: 150,
          ease: 'none',
        });
      }
    }

    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const targetText = counter.getAttribute('data-target');
      if (!targetText) return;

      const target = parseInt(targetText);
      if (isNaN(target)) return;

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          animateCounter(counter, target);
        },
      });
    });

    function animateCounter(element, target) {
      const duration = 2000; // 2 seconds
      const start = 0;
      const increment = target / (duration / 16); // ~60fps
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.ceil(current);
        }
      }, 16);
    }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

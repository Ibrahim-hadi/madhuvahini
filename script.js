// Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });

        // Initialize EmailJS (replace 'YOUR_USER_ID' with your actual user ID from EmailJS)
        (function () {
            emailjs.init('HGnmW0Iaq-_wgg5IY');
        })();

        // Contact Form Submission via EmailJS
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm('service_mrklqo1', 'template_usg2vzp', this)
                .then(function () {
                    alert('Thank you for your message! We will contact you soon.');
                    document.getElementById('contactForm').reset();
                }, function (error) {
                    alert('Failed to send message. Please try again.');
                });
        });

        // Newsletter Form Submission via EmailJS
        document.getElementById('newsletterForm').addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm('service_mrklqo1', 'template_kugmwa8', this)
                .then(function () {
                    alert('Thank you for subscribing to our newsletter!');
                    document.getElementById('newsletterForm').reset();
                }, function (error) {
                    alert('Subscription failed. Please try again.');
                });
        });

        // Add active class to nav links on scroll
        const sections = document.querySelectorAll('section');
        const navLinksAll = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Scroll to top functionality
        const scrollTopBtn = document.querySelector('.scroll-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
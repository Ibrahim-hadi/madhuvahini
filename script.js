// Initialize EmailJS (replace 'YOUR_USER_ID' with your actual user ID from EmailJS)
        (function () {
            emailjs.init('HGnmW0Iaq-_wgg5IY');
        })();

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm('service_mrklqo1', 'template_usg2vzp', this)
                .then(function () {
                    alert('Message sent successfully!');
                    document.getElementById('contactForm').reset();
                }, function (error) {
                    alert('Failed to send message. Please try again.');
                });
        });

        // Newsletter Form Submission
        document.getElementById('newsletterForm').addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm('service_mrklqo1', 'template_kugmwa8', this)
                .then(function () {
                    alert('Subscribed to newsletter!');
                    document.getElementById('newsletterForm').reset();
                }, function (error) {
                    alert('Subscription failed. Please try again.');
                });
        });

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });

        // Add fixed header on scroll
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
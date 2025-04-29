document.addEventListener('DOMContentLoaded', function() {
    // Navigation and Header Functionality
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Hamburger menu toggle
    if(hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active nav link based on section
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animations
    const scrollAnimationElements = document.querySelectorAll('.scroll-animation');
    
    function toggleScrollAnimation() {
        scrollAnimationElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', toggleScrollAnimation);
    window.addEventListener('load', toggleScrollAnimation);
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let intervalId;
    
    // Initialize testimonials
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Start automatic slideshow
    function startSlideshow() {
        intervalId = setInterval(() => {
            let nextSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(nextSlide);
        }, 5000);
    }
    
    function stopSlideshow() {
        clearInterval(intervalId);
    }
    
    // Next and Previous controls
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            stopSlideshow();
            let prevSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
            showSlide(prevSlide);
            startSlideshow();
        });
        
        nextButton.addEventListener('click', function() {
            stopSlideshow();
            let nextSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(nextSlide);
            startSlideshow();
        });
    }
    
    // Dot indicators
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });
    
    // Start the slideshow
    showSlide(0);
    startSlideshow();
    
    // Stop slideshow when hovering over the slider
    const testimonialSlider = document.getElementById('testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', stopSlideshow);
        testimonialSlider.addEventListener('mouseleave', startSlideshow);
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formSuccessMessage = document.getElementById('form-success-message');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const dateInput = document.getElementById('date');
            
            // Get error message elements
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const phoneError = document.getElementById('phone-error');
            const dateError = document.getElementById('date-error');
            
            // Reset error messages
            nameError.textContent = '';
            emailError.textContent = '';
            phoneError.textContent = '';
            dateError.textContent = '';
            
            // Validation flags
            let valid = true;
            
            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                valid = false;
            }
            
            // Validate Email
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required';
                valid = false;
            } else if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email';
                valid = false;
            }
            
            // Validate Phone
            if (phoneInput.value.trim() === '') {
                phoneError.textContent = 'Phone number is required';
                valid = false;
            } else if (!isValidPhone(phoneInput.value)) {
                phoneError.textContent = 'Please enter a valid phone number';
                valid = false;
            }
            
            // Validate Date
            if (dateInput.value === '') {
                dateError.textContent = 'Event date is required';
                valid = false;
            }
            
            if (valid) {
                // Show loading state
                btnText.style.display = 'none';
                btnLoading.style.display = 'block';
                submitBtn.disabled = true;
                
                // Submit the form data using fetch API
                const formData = {
                    name: nameInput.value,
                    email: emailInput.value,
                    phone: phoneInput.value,
                    artist: document.getElementById('artist').value,
                    date: dateInput.value,
                    message: document.getElementById('message').value
                };
                
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    // Reset the form
                    contactForm.reset();
                    
                    // Show success message
                    formSuccessMessage.style.display = 'block';
                    
                    // Hide success message after 5 seconds
                    setTimeout(function() {
                        formSuccessMessage.style.display = 'none';
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    // Reset button state
                    btnText.style.display = 'block';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                });
            }
        });
    }
    
    // Helper functions for validation
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    function isValidPhone(phone) {
        const phonePattern = /^[0-9\s\-\+\(\)]{10,15}$/;
        return phonePattern.test(phone);
    }
});
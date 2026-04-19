// Navigation and Section Switching
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Add active class to the clicked nav link
    const activeLink = document.querySelector(`a[onclick="navigateTo('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Set home section as active on page load
document.addEventListener('DOMContentLoaded', function() {
    navigateTo('home');
});

// Handle form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Here you would typically send the form data to a server
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}`);
        
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all fields');
    }
});

// Smooth navigation with keyboard
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        navigateTo('home');
    }
});

// Add animation on scroll for projects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
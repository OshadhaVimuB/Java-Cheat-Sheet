// Theme toggle functionality with icon change
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const icon = this.querySelector('.theme-icon');
    icon.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const code = this.previousElementSibling.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(function() {
            alert('Code copied to clipboard!');
        }, function() {
            alert('Failed to copy code.');
        });
    });
});

// Go to Top button functionality
const goToTopBtn = document.getElementById('go-to-top');
goToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide Go to Top button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        goToTopBtn.classList.add('visible');
    } else {
        goToTopBtn.classList.remove('visible');
    }
});
function showAlert() {
    alert('Button Clicked! Get started now.');
}
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.styles.backgroundColor = '#555';
    } else {
        navbar.styles.backgroundColor = '#333';
    }
});

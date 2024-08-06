window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('nav ul li a').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.color = '#ff0';
    });

    element.addEventListener('mouseout', function() {
        element.style.color = '#fff';
    });
});

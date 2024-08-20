const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView();
    });
});
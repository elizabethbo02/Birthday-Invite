document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelector('.thank-you').style.display = 'block';
});
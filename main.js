document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelector('.thank-you').style.display = 'block';
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
            }
        });
    },
    {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
    });

const paragraph = document.querySelectorAll('.answer');
//const button = document.querySelectorAll('button');

paragraph.forEach((element) => {
    observer.observe(element)
})


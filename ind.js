const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Check which class the element has and add 'visible' to the correct child
            if (entry.target.id === 'about-me') {
                entry.target.querySelector('.about-content').classList.add('visible');
            }
            if (entry.target.id === 'resume') {
                entry.target.querySelector('.resume-content').classList.add('visible');
            }
        }
    });
});

// Tell the observer to watch the about-me section
const aboutSection = document.querySelector('#about-me');
if(aboutSection) {
    observer.observe(aboutSection);
}

// Tell the observer to watch the resume section
const resumeSection = document.querySelector('#resume');
if(resumeSection) {
    observer.observe(resumeSection);
}
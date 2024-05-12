document.getElementById('sign-in').addEventListener('click', ()=> {
    document.getElementById('md-sign-in').classList.remove('hidden');
})

document.getElementById('close-md-sign-in').addEventListener('click', () => {
    document.getElementById('md-sign-in').classList.add('hidden');
})

document.getElementById('sign-up').addEventListener('click', () => {
    document.getElementById('md-sign-up').classList.remove('hidden');
})

document.getElementById('close-md-sign-up').addEventListener('click', () => {
    document.getElementById('md-sign-up').classList.add('hidden');
})

// ----------------------------------

document.getElementById('#').addEventListener('click', () => {
    document.querySelectorAll('.page-wrapper section').forEach(function(section) {
        section.style.display = 'none';
    });
    document.querySelector('.info-contact').classList.add('hidden');
    document.querySelector('.page-detail').classList.remove('hidden');
})

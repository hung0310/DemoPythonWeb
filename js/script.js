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
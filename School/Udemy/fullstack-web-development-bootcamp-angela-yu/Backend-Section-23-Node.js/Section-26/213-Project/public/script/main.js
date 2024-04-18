document.getElementById('sign-up-button').addEventListener('click', () => {
    fetch('/register', {
        method: 'GET'
    })
})
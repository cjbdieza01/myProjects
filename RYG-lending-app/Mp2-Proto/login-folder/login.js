let users = [
    {username: 'cj123',
    password: 'mypassword',
    profilePicture: 'images/cjProfile.jpg',
    position: 'collector'},

    {username: 'lloyd123',
    password: '12345',
    profilePicture: 'images/lloydProfile.jpg',
    position: 'admin'},

    {username: 'owner123',
    password: 'owner123',
    profilePicture: 'images/owner.jpg',
    position: 'admin'},

    {username: 'lynlyn123',
    password: 'lynlyn12345',
    profilePicture: 'images/lynlynPic.jpg',
    position: 'admin'},
];

function registeredUser(username, password) {
    const user = {
        username: username.toLowerCase(),
        password: password.toLowerCase(),
    };
    users.push(user);
    console.log('Registered user: ', user);
}

const ownerVerificationCode = 'yourSecretCode';

document.getElementById('reg-form').addEventListener('submit', function(register) {
    register.preventDefault();

    const username = document.getElementById('register-username').value;
    const verificationInput = document.getElementById('verification-code');
    const password = document.getElementById('register-password').value;

    const enteredCode = verificationInput.value.trim();

        if (enteredCode === ownerVerificationCode) {
            registeredUser(username, password,);
        } else {
            document.getElementById("reg-alert").style.display = "block";
        }

    document.getElementById('register-username').value = '';
    document.getElementById('verification-code').value = '';
    document.getElementById('register-password').value = '';
});

// login 
function loginUser(loginUsername, loginPassword) {
    const lowerCaseUser = loginUsername.toLowerCase();
    const lowerCasePassword = loginPassword.toLowerCase();
    return users.some(user => (user.username === lowerCaseUser.trim() && user.password === lowerCasePassword.trim()));
}

function getProfile(username) {
    return users.find(user => user.username === username);
}

document.getElementById("login-form").addEventListener("submit", function(login) {
login.preventDefault();

    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let isAuthenticated = loginUser(loginUsername, loginPassword);

    if (isAuthenticated) {
        console.log("Login successful !!!");
        let userProfile = getProfile(loginUsername);
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        if (userProfile.position === 'collector') {
            window.location.href = "../dashboard-v2/collectorLandingPage.html";
        } else if (userProfile.position === 'admin') {
            window.location.href = "../dashboard-v2/RYGDash-v2.html";
        }
        
    } else {
        console.log("Login failed, please check your email or password");
        document.getElementById("alert").style.display = "block";
    }

    document.getElementById("loginUsername").value = '';
    document.getElementById("loginPassword").value = '';

} );

function closeAlert() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("reg-alert").style.display = "none";
  }


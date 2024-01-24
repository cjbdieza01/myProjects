// function fetchUsers() {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'http://localhost:3000/users', true);

//     request.onload = () => {
//         if (request.status >= 200 && request.status < 400) {
//             var data = JSON.parse(request.responseText);
//             console.log(data);
//         } else {
//             console.error('Request failed: ', request.status);
//         }
//     }

//     request.onerror = () => {
//         console.error('Request Failed');
//     }

//     request.send();
// }

const userContainer = document.getElementById('user-container');
const tBody =document.querySelector('tbody');

function fetchUsers(){
    fetch('http://localhost:3000/users')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Request failed', response.status);
        }
    })
    .then(data => {
        populateTable(data);
        console.log(data);
        })

    .catch(error => {
        console.error('Request failed', error.message);
});
}

function populateTable(data){
   tBody.innerHTML = '';
   const dataObj = data.users;

   dataObj.forEach(user => {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.password}</td>
    `;
    tBody.append(row);
   });
}

function addUser(){
    const nameInput = document.getElementById('name-id');
    const usernameInput = document.getElementById('username-id');
    const passwordInput = document.getElementById('password-id');

    const name = nameInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!name || !username || !password) {
        alert('All fields are required');
        return;
    }
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'

        },
        body: JSON.stringify({ name, username, password})
    })
    .then(response => {
       if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed', response.status);
    }

})

.then(data => {
    if (data.status){
        fetchUsers();

        nameInput.value ='';
        usernameInput.value ='';
        passwordInput.value ='';
       } else if (data.uNameDup) {
        alert(data.message);
       } else {
        alert(data.message);
       }
})
.catch(error => {
    console.error('Request failed', error.message);
})
}

// fetchUsers();
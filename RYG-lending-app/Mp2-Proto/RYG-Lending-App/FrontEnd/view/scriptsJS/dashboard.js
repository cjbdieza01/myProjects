function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getDay()];

    const formattedDateTime = `${formattedDate} (${dayOfWeek}), ${formattedTime}`;
    dateTimeElement.textContent = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);

console.log('dashboard.js is loaded successfully');


function fetchRevenue(){
    fetch('http://localhost:3000/clients/get-all-revenues')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Request failed', response.status);
        }
    })
    .then(data => {
        populateDashboard(data);
    })

    .catch(error => {
        console.error('Request failed', error.message);
    });
}

function populateDashboard(data){
    const totalCollection = document.getElementById('totalCollections');
    const totalReleases = document.getElementById('totalRelease');
    const totalDifference = document.getElementById('total-difference');

    const revenueObj = data.revenues[0];
    const difference = revenueObj.totalRelease - revenueObj.totalCollection;

    totalCollection.innerHTML = `₱ ${revenueObj.totalCollection} <i class="fa-solid fa-sack-dollar fa-sm"></i>`;
    totalReleases.innerHTML = `₱ ${revenueObj.totalRelease} <i class="fa-solid fa-money-bill-wave fa-sm"></i>`;
    totalDifference.innerHTML = `₱ ${difference} <i class="fa-solid fa-money-bills fa-sm"></i>`;
}

fetchRevenue()

function fetchNewClients(){
    fetch('http://localhost:3000/clients/get-all-new-clients')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Request failed', response.status);
        }
    })
    .then(data => { 
        populateNewCLientTable(data);
    })

    .catch(error => {
        console.error('Request failed', error.message);
    });
}

function populateNewCLientTable(data){
    let newCustomersTable = document.getElementById('new-clients').getElementsByTagName('tbody')[0];
    data.forEach(newClientObj => {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><img src="${newClientObj.picture}" alt="Customer Picture" style="width: 50px; height: 50px; border-radius: 50%;"></td>
            <td colspan="2"><span style="font-size: 15px;"><strong> ${newClientObj.lastName}, ${newClientObj.firstName} ${newClientObj.middleName}</strong> <br> ${newClientObj.municipality}</span></td>
        `;

        if (newCustomersTable.firstChild) {
            newCustomersTable.insertBefore(newRow, newCustomersTable.firstChild);
        } else {
            newCustomersTable.appendChild(newRow);
        }
    });
}

fetchNewClients()

function fetchClient(){
    fetch('http://localhost:3000/clients/get-clients')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Request failed', response.status);
        }
    })
    .then(data => {
        populateTotalClients(data);
    })

    .catch(error => {
        console.error('Request failed', error.message);
    });
}

function populateTotalClients(data) {
    let totalClients = document.getElementById('total-clients');
    totalClients.innerHTML = `<i class="fa-solid fa-users fa-sm"></i> ${data.length}`;
}

fetchClient()

function fetchTransactions(){
    fetch('http://localhost:3000/clients/get-all-transactions')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Request failed', response.status);
        }
    })
    .then(data => {
        populateTransactTable(data);
    })

    .catch(error => {
        console.error('Request failed', error.message);
    });
}

function populateTransactTable(data){
    let transactTableBody = document.getElementById('transactions-list');
    data.forEach(newTransact => {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${newTransact.date}</td>
            <td>${newTransact.type}</td>
            <td colspan="4">${newTransact.log}</td>
        `;

        if (transactTableBody.firstChild) {
            transactTableBody.insertBefore(newRow, transactTableBody.firstChild);
        } else {
            transactTableBody.appendChild(newRow);
        }
    });
}

fetchTransactions()

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#transaction-search input');
    const transactionsList = document.querySelector('#transactions-list');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = transactionsList.querySelectorAll('tr');

        rows.forEach(row => {
            const log = row.querySelector('td:nth-child(5)').textContent.toLowerCase();
            if (log.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});



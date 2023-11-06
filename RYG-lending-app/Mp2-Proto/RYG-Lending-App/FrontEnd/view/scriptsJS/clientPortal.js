
// Start of clientPortal //
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
        populateTable(data);
    })

    .catch(error => {
        console.error('Request failed', error.message);
    });
}


function populateTable(data){
    let clientPortalTable = document.getElementById('clientPortalTable');
    clientPortalTable.innerHTML = '';
    const clientObj = data;

    clientObj.forEach(client => {
        let clientTr = document.createElement('tr');
        clientTr.id = `client-${client.id}`;
        clientTr.innerHTML = `
            <td>${client.id}</td>
            <td>${client.lastName}, ${client.firstName} ${client.middleName}</td>
            <td>${client.loanType}</td>
            <td>${client.municipality}</td>
        `;

        clientTr.addEventListener('click', () => {
            showClientProfile(client);
            createPaymentHistory(client);
            viewLoanHistory(client);
        });
        
        clientPortalTable.appendChild(clientTr);
    })
};

 // Start Search function //
function initializeSearch() {
    let searchInput = document.getElementById('client-search');

    searchInput.addEventListener('input', function() {
        let filter = searchInput.value.toUpperCase();
        let rows = clientPortalTable.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName('td');
            let rowMatch = false;

            for (let j = 0; j < cells.length; j++) {
                let cell = cells[j];
                if (cell) {
                    let txtValue = cell.textContent || cell.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        rowMatch = true;
                        break;
                    }
                }
            }

            if (rowMatch) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }

        if (filter !== '') {
            clientPortalTable.classList.remove('hidden');
        } else {
            clientPortalTable.classList.add('hidden');
        }
    });
}

initializeSearch();



function createPaymentHistory(client) {
    const clientPaymentHistoryTable = document.getElementById('paymentHistoryTable');
    clientPaymentHistoryTable.innerHTML = '';
    
    client.paymentHistory.forEach(payment => {
        const paymentTr = document.createElement('tr');
        paymentTr.innerHTML = `
            <td>${payment.date}</td>
            <td>Php 
            ${payment.paymentAmount}</td>
        `;

        clientPaymentHistoryTable.appendChild(paymentTr);
    });
};

// End payment history //

// start loan history //

function viewLoanHistory(client) {
    const loanHistoryList = document.getElementById('clienLoanHistoryList');

    client.loanHistory.forEach(loan => {
        const loanTr = document.createElement('tr');
        loanTr.innerHTML = `
            <td>${loan.loanId}</td>
            <td>${loan.loanBrand}</td>
            <td>${loan.amount}</td>
            <td>${loan.payable}</td>
            <td>${loan.date} / ${loan.dueDate}</td>
            <td>${loan.status}</td>
            `;

        loanHistoryList.appendChild(loanTr);
    });
};

// End loan history //

fetchClient();

// Send SMS //

async function sendSmsNotificationFrontEnd(to, notificationType) {
    let message;

    switch (notificationType) {
        case 'appliedForLoan':
            message = 'Thank you for applying for a loan. Your application is being processed.';
            break;
        case 'loanApproved':
            message = 'Congratulations! Your loan application has been approved.';
            break;
        case 'paymentConfirmation':
            message = 'Thank you for your payment. It has been successfully confirmed.';
            break;
        default:
            throw new Error('Invalid notification type');
    }

    const response = await fetch('http://localhost:3000/clients/send-sms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, message })
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed', response.status);
    }
}


//Start add new client //

function addForApprovalClient() {
    const clientFirstName = document.getElementById('borrowerFirstName');
    const clientMiddleName = document.getElementById('borrowerMiddleName');
    const clientLastName = document.getElementById('borrowerLastName');
    const clientSpouseName = document.getElementById('spouseName');
    const clientBirthDate = document.getElementById('borrowerBirthDate');
    const clientEmail = document.getElementById('borrowerEmail');
    const clientPhoneNumber = document.getElementById('borrowerMobileNumber');
    const clientAddress = document.getElementById('borrowerAddress');
    const clientBrgy = document.getElementById('borrowerBarangay');
    const clientMunicipality = document.getElementById('borrowerMunicipality');
    const clientArea = document.getElementById('borrowerArea');
    const clientLoanType = document.getElementById('borrowerLoanType');
    const clientLoanAmount = document.getElementById('borrowerLoanAmount');
    const clientTotalPayable = document.getElementById('borrowerTotalPayable');
    const clientLoanDate = document.getElementById('borrowerLoanDate');
    const clientLoanDueDate = document.getElementById('borrowerLoanDueDate');
    const clientLoanTerm = document.getElementById('borrowerLoanTerm');
    const clientPictureObj = document.getElementById('newClientPicture').files[0];
    const clientDocs = document.getElementById('newClientDocs').files[0];

    const firstName = clientFirstName.value;
    const middleName = clientMiddleName.value;
    const lastName = clientLastName.value;
    const spouseName = clientSpouseName.value;
    const birthDate = clientBirthDate.value;
    const cusEmail = clientEmail.value;
    const contact = clientPhoneNumber.value;
    const address = clientAddress.value;
    const brgy = clientBrgy.value;
    const municipality = clientMunicipality.value;
    const cusArea = clientArea.value;
    const loanType = clientLoanType.value;
    const loanAmount = parseInt(clientLoanAmount.value);
    const totalPayable = parseInt(clientTotalPayable.value);
    const runningBalance = totalPayable;
    const loanDate = clientLoanDate.value;
    const loanDueDate = clientLoanDueDate.value;
    const loanTerm = parseInt(clientLoanTerm.value);
    const userPicture = URL.createObjectURL(clientPictureObj);
    const userDocs = URL.createObjectURL(clientDocs);

    fetch('http://localhost:3000/clients/add-clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            firstName, 
            middleName, 
            lastName, 
            spouseName, 
            birthDate, 
            cusEmail, 
            contact, 
            address, 
            brgy, 
            municipality, 
            cusArea, 
            loanType, loanBrand: "New", loanAmount, totalPayable, runningBalance, loanDate, loanDueDate, loanTerm, totalPayments: 0, loanStatus: "For Approval",
            assignedCollector: "none", 
            paymentHistory: [], 
            loanHistory: [], 
            userPicture, 
            userDocs })
    })
    .then(repsonse => {
        if (repsonse.ok) {
            return repsonse.json();
        } else {
            throw new Error ('Request failed', repsonse.status);
        }
    })
    .then(data => {
        if (data.status) {
            alert('Loan application successfully submitted for approval')
        } else if (data.uNameDup) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Request failed', error.message);
    });
}

// End add new client //

// start renew application // 

function applyLoanRenewal(id) {
    const amountInput = document.getElementById('renewAmount');
    const payableInput = document.getElementById('renewPayable');
    const dateInput = document.getElementById('renewDate');
    const dueDateInput = document.getElementById('renewDueDate');
    const termInput = document.getElementById('renewTerm');

    const amount = parseInt(amountInput.value);
    const payable = parseInt(payableInput.value);
    const loanDate = dateInput.value;
    const loanDueDate = dueDateInput.value;
    const term = parseInt(termInput.value);

    fetch(`http://localhost:3000/clients/renew-loan/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            loanDate, loanDueDate, amount, payable, term
        })
    }).then(repsonse => {
        if (repsonse.ok) {
            return repsonse.json();
        } else {
            throw new Error ('Request failed', repsonse.status);
        }
    }).then(data => {
        if (data.status) {
            alert('Renewal application successfully submitted for approval');
        } else {
            alert('Cannot renew loan. An active loan already exists.');
        }
    }).catch(error => {
        console.error('Request failed', error.message);
    });
}

function applyEmergencyLoan(id) {
    const amountInput = document.getElementById('emergAmount');
    const payableInput = document.getElementById('emergPayable');
    const dateInput = document.getElementById('emergDate');
    const dueDateInput = document.getElementById('emergDueDate');
    const termInput = document.getElementById('emergTerm');
    const reasonInput = document.getElementById('emergReason');

    const amount = parseInt(amountInput.value);
    const payable = parseInt(payableInput.value);
    const loanDate = dateInput.value;
    const loanDueDate = dueDateInput.value;
    const term = parseInt(termInput.value);
    const reason = reasonInput.value;

    fetch(`http://localhost:3000/clients/emergency-loan/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            loanDate, loanDueDate, amount, payable, term, reason
        })
    }).then(repsonse => {
        if (repsonse.ok) {
            return repsonse.json();
        } else {
            throw new Error ('Request failed', repsonse.status);
        }
    }).then(data => {
        if (data.status) {
            alert('Emergency loan application successfully submitted for approval');
        } else {
            alert('Cannot file emergency loan. An active emergency loan already exists.');
        }        
    }).catch(error => {
        console.error('Request failed', error.message);
    });
}

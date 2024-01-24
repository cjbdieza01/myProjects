function fetchForApprovalClient(){
    fetch('http://localhost:3000/clients/get-for-approval-clients')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Request failed', response.status);
        }
    })
    .then(data => {
        addForApprovalAccordion(data);
        console.log(data);
    })

    .catch(error => {
        console.error('Request failed', error.message);
    });
}


// Populate for approval accordion //
function addForApprovalAccordion(data) {
    const forApprovalAccordionContainer = document.getElementById('forApprovalsAccordion');

    data.forEach(client => {
        const accordionRow = document.createElement('div');
        accordionRow.className = 'accordion-item';

        accordionRow.innerHTML = `
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" style="background-color: white; border-bottom: solid 1px;" data-bs-target="#for-approval-${client.id}" aria-expanded="true" aria-controls="for-approval-${client.id}">
                    <h6>${client.loans[0].loanBrand} ${client.loanType} - ${client.lastName}, ${client.firstName} ${client.middleName} - ${client.loans[0].loanId}</h6>
                </button>
            </h2>
            <div id="for-approval-${client.id}" class="accordion-collapse collapse" data-bs-parent="#forApprovalsAccordion">
                <div class="accor-body">
                    <div class="d-flex flex-row">
                        <div class="d-flex flex-column" style="width: 50%;">
                            <span class="mt-2"><strong>Address: </strong>${client.address} ${client.brgy}, ${client.municipality}</span><br>
                            <span><strong>Contact: </strong>${client.contact}</span><br>
                            <span><strong>Email: </strong>${client.cusEmail}</span>
                        </div>
                        <div class="d-flex flex-column" style="width: 50%;">
                            <span class="mt-2"><strong>Loan Amount: </strong>${client.loans[0].amount}</span><br>
                            <span><strong>Loan Payable: </strong>${client.loans[0].payable}</span><br>
                            <span><strong>Loan Term: </strong>${client.loans[0].term} days</span>
                        </div>
                    </div>
                    <h5 class="mt-4" style="margin-left: 7px;">Loan History:</h5>
                    <table class="table" id="clientLoanHistory">
                        <thead id="table-header">
                            <tr>
                                <th scope="col">Loan ID</th>
                                <th scope="col">Loan Type</th>
                                <th scope="col">Loan Amount</th>
                                <th scope="col">Total Payable</th>
                                <th scope="col">Date</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody id="clienLoanHistoryList"></tbody>
                    </table>

                    <button type="button" class="btn btn-primary mt-3 mb-3" style="background-color: #00307d;" aria-labelledby="center" onclick="approveThisClient(${client.id})">Approved</button>
                    <button type="button" class="btn btn-secondary mt-3 mb-3" onclick="declineClientApproval(${client.id})">Decline</button>
                </div>
            </div>
        `;

        const clientLoanHistoryList = accordionRow.querySelector('#clienLoanHistoryList');

        client.loanHistory.forEach(history => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${history.loanId}</td>
                <td>${history.loanBrand}</td>
                <td>${history.amount}</td>
                <td>${history.payable}</td>
                <td>${history.date}</td>
                <td>${history.dueDate}</td>
                <td>${history.status}</td>
            `;
            clientLoanHistoryList.appendChild(row);
        });

        forApprovalAccordionContainer.appendChild(accordionRow);
    });
}

fetchForApprovalClient()

function approveThisClient(id) {
    fetch(`http://localhost:3000/clients/approve-client/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed', response.status);
        }
    })
    .then(data => {
        console.log(data);
        alert('Client successfully approved');
    })
    .catch(error => {
        console.error('Request failed', error.message);
    });
}

function declineClientApproval(id) {
    fetch(`http://localhost:3000/clients/decline-client/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed', response.status);
        }
    }).then(data => {
        alert('Client loan request declined');
    }).catch(error => {
        console.error('Request failed', error.message);
    });   
}

async function sendSmsNotificationApproved(to) {
    const message = 'Congratulations! Your loan application has been approved.';

    try {
        const response = await fetch('http://localhost:3000/clients/send-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to, message })
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error sending SMS notification: ${error.message}`);
    }
}

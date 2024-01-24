function showClientProfile(client) {
    console.log(client);

    const dailyPayment = client.loans[0].amount / client.loans[0].term;

    const clientUpperProfile = document.getElementById('clientUpper-Info');
    clientUpperProfile.innerHTML = '';

    const upperProfileLEft = document.createElement('div');
    upperProfileLEft.className = 'blue-text';
    upperProfileLEft.style = 'width: 70%;';
    upperProfileLEft.innerHTML = `
        <h2><strong>Full Name: </strong>${client.lastName}, ${client.firstName} ${client.middleName}</h2>
        <p><strong>Client ID: </strong>${client.id} 
        <br><strong>Loan ID: </strong> ${client.loans[0].loanId} <span id="statusBadge"></span>
        <br><strong>Brgy: </strong> ${client.brgy}
        <br><strong>Municipality: </strong> ${client.municipality}
        <br><strong>Mobile Number: </strong>${client.contact}
        <br><strong>Email Address: </strong>${client.cusEmail}</p>
    `;
    const upperProfileRight = document.createElement('div');
    upperProfileRight.className = 'p-2';
    upperProfileRight.style = 'width: 30%;';
    upperProfileRight.innerHTML = `
        <div style="border: solid 1px; height: 100%; border-radius: 20px;" id="clientPicContainer">
            <img src="${client.userPicture}" alt="clientPic" style="width: 100%; height: 100%; border-radius: 20px;">
        </div>
    `;
    clientUpperProfile.append(upperProfileLEft, upperProfileRight);

    const statusBadgeElement = document.getElementById('statusBadge');

    const loanStatus = client.loans[0].status;
    const statusBadge = getStatusBadge(loanStatus);
    statusBadgeElement.appendChild(statusBadge);

    const clientMiddleProfile = document.getElementById('clientMiddle-Info');
    clientMiddleProfile.innerHTML = '';
    const middleProfileCOntainer = document.createElement('div');
    middleProfileCOntainer.className = 'row middle-container';
    middleProfileCOntainer.innerHTML = `
        <div class="col-sm-4 blue-text d-flex flex-column">
            <span class="mt-4"><strong>Loan Date: </strong>${client.loans[0].date}</span><br>
            <span><strong>Loan Due Date: </strong>${client.loans[0].dueDate}</span><br>
            <span><strong>Loan Amount: </strong>${client.loans[0].amount}</span>
        </div>
        <div class="col-sm-4 blue-text d-flex flex-column">
            <span class="mt-4"><strong>Total Payable: </strong> ${client.loans[0].payable} </span><br>
            <span><strong>Total Payment: </strong>${client.loans[0].totalPayments}</span><br>
            <span><strong>Running Balance: </strong>${client.loans[0].runningBalance}</span>
        </div>
        <div class="col-sm-4 blue-text d-flex flex-column">
            <span class="mt-4"><strong>Loan Type: </strong>${client.loanType}</span><br>
            <span><strong>Term: </strong>${client.loans[0].term} days</span><br>
            <span><strong>Daily: </strong>${dailyPayment}</span>
        </div>
    `;
    clientMiddleProfile.appendChild(middleProfileCOntainer);

    const paymentBtnModal = document.getElementById('paymentBtnModal');
    paymentBtnModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Payment</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body align-items-center d-flex justify-content-center flex-column">
                    <div class="row" style="width: 70%">
                        <label class="form-label">Loan ID:</label>
                        <select class="form-select" id="loanIdInput">
                            <option selected>Choose...</option>
                            <option value="${client.loans[0].loanId}">${client.loanType} - ${client.loans[0].loanId}</option>
                        </select>
                    </div>
                    <div class="row" style="width: 70%">
                        <label class="form-label">Payment Amount:</label>
                        <input type="number" class="form-control" id="payment-amount">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn modalBtn" onclick="updateNewpayment(${client.id})">Confirm Payment</button>
                </div>
            </div>
        </div>
    `;

    const renewLoanBtnModal = document.getElementById('renewLoanBtnModal');
    renewLoanBtnModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Renew Loan</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">   
                        <div class="col-sm-6">
                            <label class="form-label">Loan Amount:</label>
                            <input type="number" class="form-control" id="renewAmount">
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Total Payable:</label>
                            <input type="number" class="form-control" id="renewPayable">
                        </div>
                    </div>
                    <div class="row">   
                        <div class="col-sm-6">
                            <label class="form-label">Loan Date:</label>
                            <input type="date" class="form-control" id="renewDate">
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Loan Due Date:</label>
                            <input type="date" class="form-control" id="renewDueDate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label class="form-label">Loan Term: </label>
                            <select class="form-select" id="renewTerm">
                            <option selected>Choose...</option>
                            <option value="30">30 Days</option>
                            <option value="60">60 Days</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn modalBtn" onclick="applyLoanRenewal(${client.id})">Apply</button>
                </div>
            </div>
        </div>
    `;

    const emergencyLoanModal = document.getElementById('emergencyLoanModal');
    emergencyLoanModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Emergency Loan</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">   
                        <div class="col-sm-6">
                            <label class="form-label">Loan Amount:</label>
                            <input type="number" class="form-control" id="emergAmount">
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Total Payable:</label>
                            <input type="number" class="form-control" id="emergPayable">
                        </div>
                    </div>
                    <div class="row">   
                        <div class="col-sm-6">
                            <label class="form-label">Loan Date:</label>
                            <input type="date" class="form-control" id="emergDate">
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Loan Due Date:</label>
                            <input type="date" class="form-control" id="emergDueDate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label class="form-label">Loan Term: </label>
                            <select class="form-select" id="emergTerm">
                                <option selected>Choose...</option>
                                <option value="60">60 Days</option>
                                <option value="120">120 Days</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Reason: </label>
                            <select class="form-select" id="emergReason">
                                <option selected>Choose...</option>
                                <option value="medical">Medical</option>
                                <option value="house repair">House Repair</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn modalBtn" onclick="applyEmergencyLoan(${client.id})">Apply</button>
                </div>
            </div>
        </div>
    `;

    const loanHistoryModal = document.getElementById('loanHistoryModal');
    loanHistoryModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content" id="loanHistoryModalDialog">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Loan History</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div id="table-container">
                    <table class="table" id="clientLoanHistory">
                        <thead id="table-header">
                            <tr>
                                <th scope="col">Loan ID</th>
                                <th scope="col">Loan Type</th>
                                <th scope="col">Loan Amount</th>
                                <th scope="col">Total Payable</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody id="clienLoanHistoryList"></tbody>
                    </table>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn modalBtn" data-bs-dismiss="modal">Done</button>
                </div>
            </div>
        </div>
    `;

    const updateClientInfo = document.createElement('div');
    updateClientInfo.className ='modal fade';
    updateClientInfo.id = 'updateClientInfo';
    updateClientInfo.setAttribute('tabindex', '-1');
    updateClientInfo.setAttribute('aria-hidden', 'true');
    updateClientInfo.setAttribute('aria-labelledby', 'updateClientInfoLabel');
    updateClientInfo.innerHTML = `
        <div class="modal-dialog" id="updateClientInfoDialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Client Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-sm-6">
                            <label class="form-label">Full Name:</label>
                            <input type="name" class="form-control" id="borrowerNameUpdate">
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Spouse Name:</label>
                            <input type="name" class="form-control" id="spouseNameUpdate">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-4">
                            <label class="form-label">Birth Date:</label>
                            <input type="date" class="form-control" id="borrowerBirthDateUpdate">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Email:</label>
                            <input type="email" class="form-control" id="borrowerEmailUpdate">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Mobile:</label>
                            <input type="text" class="form-control" id="borrowerMobileNumberUpdate" placeholder="+639">
                        </div>
                    </div>
                    <div class="row mt-2 px-2">
                        <label class="form-label">Street Address:</label>
                        <input type="text" class="form-control" id="borrowerAddressUpdate">
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-4">
                            <label class="form-label">Barangay:</label>
                            <select class="form-select" id="borrowerBarangayUpdate">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Municipality:</label>
                            <select class="form-select" id="borrowerMunicipalityUpdate">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Area:</label>
                            <input type="text" class="form-control" id="borrowerAreaUpdate">
                        </div>
                        <div class="row mt-2 px-2">
                            <div class="col-sm-6">
                                <label for="newClientPicture" class="form-label">Client Picture:</label>
                                <input class="form-control" type="file" id="newClientPictureUpdate">
                            </div>
                            <div class="col-sm-6">
                                <label for="newClientDocs" class="form-label">Client ID's:</label>
                                <input class="form-control" type="file" id="newClientDocsUpdate">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn modalBtn">Save changes</button>
                </div>
            </div>
        </div>
    `;
};

function getStatusBadge(status) {
    const statusBadge = document.createElement('span');

    switch (status) {
        case 'active':
            statusBadge.textContent = 'Active';
            statusBadge.className = 'badge text-bg-success';
            break;
        case 'past due':
            statusBadge.textContent = 'Past Due';
            statusBadge.className = 'badge text-bg-danger';
            break;
        case 'paid':
            statusBadge.textContent = 'Paid';
            statusBadge.className = 'badge text-bg-primary';
            break;
        default:
            statusBadge.textContent = 'Unknown';
            statusBadge.className = 'badge text-bg-secondary';
            break;
    }

    return statusBadge;
}




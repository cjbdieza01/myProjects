const fs = require('fs');
const path = require('path');
const twilio = require('twilio');

const accountSid = 'AC91219b6b6315c9cc14b5b1e32f2fd11f';
const authToken = '9dca76ccf45c0e254e8f2119c0d414e3';
const client = twilio(accountSid, authToken);
const clientsPath = path.join(__dirname, 'clients.json');
const forApprovalPath = path.join(__dirname, 'forApprovalClients.json');
const mainRevenuesPath = path.join(__dirname,'mainRevenue.json');
const clientUpdate = path.join(__dirname, 'newClientUpdate.json');
const transactPath = path.join(__dirname, 'transactionLog.json');

function getFormattedDateTime() {
    const currentTimestamp = Date.now();
    const currentDate = new Date(currentTimestamp);
    
    const formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    return formattedDateTime;
}


function sendSMS(to, message) {
    return client.messages.create({
      body: message,
      from: '+12296291687',
      to: to
    });
}

function generateRandomLoanId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    return parseInt(`${timestamp}${randomNum}`, 10);
}

function generateRandomId() {
    const randomNum = Math.floor(100000000 + Math.random() * 900000000);
    return randomNum;
}

function getAllClients() {
    const clientsData = JSON.parse(fs.readFileSync(clientsPath));
    return clientsData.clients;
}

function getAllTransactions() {
    const transactData = JSON.parse(fs.readFileSync(transactPath));
    return transactData.transactions;
}

function getAllRevenues() {
    const revenuesData = JSON.parse(fs.readFileSync(mainRevenuesPath));
    return revenuesData;
}

function getAllNewClients() {
    const clientsData = JSON.parse(fs.readFileSync(clientUpdate));
    return clientsData.newClients;
}

function getClientById(id) {
    const clientsData = JSON.parse(fs.readFileSync(clientsPath));
    return clientsData.clients.find(client => client.id === id);
}

function getAllForApprovalClients() {
    const clientsData = JSON.parse(fs.readFileSync(forApprovalPath));
    return clientsData.forApprovalClients;
}

function getForApprovalClientById(id) {
    const clientsData = JSON.parse(fs.readFileSync(forApprovalPath));
    return clientsData.forApprovalClients.find(client => client.id === id);
}

function declineClientById(clientId) {
    const forApprovalData = JSON.parse(fs.readFileSync(forApprovalPath));
    const clientIndex = forApprovalData.forApprovalClients.findIndex(forApprovalClient => forApprovalClient.id === clientId);

    if (clientIndex === -1) {
        return { status: false, message: 'Client not found' };
    }

    forApprovalData.forApprovalClients.splice(clientIndex, 1);

    fs.writeFileSync(forApprovalPath, JSON.stringify(forApprovalData, null, 2));

    return { status: true, message: 'Client declined successfully' };
}


function addNewForApprovalClient(clientData, response) {
    const forApprovalClientsData = JSON.parse(fs.readFileSync(forApprovalPath));
    const transactData = JSON.parse(fs.readFileSync(transactPath));
    const clientsExist = forApprovalClientsData.forApprovalClients.some(forApprovalClient => forApprovalClient.firstName === clientData.firstName && forApprovalClient.middleName === clientData.middleName && forApprovalClient.lastName === clientData.lastName && forApprovalClient.loanType === clientData.loanType);

    if (clientsExist) {
        response.status(400).json({ status: false, message: 'Client already exists' });
    } else {

        const newClient = { 
            id: generateRandomId(),
            loanType: clientData.loanType,
            loans:[
                { 
                    loanBrand: clientData.loanBrand,
                    loanId: generateRandomLoanId(),
                    date: clientData.loanDate,
                    dueDate: clientData.loanDueDate,
                    amount: clientData.loanAmount,
                    payable: clientData.totalPayable,
                    totalPayments: clientData.totalPayments,
                    runningBalance: clientData.runningBalance,
                    term: clientData.loanTerm,
                    status: clientData.loanStatus, 
                }
            ],
            firstName: clientData.firstName,
            middleName: clientData.middleName,
            lastName: clientData.lastName,
            spouseName: clientData.spouseName,
            birthDate: clientData.birthDate,
            cusEmail: clientData.cusEmail,
            contact: clientData.contact,
            address: clientData.address,
            brgy: clientData.brgy,
            municipality: clientData.municipality,
            cusArea: clientData.cusArea,
            userPicture: clientData.userPicture,
            userDocs: clientData.userDocs,
            assignedCollector: clientData.assignedCollector,
            paymentHistory: [],
            loanHistory: []
        };

        const newTransaction = {
            date: getFormattedDateTime(),
            type: `${clientData.loanType} Application`,
            log: `Client ${clientData.firstName} ${clientData.lastName} applied for ${clientData.loanType} subject for approval.`
        }

        transactData.transactions.push(newTransaction);
        forApprovalClientsData.forApprovalClients.unshift(newClient);
        fs.writeFileSync(forApprovalPath, JSON.stringify(forApprovalClientsData, null, 2));
        fs.writeFileSync(transactPath, JSON.stringify(transactData, null, 2));
        response.status(200).json({ status: true, message: 'Client added successfully for approval' });
    }
}

function approveClient(id) {
    try {
        const forApprovalData = JSON.parse(fs.readFileSync(forApprovalPath));
        const clientsData = JSON.parse(fs.readFileSync(clientsPath));
        const revenueData = JSON.parse(fs.readFileSync(mainRevenuesPath));
        const newClientData = JSON.parse(fs.readFileSync(clientUpdate));
        const transactData = JSON.parse(fs.readFileSync(transactPath));

        const maxNewClients = 10;
        const approvedClientIndex = forApprovalData.forApprovalClients.findIndex(forApprovalClient => forApprovalClient.id === id);

        if (approvedClientIndex !== -1) {
            const approvedClient = forApprovalData.forApprovalClients[approvedClientIndex];
            const revenue = revenueData.revenues[0];
            const newTotalRelease = revenue.totalRelease + approvedClient.loans[0].amount;
            const newDate = new Date();
            const newCLientObj = {
                date : newDate,
                firstName : approvedClient.firstName,
                middleName : approvedClient.middleName,
                lastName : approvedClient.lastName,
                municipality : approvedClient.municipality,
                picture : approvedClient.userPicture
            }

            if (newClientData.newClients.length >= maxNewClients) {
                newClientData.newClients.shift();
            }

            const existingClient = clientsData.clients.find(client =>
                client.id === approvedClient.id && 
                client.firstName === approvedClient.firstName && 
                client.middleName === approvedClient.middleName &&
                client.lastName === approvedClient.lastName &&
                client.loanType === approvedClient.loanType
            );

            if (existingClient) {
                return { status: false, message: 'Client already exists in main database' };
            }

            approvedClient.loans[0].status = 'active';

            const newTransaction = {
                date: getFormattedDateTime(),
                type: 'Loan Approval Status',
                log: `Client ${approvedClient.firstName} ${approvedClient.lastName} ${approvedClient.loanType} has beed approved for the amount of ${approvedClient.loans[0].amount}.`
            }

            clientsData.clients.push(approvedClient);
            forApprovalData.forApprovalClients.splice(approvedClientIndex, 1);
            revenueData.revenues[0].totalRelease = newTotalRelease;
            newClientData.newClients.push(newCLientObj);
            transactData.transactions.push(newTransaction);

            fs.writeFileSync(clientsPath, JSON.stringify(clientsData, null, 2));
            fs.writeFileSync(forApprovalPath, JSON.stringify(forApprovalData, null, 2));
            fs.writeFileSync(mainRevenuesPath, JSON.stringify(revenueData, null, 2));
            fs.writeFileSync(clientUpdate, JSON.stringify(newClientData, null, 2));
            fs.writeFileSync(transactPath, JSON.stringify(transactData, null, 2));

            return { status: true, message: 'Client approved and added to main database' };
        } else {
            return { status: false, message: 'Client not found in approval database' };
        }
    } catch (error) {
        console.error('Error in approveClient:', error);
        return { status: false, message: 'Server Error' };
    }
}

function renewLoanApplication(id, loanData, response) {
    const clientsData = JSON.parse(fs.readFileSync(clientsPath));
    const forApprovalData = JSON.parse(fs.readFileSync(forApprovalPath));
    const transactData = JSON.parse(fs.readFileSync(transactPath));

    const renewClientIndex = clientsData.clients.findIndex(client => client.id === id);

    if (renewClientIndex !== -1) {
        const renewalClient = clientsData.clients[renewClientIndex];

        const activeLoanExists = renewalClient.loans.some(loan => loan.status === 'active');

        if (activeLoanExists) {
            response.status(400).json({ status: false, message: 'Cannot renew loan. An active loan already exists.' });
            return;
        }

        const renewLoan = {
            loanBrand: 'Renew',
            loanId: generateRandomLoanId(),
            date: loanData.loanDate,
            dueDate: loanData.loanDueDate,
            amount: loanData.amount,
            payable: loanData.payable,
            totalPayments: 0,
            runningBalance: loanData.payable,
            term: loanData.term,
            status: 'For Approval',
        };

        const paidLoanExists = renewalClient.loans.some(loan => loan.status === 'paid');

        if (paidLoanExists) {
            const paidLoanIndex = renewalClient.loans.findIndex(loan => loan.status === 'paid');
            const paidLoan = renewalClient.loans.splice(paidLoanIndex, 1)[0];

            if (!renewalClient.loanHistory) {
                renewalClient.loanHistory = [];
            }

            renewalClient.loanHistory.push(paidLoan);
        }

        const newTransaction = {
            date: getFormattedDateTime(),
            type: `${renewLoan.loanBrand}${renewalClient.loanType} Application`,
            log: `Client ${renewalClient.firstName} ${renewalClient.lastName} applied for ${renewLoan.loanBrand} ${renewalClient.loanType} subject for approval.`
        }

        transactData.transactions.push(newTransaction);

        renewalClient.loans.push(renewLoan);
        clientsData.clients.splice(renewClientIndex, 1);
        forApprovalData.forApprovalClients.unshift(renewalClient);
        fs.writeFileSync(forApprovalPath, JSON.stringify(forApprovalData, null, 2));
        fs.writeFileSync(clientsPath, JSON.stringify(clientsData, null, 2));
        fs.writeFileSync(transactPath, JSON.stringify(transactData, null, 2));

        response.status(200).json({ status: true, message: 'Loan application successfully submitted for approval' });
    } else {
        response.status(400).json({ status: false, message: 'Client not found' });
    }
}

function emergencyLoanApplication(id, loanData, response) {
    const clientsData = JSON.parse(fs.readFileSync(clientsPath));
    const forApprovalData = JSON.parse(fs.readFileSync(forApprovalPath));
    const transactData = JSON.parse(fs.readFileSync(transactPath));

    const emergencyClientIndex = clientsData.clients.findIndex(client => client.id === id);

    if (emergencyClientIndex !== -1) {
        const emergencyClient = clientsData.clients[emergencyClientIndex];

        const emergencyLoanExists = clientsData.clients.find(client => 
            client.firstName === emergencyClient.firstName && 
            client.middleName === emergencyClient.middleName &&
            client.lastName === emergencyClient.lastName &&
            client.loanType === 'Emergency Loan'
            );

        if (emergencyLoanExists) {
            response.status(400).json({ status: false, message: 'Cannot file emergency loan. An active emergency loan already exists.' });
            return;
        }

        const emergencyLoan = {
            loanBrand: 'Emergency',
            loanId: generateRandomLoanId(),
            date: loanData.loanDate,
            dueDate: loanData.loanDueDate,
            amount: loanData.amount,
            payable: loanData.payable,
            totalPayments: 0,
            runningBalance: loanData.payable,
            term: loanData.term,
            status: 'For Approval',
            reason: loanData.reason
        };

        const loanExists = emergencyClient.loans.some(loan => loan.loanBrand === 'New' || loan.loanBrand === 'Renew');

        if (loanExists) {
            const loanIndex = emergencyClient.loans.findIndex(loan => loan.loanBrand === 'New' || loan.loanBrand === 'Renew');
            emergencyClient.loans.splice(loanIndex, 1);
        }

        emergencyClient.id = generateRandomId();
        emergencyClient.loanType = 'Emergency Loan';
        emergencyClient.paymentHistory = [];

        const newTransaction = {
            date: getFormattedDateTime(),
            type: `${emergencyClient.loantype} Application`,
            log: `Client ${emergencyClient.firstName} ${emergencyClient.lastName} applied for ${emergencyClient.loanType} subject for approval.`
        }

        emergencyClient.loans.push(emergencyLoan);
        forApprovalData.forApprovalClients.unshift(emergencyClient);
        transactData.transactions.push(newTransaction);
        fs.writeFileSync(forApprovalPath, JSON.stringify(forApprovalData, null, 2));
        fs.writeFileSync(transactPath, JSON.stringify(transactData, null, 2));

        response.status(200).json({ status: true, message: 'Emergency loan application successfully submitted for approval' });
    } else {
        response.status(400).json({ status: false, message: 'Client not found' });
    }
}

function updatePayment(clientId, paymentAmount, loanIdInput) {
    try {
        const revenueData = JSON.parse(fs.readFileSync(mainRevenuesPath));
        const clientsData = JSON.parse(fs.readFileSync(clientsPath));
        const transactData = JSON.parse(fs.readFileSync(transactPath));
        const clientIndex = clientsData.clients.findIndex(client => client.id == clientId);

        if (clientIndex !== -1) {
          const clientObj = clientsData.clients[clientIndex];
          const regularLoanClientIndex = clientsData.clients.findIndex(client => 
            client.firstName === clientObj.firstName &&
            client.middleName === clientObj.middleName &&
            client.lastName === clientObj.lastName &&
            client.loanType !== 'Emergency Loan'
            );

          const loanIndex = clientObj.loans.findIndex(loan => loan.loanId === loanIdInput);

            if (loanIndex !== -1) {
                const loanObj = clientObj.loans[loanIndex];
                const newTotalCollection = revenueData.revenues[0].totalCollection + paymentAmount;
                const newRunningBalance = loanObj.runningBalance - paymentAmount;

                const paymentRecord = {
                    date: getFormattedDateTime(),
                    paymentAmount
                };

                const newTransaction = {
                    date: getFormattedDateTime(),
                    type: 'Payment',
                    log: `Client ${clientObj.firstName} ${clientObj.lastName} made a payment of ₱${paymentAmount}.`
                }
      
                clientObj.paymentHistory.push(paymentRecord);
                loanObj.totalPayments += paymentAmount;
                loanObj.runningBalance = newRunningBalance;
                transactData.transactions.push(newTransaction);

                if (newRunningBalance === 0) {
                    if (loanObj.loanBrand === 'Emergency') {
                        if (regularLoanClientIndex !== -1) {
                            const regularClientObj = clientsData.clients[regularLoanClientIndex];

                            loanObj.status = 'paid';
                            regularClientObj.loanHistory.push(loanObj);
                            clientsData.clients.splice(clientIndex, 1);
                        } else {
                            loanObj.status = 'paid';
                        }
                    } else {
                        loanObj.status = 'paid';
                    }
                }

                revenueData.revenues[0].totalCollection = newTotalCollection;
          
                fs.writeFileSync(clientsPath, JSON.stringify(clientsData, null, 2));
                fs.writeFileSync(mainRevenuesPath, JSON.stringify(revenueData, null, 2));
                fs.writeFileSync(transactPath, JSON.stringify(transactData, null, 2));

                return { status: true, message: 'Payment Updated Successfully' };
            } else {
                return { status: false, message: 'Loan Not Found' };
            }
        } else {
            return { status: false, message: 'Customer Not Found' };
        }


    }   catch (error) {
        console.error('Error parsing file: ', error);
        return { status: false, message: 'Invalid Format' };
      } 
}




module.exports = {
    getAllClients,
    getClientById,
    getAllTransactions,
    getAllForApprovalClients,
    getForApprovalClientById,
    declineClientById,
    addNewForApprovalClient,
    approveClient,
    updatePayment,
    getAllRevenues,
    getAllNewClients,
    sendSMS,
    renewLoanApplication,
    emergencyLoanApplication,
    generateRandomId
};



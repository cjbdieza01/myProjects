const clientModel = require('../models/client-model');

function sendSmsNotification(request, response) {
    const { to, message } = request.body;

    clientModel.sendSMS(to, message)
        .then(() => {
            response.json({ success: true, message: 'SMS sent.' });
        })
        .catch(error => {
            console.error(error);
            response.status(500).json({ success: false, message: 'Error sending SMS notification.' });
        });
}


function getAllClientsController(request, response) {
    const clients = clientModel.getAllClients();
    response.status(200).json(clients);
}

function getAllTransactionsController(request, response) {
    const transactions = clientModel.getAllTransactions();
    response.status(200).json(transactions);
}

function getAllRevenuesController(request, response) {
    const revenues = clientModel.getAllRevenues();
    response.status(200).json(revenues);
}
function getAllNewClientsController(request, response) {
    const newClients = clientModel.getAllNewClients();
    response.status(200).json(newClients);
}

function getClientByIdController(request, response) {
    const clientID = Number(request.params.id);
    const client = clientModel.getClientById(clientID);

    if (client) {
        response.status(200).json(client);
    } else {
        response.status(400).json({ status: false, message: 'Client not found' });
    }
}

function getAllForApprovalClientsController(request, response) {
    const forApprovalClients = clientModel.getAllForApprovalClients();
    response.status(200).json(forApprovalClients);
}

function getForApprovalClientByIdController(request, response) {
    const clientID = Number(request.params.id);
    const client = clientModel.getForApprovalClientById(clientID);

    if (client) {
        response.status(200).json(client);
    } else {
        response.status(400).json({ status: false, message: 'Client not found' });
    }
}

function declineClientByIdController(request, response) {
    const clientID = Number(request.params.id);
    const result = clientModel.declineClientById(clientID);

    if (result.status) {
        response.status(200).json(result);
    } else {
        response.status(400).json(result);
    }
}


function addNewForApprovalClientController(request, response) {
    const { id, loans, ...client } = request.body;
    clientModel.addNewForApprovalClient(client, response);
    response.status(200).json({ status: true, message: 'Client added successfully' });
}

function approveClientController(request, response) {
    const clientId = Number(request.params.id);
    const result = clientModel.approveClient(clientId);

    if (result.status) {
        response.status(200).json(result);
    } else {
        response.status(400).json(result);
    }
}

function renewLoanApplicationController(request, response) {
    const clientId = Number(request.params.id);
    const { ...loanData } = request.body;
    clientModel.renewLoanApplication(clientId, loanData, response);
    response.status(200).json({ status: true, message: 'Loan application successfully submitted for approval' });
}

function emergencyLoanApplicationController(request, response) {
    const clientId = Number(request.params.id);
    const { ...loanData } = request.body;
    clientModel.emergencyLoanApplication(clientId, loanData, response);
    response.status(200).json({ status: true, message: 'Emergency loan application successfully submitted for approval' });
}

function updatePaymentController(request, response) {
    const clientId = Number(request.params.id);
    const { paymentAmount, loanIdInput } = request.body;

    try {
        const message = clientModel.updatePayment(clientId, paymentAmount, loanIdInput);
        response.status(200).json({ status: true, message});
    } catch (error) {
        response.status(500).json({ status: false, message: error });
    }
  }



module.exports = {
    getAllClientsController,
    getClientByIdController,
    getAllTransactionsController,
    getAllForApprovalClientsController,
    getForApprovalClientByIdController,
    declineClientByIdController,
    addNewForApprovalClientController,
    approveClientController,
    updatePaymentController,
    getAllRevenuesController,
    getAllNewClientsController,
    sendSmsNotification,
    renewLoanApplicationController,
    emergencyLoanApplicationController
};

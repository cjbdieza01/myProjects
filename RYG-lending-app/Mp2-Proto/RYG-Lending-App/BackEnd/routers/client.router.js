const express = require('express');

const clientController = require('../controllers/client.controller');

const clientRouter = express.Router();  

const { getAllClientsController, 
    getClientByIdController, 
    getAllForApprovalClientsController, 
    getAllTransactionsController,
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
} = clientController;

clientRouter.get('/get-clients', getAllClientsController);
clientRouter.get('/get-clients/:id', getClientByIdController);
clientRouter.get('/get-all-transactions', getAllTransactionsController);
clientRouter.get('/get-for-approval-clients', getAllForApprovalClientsController);
clientRouter.get('/get-for-approval-clients/:id', getForApprovalClientByIdController);
clientRouter.delete('/decline-client/:id', declineClientByIdController);
clientRouter.post('/add-clients', addNewForApprovalClientController);
clientRouter.post('/approve-client/:id', approveClientController);
clientRouter.post('/update-payment/:id', updatePaymentController);
clientRouter.get('/get-all-revenues', getAllRevenuesController);
clientRouter.get('/get-all-new-clients', getAllNewClientsController);
clientRouter.post('/send-sms', sendSmsNotification);
clientRouter.post('/renew-loan/:id', renewLoanApplicationController);
clientRouter.post('/emergency-loan/:id', emergencyLoanApplicationController);

module.exports = clientRouter;
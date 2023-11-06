
function updateNewpayment(id) {
    const paymentAmount = parseInt(document.getElementById('payment-amount').value);
    const loanIdInput = parseInt(document.getElementById('loanIdInput').value);

    fetch(`http://localhost:3000/clients/update-payment/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({ paymentAmount, loanIdInput })
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    }).then(data => {
        alert('Payment updated successfully');
        return false;
    }).catch(error => {
        console.error(`Error: ${error}`);
    });

    return false;
}




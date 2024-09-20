document.getElementById('transfer-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentBalance = getTextFieldValueById('amount');    
    const pinValue = getInputFieldValueById('pin-number3');
    const transferAmount = getInputFieldValueById('transfer-amount');
    const accountNumber = document.getElementById('account-number').value;

    if(isNaN(transferAmount)){
        alert('Failed to Transfer The Amount.');
        return;
    }
    if(accountNumber.length === 11 && accountNumber.startsWith('01')){
        if(pinValue === 1234){
            if(currentBalance >= transferAmount){
                let remaining = currentBalance - transferAmount;
                document.getElementById('amount').innerText = remaining;
                document.getElementById('transfer-amount').value = '';
                document.getElementById('pin-number3').value = '';
                document.getElementById('account-number').value = '';
                alert(`${transferAmount}Tk is Successfully Transfered`);
                addTransaction('Transfer Money: ', transferAmount ,'./images/money.png');
            }else{
                alert('Insufficient Balance');
            }
        }else{
            alert('Failed to Transfer The Amount.')
        }
    }
    else{
        alert('Invalid User Account Number');
    }

    
})
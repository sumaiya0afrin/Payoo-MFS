document.getElementById('pay-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentBalance = getTextFieldValueById('amount');    
    const pinValue = getInputFieldValueById('pin-number4');
    const payAmount = getInputFieldValueById('pay-amount');
    const BillerNumber = document.getElementById('biller-number').value;
    const selectedBank = document.getElementById('bank-select').value;

    if(isNaN(payAmount)){
        alert('Failed to Pay The Amount.');
        return;
    }
    if(BillerNumber.length === 11 && BillerNumber.startsWith('01') && selectedBank !== " "){
        if(pinValue === 1234){
            if(currentBalance >= payAmount){
                let remaining = currentBalance - payAmount;
                document.getElementById('amount').innerText = remaining;
                document.getElementById('pay-amount').value = '';
                document.getElementById('pin-number4').value = '';
                document.getElementById('biller-number').value = '';
                alert(`${payAmount}Tk is Successfully Paid`);
                addTransaction('Paid Money: ', payAmount ,'./images/purse.png');
            }else{
                alert('Insufficient Balance');
            }
        }else{
            alert('Failed to Paid The Amount.')
        }
    }
    else{
        alert('Invalid Input. Please Ensure all the Fields Filled Out');
    }

    
})
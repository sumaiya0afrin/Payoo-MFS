
document.getElementById('addmoney-btn').addEventListener('click', (event)=>{
    event.preventDefault();

    const currentBalance = getTextFieldValueById('amount');    
    const pinValue = getInputFieldValueById('pin-number');
    const addAmount = getInputFieldValueById('add-amount');

        if(pinValue === 1234){
            let total = currentBalance + addAmount;
            document.getElementById('amount').innerText = total;

            document.getElementById('add-amount').value = '';
            document.getElementById('pin-number').value = '';
        }
        else{
            alert('Failed to add amount.')
        }
    
})
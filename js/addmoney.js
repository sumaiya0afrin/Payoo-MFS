
document.getElementById('addmoney-btn').addEventListener('click', (event)=>{
    event.preventDefault();

    const currentBalance = getTextFieldValueById('amount');    
    const pinValue = getInputFieldValueById('pin-number');
    const addAmount = getInputFieldValueById('add-amount');

    if(isNaN(addAmount)){
        alert('Failed to add amount.');
        return;
    }

        if(pinValue === 1234){
            let total = currentBalance + addAmount;
            document.getElementById('amount').innerText = total;

            document.getElementById('add-amount').value = '';
            document.getElementById('pin-number').value = '';

            addTransaction('Added Money: ',addAmount ,'./images/add.png');
        }
        else{
            alert('Failed to add amount.')
        }
    
})
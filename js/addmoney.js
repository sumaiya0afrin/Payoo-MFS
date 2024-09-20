
document.getElementById('addmoney-btn').addEventListener('click', (event)=>{
    event.preventDefault();

    const currentBalance = getTextFieldValueById('amount');    
    const pinValue = getInputFieldValueById('pin-number');
    const addAmount = getInputFieldValueById('add-amount');
    const BankNumber = document.getElementById('bank-number').value;
    const selectedBank = document.getElementById('add-bank').value;

    if(isNaN(addAmount)){
        alert('Failed to add amount.');
        return;
    }
    if(BankNumber.length === 11 && BankNumber.startsWith('01') && selectedBank !== " "){
        if(pinValue === 1234){
            let total = currentBalance + addAmount;
            document.getElementById('amount').innerText = total;

            document.getElementById('add-amount').value = '';
            document.getElementById('pin-number').value = '';
            document.getElementById('add-bank').value = '';
            document.getElementById('bank-number').value = '';
            alert(`${addAmount}Tk Is Successfully Added`);
            addTransaction('Added Money: ',addAmount ,'./images/add.png');
        }
        else{
            alert('Failed to add amount.')
        }
    }else{
        alert('Invalid Input');
    }
})
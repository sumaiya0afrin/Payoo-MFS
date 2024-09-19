
document.getElementById('cashout-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentBalance = getTextFieldValueById('amount'); 
    const pinValue = getInputFieldValueById('pin-number2');
    const cashout = getInputFieldValueById('cashout');
 
        if(pinValue === 1234){
            if(currentBalance >= cashout){
                let remaining = currentBalance - cashout;
                document.getElementById('amount').innerText = remaining;
                document.getElementById('cashout').value = '';
                document.getElementById('pin-number2').value = '';
            }else{
                alert('Insufficient Balance');
            }
        }
        else{
            alert('Failed to withdraw amount.')
        }
    
})
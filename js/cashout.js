
document.getElementById('cashout-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentBalance = getTextFieldValueById('amount'); 
    const pinValue = getInputFieldValueById('pin-number2');
    const cashout = getInputFieldValueById('cashout');
    const agentNumber = document.getElementById('agent-number').value;

    if(isNaN(cashout)){
        alert('Failed to withdraw.');
        return;
    }
 
        if(pinValue === 1234 && agentNumber.length === 11 && agentNumber.startsWith('01')){
            if(currentBalance >= cashout){
                let remaining = currentBalance - cashout;
                document.getElementById('amount').innerText = remaining;
                document.getElementById('agent-number').value = '';
                document.getElementById('cashout').value = '';
                document.getElementById('pin-number2').value = '';
                alert(`${cashout}Tk is Successfully Withdraw`);
                addTransaction('Withdraw Money: ', cashout ,'./images/send.png');
            }else{
                alert('Insufficient Balance');
            }
        }
        else{
            alert('Failed to withdraw amount.')
        }
    
})
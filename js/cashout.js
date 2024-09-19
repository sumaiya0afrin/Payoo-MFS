
document.getElementById('cashout-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentAmount = document.getElementById('amount');
    let currAmount = Number(currentAmount.innerText);
    const agent = document.getElementById('agent-number');
    const agentNumber = agent.value;
    const pin = document.getElementById('pin-number');
    const pinNumber = pin.value;

    const cash = document.getElementById('cashout');
    const cashout = cash.value;
 
        if(pinNumber ==='1234' && agentNumber !== " "){
            const amount = Number(cashout);
            if(currAmount >= amount){
                let remaining = currAmount - amount;
                console.log(remaining);
                currentAmount.innerText = remaining;
                pin.value = '';
                cash.value = '';
            }else{
                alert('Insufficient Balance');
            }
            
        }
        else{
            alert('Failed to withdraw amount.')
        }
    
})
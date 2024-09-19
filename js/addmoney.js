
document.getElementById('addmoney-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentAmount = document.getElementById('amount');

    const bankNumber = document.getElementById('bank-number');
    const bank = bankNumber.value;
    const pin = document.getElementById('pin-number');
    const pinNumber = pin.value;

    const add = document.getElementById('add-amount');
    const addAmount = add.value;
    let currAmount = Number(currentAmount.innerText);
        if(pinNumber ==='1234'){
            const amount = Number(addAmount);
            let total = currAmount + amount;
            console.log(total);
            currentAmount.innerText = total;
            pin.value = '';
            add.value = '';
        }
        else{
            alert('Failed to add amount.')
        }
    
})
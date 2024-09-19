document.getElementById('add-money-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    showSection('add-money-form');
})

document.getElementById('cashout-button').addEventListener('click', (event)=>{
    event.preventDefault();
    showSection('cashout-form');
    
})

document.getElementById('transfer-button').addEventListener('click', (event)=>{
    event.preventDefault();
    showSection('transfer-form');
    
})

document.getElementById('bonus-button').addEventListener('click', (event)=>{
    event.preventDefault();
    showSection('bonus-form');
    
})

document.getElementById('pay-button').addEventListener('click', (event)=>{
    event.preventDefault();
    showSection('pay-bill-form');
    
})

document.getElementById('transaction-button').addEventListener('click', (event)=>{
    event.preventDefault();
    showSection('transaction-history');
    
})
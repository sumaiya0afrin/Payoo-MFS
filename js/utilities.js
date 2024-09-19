function getInputFieldValueById(id){
    const input = document.getElementById(id).value;
    const inputValue = Number(input);
    return inputValue;
}

function getTextFieldValueById(id){
    const currentAmount = document.getElementById(id).innerText;
    const currAmount = Number(currentAmount);
    return currAmount;
}

function showSection(id){
    document.getElementById('latest-payment').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transfer-form').classList.add('hidden');
    document.getElementById('bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    // document.getElementById(btnId).classList.add('active');
}
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
// Function to get the current time in a formatted way
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Add leading zero
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    return `Today ${hours}:${minutes} ${ampm}`;
  }

function addTransaction(title, amount, imgSrc){
    const time = getCurrentTime();

    const newTransaction = `
            <div class="card flex-row lg:card-side bg-base-100 border">
                <figure class="pl-6">
                <img class="bg-gray-200 p-5 rounded-full" src=${imgSrc} alt="Transaction Image" />
                </figure>
                <div class="card-body p-5">
                <h2 class="card-title">${title} ${amount} Tk</h2>
                <p>${time}</p>
                </div>
            </div>
            `;

    document.getElementById('transaction-list').insertAdjacentHTML('beforeend', newTransaction);
}
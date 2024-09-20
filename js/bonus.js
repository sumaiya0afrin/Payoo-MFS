let bonusClaimed = false;
document.getElementById('bonus-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    const currentBalance = getTextFieldValueById('amount');  
    const couponCode = document.getElementById('coupon-code').value;

    if (bonusClaimed) {
        alert('You have already claimed your bonus.');
        return;
    }

    if(couponCode === 'payoo123'){
       const newBalance = currentBalance + 100 ;
       document.getElementById('amount').innerText = newBalance;

        document.getElementById('coupon-code').value = '';
        alert('Congratulation! You Get Bonus');
        bonusClaimed = true;

    } else{
        alert('Please Enter The Correct Coupon Code');
    }
})
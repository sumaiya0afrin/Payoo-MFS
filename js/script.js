document.getElementById('login_btn').addEventListener('click', (event)=>{
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if(phoneNumber === '0123456789' && pinNumber=== "1234"){
            console.log('you are logged in')
            window.location.href = './home.html'
        }else{
            alert('Wrong Input')
        }
})
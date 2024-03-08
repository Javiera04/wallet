//muestra alertas al momento de cambiar de ventanas, redirige a traves de javascript
const deposit = document.getElementById('navDeposit');
const sendmoney = document.getElementById('navSendmoney');
const transactions = document.getElementById('navTransactions');

//botones menu.html
deposit.addEventListener('click', () => {
    $('#alertDeposit').fadeIn();
    setTimeout(function(){
        location.href = './../html/deposit.html';
    },2000); 
})

sendmoney.addEventListener('click', () => {
    $('#alertSendMoney').fadeIn();
    setTimeout(function(){
        location.href = './../html/sendmoney.html';
    },2000);   
})

transactions.addEventListener('click', () => {
    $('#alertTransactions').fadeIn();
    setTimeout(function(){
        location.href = './../html/transactions.html';
    },2000);    
})


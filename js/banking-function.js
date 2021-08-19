function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmounText = inputField.value;
    const amountValue = parseFloat(inputAmounText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + amount;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
  /*   
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText); */
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + amount;
    } else {
        balanceTotal.innerText = previousBalance - amount;
   }
}
// handle deposit button
document.getElementById('deposit-button').addEventListener('click',
 function(){
    // update balance 
     const depositAmount = getInputValue('deposit-amount');
     if (depositAmount > 0) {
        updateTotalField('deposit-total',depositAmount);     
        updateBalance(depositAmount, true);   
     }
});

// handle withdrawal button
document.getElementById('withdrawal-button').addEventListener('click', 
function(){
    // get and update withdrawal total and update total balance 
    const withdrawalAmount = getInputValue('withdrawal-amount');
    const CurrentBalance = getCurrentBalance();
    if (withdrawalAmount > 0 && withdrawalAmount <= CurrentBalance) {
        updateTotalField('withdrawal-total',withdrawalAmount);
        updateBalance(withdrawalAmount, false);   
    }
    if (withdrawalAmount > CurrentBalance) {
        console.log(' Oppss!! you cannot withdrawal money bacause you dont have enough money');
    }
}) 

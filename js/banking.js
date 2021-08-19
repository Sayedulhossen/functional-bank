/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmounText = inputField.value;
    const amountValue = parseFloat(inputAmounText);
    // clear input field
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText) 
    totalElement.innerText = previousTotal + amount;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + amount;
    } else {
        balanceTotal.innerText = previousBalance - amount;
   }
}





// handle deposit button
document.getElementById('deposit-button').addEventListener('click',
 function(){
 /*    const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    

    // get and update deposit total

  /*   const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText) 
    depositTotal.innerText = previousDepositTotal + depositAmount; */
   
    
    // update balance 
    

    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance + depositAmount;*/
     const depositAmount = getInputValue('deposit-amount');
     if (depositAmount > 0) {
        updateTotalField('deposit-total',depositAmount);     
        updateBalance(depositAmount, true);   
     }
});

// handle withdrawal button
document.getElementById('withdrawal-button').addEventListener('click', 
function(){
    /* 
    const withdrawalInput = document.getElementById('withdrawal-amount');
    const withdrawalAmountText = withdrawalInput.value;
    const withdrawalAmount = parseFloat(withdrawalAmountText); */
    


    // get and update withdrawal total

  /*  
   const withdrawalTotal = document.getElementById('withdrawal-total');
    const withdrawalTotalText = withdrawalTotal.innerText;
    const previousWithdrawalTotal = parseFloat(withdrawalTotalText);
    withdrawalTotal.innerText = previousWithdrawalTotal + withdrawalAmount; */
    

    // update balance after withdrawal

    /*
     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawalAmount; */
    const withdrawalAmount = getInputValue('withdrawal-amount');
    if (withdrawalAmount > 0) {
        updateTotalField('withdrawal-total',withdrawalAmount);
        updateBalance(withdrawalAmount, false);   
    }
}) 

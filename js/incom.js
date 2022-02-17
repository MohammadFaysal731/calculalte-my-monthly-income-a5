
// All expenses input values
function getInputValues(inputs) {
    const allInputs = document.getElementById(inputs + '-input');
    const allNumber = parseFloat(allInputs.value);
    // clear inputs fields
    allInputs.value = '';
    if (isNaN(allNumber) || allNumber > 0) {
        return alert("Pleas full fill the all input field, and don't give string or nagative numbers.only give positive number")
    }
    else {
        return allNumber;
    }

}


// calculate handel by eventlistener 
document.getElementById('calculate-btn').addEventListener('click', function () {
    //    Income
    const incomeAmount = getInputValues('income');
    // Expenses 
    const footNumber = getInputValues('foot');
    const rentNumber = getInputValues('rent');
    const clothesNumber = getInputValues('clothes');
    if (totalExpenses > 0 || newBalance > 0) {
        // Total expenses 
        const tottalExpenses = document.getElementById('tottal-expenses');
        const totalExpenses = footNumber + rentNumber + clothesNumber;
        tottalExpenses.innerText = totalExpenses;
        // calculate balance 
        const balance = document.getElementById('balance');
        const newBalance = incomeAmount - totalExpenses;
        balance.innerText = newBalance;
    }
});

// /* document.getElementById('income-save').addEventListener('click', function () {
//     /*  const saveIncome = document.getElementById('save-input');
//      const saveNumber = parseFloat(saveIncome.value);
//      saveIncome.value = saveNumber; */
// const saveIncome = getInputValues('save');
// const newBalance = document.getElementById('balance');
// const savedAmount = saveIncome / newBalance;
// newBalance.value = savedAmount;
// const savingAmount = document.getElementById('saving-amount');
// savingAmount.innerText =
// }); * /   

// All expenses input values
function getInputValues(inputs) {
    const allInputs = document.getElementById(inputs + '-input');
    const allNumber = parseFloat(allInputs.value);
    if (isNaN(allNumber) || allNumber < 0) {
        return alert("Please refresh this pages, full fill the all input field, and don't give string or nagative numbers.only give positive number")
    }
    else {
        return allNumber;
    }
};

// calculate handel by eventlistener 
document.getElementById('calculate-btn').addEventListener('click', function () {

    //    Income
    const incomeAmount = getInputValues('income');
    // Expenses 
    const footNumber = getInputValues('foot');
    const rentNumber = getInputValues('rent');
    const clothesNumber = getInputValues('clothes');
    // Total expenses 
    const tottalExpenses = document.getElementById('tottal-expenses');
    const totalExpenses = footNumber + rentNumber + clothesNumber;

    // calculate balance 
    if (incomeAmount < totalExpenses) {
        return alert('Your income is small your expenses');
    }

    else {
        tottalExpenses.innerText = totalExpenses;
        const balance = document.getElementById('balance');
        const newBalance = incomeAmount - totalExpenses;
        balance.innerText = newBalance;
    }
});
function savingInput() {
    const saveInput = getInputValues('save');
    const incomeInput = getInputValues('income');
    const savingAmount = incomeInput / saveInput;
    const savedAmount = savingAmount;

    if (isNaN(savingAmount) || savingAmount < 0) {
        return alert("Please refresh this pages, full fill the all input field, and don't give string or nagative numbers.only give positive number")
    }
    else {
        return savedAmount;
    }
};
// saving amount of my income 
document.getElementById('income-save').addEventListener('click', function () {
    const savedAmount = document.getElementById('saving-amount');
    savedAmount.innerText = savingInput();
}); 
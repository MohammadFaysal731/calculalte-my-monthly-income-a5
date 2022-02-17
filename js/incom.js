
// All expenses input values
function getInputValues(inputs) {
    const allInputs = document.getElementById(inputs + '-input');
    const allNumber = parseInt(allInputs.value);
    // clear inputs fields
    allInputs.value = '';
    return allNumber;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    //    Income
    const incomeNumber = getInputValues('income');
    // Expenses 
    const footNumber = getInputValues('foot');
    const rentNumber = getInputValues('rent');
    const clothesNumber = getInputValues('clothes');
    const tottalExpenses = document.getElementById('tottal-expenses');
    const totalExpenses = footNumber + rentNumber + clothesNumber;
    tottalExpenses.innerText = totalExpenses;
    // calculate balance 
    const balance = document.getElementById('balance');
    const newBalance = incomeNumber - totalExpenses;
    balance.innerText = newBalance;


});
function getInputValue(elementID) {
    const inputValue = parseFloat(document.getElementById(elementID).value);
    return inputValue;
}

function setCalculatedValue(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}

// function resetFields() {
//     document.getElementById('incomeInputField').value = '';
//     document.getElementById('foodInputField').value = '';
//     document.getElementById('rentInputField').value = '';
//     document.getElementById('clothesInputField').value = '';
//     document.getElementById('saveInputField').value = '';
// }

function expensesNbalance(operation) {
    const income = getInputValue('incomeInputField');
    const food = getInputValue('foodInputField');
    const rent = getInputValue('rentInputField');
    const clothes = getInputValue('clothesInputField');

    if (!isNaN(income) && !isNaN(food) && !isNaN(rent) && !isNaN(clothes) && income >= 0 && food >= 0 && rent >= 0 && clothes >= 0) {
        const totalExpenses = food + rent + clothes;
        const balance = income - totalExpenses;

        if (totalExpenses > income) {
            alert("You can't spend what you don't have...!")
        }
        else {
            if (operation === 'calculate') {

                setCalculatedValue('total-expenses', totalExpenses);
                setCalculatedValue('balance', balance)
                document.getElementById('saveInputField').value = '';
            }
            else if (operation === 'save') {
                const save = getInputValue('saveInputField');

                if (!isNaN(save) && save >= 0 && save <= 100) {
                    const saveAmount = save * 0.01 * income;
                    if (saveAmount > balance) {
                        alert("Dude you don't have that amount of money to save...!");
                    }
                    else {
                        setCalculatedValue('saveAmount', saveAmount);

                        const remAmount = balance - saveAmount;
                        setCalculatedValue('remBalance', remAmount);
                    }
                }
                else {
                    alert('Please enter positive numeric <=100 value...!');
                }
            }
        }
    }
    else {
        alert('Please enter positive numeric value...!');
    }

}

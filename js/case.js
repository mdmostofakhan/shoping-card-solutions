/*
1. add event listener to the case pluse button 
2. get the value unside the case number field (input field);
3. canvaert the numver to an integer
4. calculate the new case number
5. set the value to the case number field

*/

function updateCaseNumber(isIncrese) {
    const caseNumberField = document.getElementById('case-plus-field');
    const caseNumberFieldStriong = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldStriong);

    let newCaseNumber ;
    if (isIncrese === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber -1 ;
    }
  
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseNumberPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

 
    updateCaseNumberPrice(newCaseNumber);
    subTotalCalculated();

})

document.getElementById('btn=case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseNumberPrice(newCaseNumber);
    subTotalCalculated();
})
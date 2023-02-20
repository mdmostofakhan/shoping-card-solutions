function getTextElementValueById(elementId) {
    const phoneNumberTotal = document.getElementById(elementId)
    const phoneNumberElementString = phoneNumberTotal.innerText;
    const phoneNumberElement = parseInt(phoneNumberElementString);
    return phoneNumberElement;

}

function setTextElementValueById(elementId, value) {
    const subElemetTotal = document.getElementById(elementId);
    subElemetTotal.innerText = value;

}

function subTotalCalculated() {
    const newPhoneTotalNumber = getTextElementValueById('phone-total');
    const newCaseTotalNumber = getTextElementValueById('case-total');
    
    const currentSubTotal = newCaseTotalNumber + newPhoneTotalNumber;
    setTextElementValueById('sub-total', currentSubTotal);

     // calculate tax
    const taxElementString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat (taxElementString);

    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('total-field', finalAmount)


}


function updataPhoneNumber(isIncrease) {
    const phoneNumber = document.getElementById('phone-number-field');
    const phoneNumberValueString = phoneNumber.value;
    const phoneNumberValue = parseInt(phoneNumberValueString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = phoneNumberValue + 1; 
    }

    else {
        newPhoneNumber = phoneNumberValue - 1;
    }
    phoneNumber.value = newPhoneNumber;
    return newPhoneNumber;
}

function updataTotalPricePhone(newPhoneNumber) {
    const phoneNumberPrice = newPhoneNumber * 1219;
    const phoneNumberTotal = document.getElementById('phone-total')
    phoneNumberTotal.innerText = phoneNumberPrice;
    
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    
    const newPhoneNumber = updataPhoneNumber(true);

    updataTotalPricePhone(newPhoneNumber);

    // calculated
    subTotalCalculated();
 
   
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updataPhoneNumber(false);

    updataTotalPricePhone(newPhoneNumber);
    
    subTotalCalculated();
})
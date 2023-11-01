const price = 2000
const discountSelect = document.getElementById('discount-choice');
const finalPriceText = document.getElementById('final-price');
const quantityInput = document.getElementById('quantity-tickets');
const confirmBtn = document.getElementById('confirm-button');
const emailInput = document.getElementById('form-email');
const resetBtn = document.getElementById('reset-button');

discountSelect.addEventListener('input', finalPriceCalculation);
quantityInput.addEventListener('input', finalPriceCalculation);
confirmBtn.addEventListener('click', () => {
    finalPriceText.textContent = `Gracias por confirmar! Te enviamos un email a ${emailInput.value}`;
});
resetBtn.addEventListener('click', resetForm);

function finalPriceCalculation() {
    let discount = discountSelect.value;
    let quantityTickets = quantityInput.value;
    let priceWithDiscount = price - (price * discount);
    let finalPrice = priceWithDiscount * quantityTickets;

    
    console.log(discount);
    console.log(quantityTickets);
    console.log(priceWithDiscount);
    console.log(finalPrice);

    finalPriceText.textContent = `Total: $${finalPrice.toFixed(2)}`;
}

function resetForm() {
    discountSelect.value = 'Elegir';
    finalPriceText.textContent = 'Total: $';
    quantityInput.value = undefined;
}
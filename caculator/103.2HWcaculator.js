function priceCalculation(price, qty) {
    return price * qty;
}

function taxCalculation(subtotal, taxRate) {
    return subtotal * taxRate;
}

function displayInformation(productName, price, qty, subtotal, taxAmount, totalPrice) {
    console.log("--- Receipt ---");
    console.log("Product Name:", productName);
    console.log("Price: $" + price.toFixed(2));
    console.log("Quantity:", qty);
    console.log("Subtotal: $" + subtotal.toFixed(2));
    console.log("Tax Amount: $" + taxAmount.toFixed(2));
    console.log("Total Price (incl. taxes): $" + totalPrice.toFixed(2));
}

function main() {
    // Taking input from the user (you can use browser prompts or get input from any other source)
    var productName = prompt("Enter the product's name:");
    var price = parseFloat(prompt("Enter the price of the product:"));
    var qty = parseInt(prompt("Enter the quantity:"));
    var taxRate = 0.08; // Assuming a tax rate of 8%, you can change this as per your requirement

    // Calculating Subtotal and Tax Amount
    var subtotal = priceCalculation(price, qty);
    var taxAmount = taxCalculation(subtotal, taxRate);

    // Calculating Total Price
    var totalPrice = subtotal + taxAmount;

    // Displaying the information
    displayInformation(productName, price, qty, subtotal, taxAmount, totalPrice);
}

main();

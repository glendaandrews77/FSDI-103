function calculate(){

    let num1 = Number(prompt("Please enter the 1st number"));
    let num2 = Number(prompt("Please enter the 2nd number"));
    let option = prompt("Please enter the option + - * /");

    if (option === "+") {
        let sum = num1 + num2;
        document.getElementById("result").innerHTML = `<p> ${num1} + ${num2} = ${sum}</p>`;
    } else if (option === "-") {
        let diff = num1 - num2;
        document.getElementById("result").innerHTML = `<p> ${num1} - ${num2} = ${diff}</p>`;
    } else if (option === "*") {
        let product = num1 * num2;
        document.getElementById("result").innerHTML = `<p> ${num1} * ${num2} = ${product}</p>`;
    } else if (option === "/") {
        if (num2 === 0) {
            document.getElementById("result").innerHTML = "<p>You cannot divide by zero.</p>";
        } else {
            let quotient = num1 / num2;
            document.getElementById("result").innerHTML = `<p> ${num1} / ${num2} = ${quotient}</p>`;
        }
    } else {
        document.getElementById("result").innerHTML = "<p>Invalid option.</p>";
    }
}
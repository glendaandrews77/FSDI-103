function getUserAge(){
    let userBirthYear=Number(prompt("Enter your birth year"));
    let todayDate = new Date();
    let currentYear = todayDate.getFullYear();
    let age = currentYear - userBirthYear;
    console.log("your current age is " + age);
    displayAge(age);
    errorMessage("404, Page not found");


    function displayAge(age) {
        let ageElement = document.getElementById("user-age");
        ageElement.textContent = 'User age: ${age}';

    }

//please create the function that catch the error messages

function errorMessage(title, message) {
    console.log('${title, ${message}');
}
}

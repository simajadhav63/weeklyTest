
function calculateAge() {
    var birthdateInput = document.getElementById("birthdate").value;
    var birthdate = new Date(birthdateInput);
    var currentDate = new Date();
    var difference = currentDate - birthdate;
    var ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("age").textContent = "Your age is " + ageInYears + " year old";
}

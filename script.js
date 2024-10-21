function checkNumber() {
    let number = document.getElementById("inputValue").value;
    let result = document.getElementById("result");

    if (number === '') {
        result.textContent = "Please enter a number!";
    } else if (number % 2 === 0) {
        result.textContent = number + " is Even"; 
    } else {
        result.textContent = number + " is Odd";  
    }
}

function resetFields() {
    document.getElementById('inputValue').value = ""; // Clear input field
    document.getElementById('result').innerHTML = ""; // Clear result section
}
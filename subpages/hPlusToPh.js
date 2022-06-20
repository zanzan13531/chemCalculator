function hPlusToPh() {

    var number1 = document.getElementById('numberField1').value;

    number1 = new BigNumber(number1);

    var resultBox = document.getElementById('result');

    if (number1 == NaN) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        console.log(number1.toNumber());
        console.log(Math.log(10, number1.toNumber()));
        console.log(-Math.log(10, number1.toNumber()));
        resultBox.innerHTML = -Math.log(10, number1.toNumber());
    }

}
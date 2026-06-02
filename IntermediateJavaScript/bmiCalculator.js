//Write a function
//It should output/return a different message according to the BMI
    //BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
    //BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
    //BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
//Do not alert or console.log
//The function should take two inputs, weight and height.
//The formula is bmi = weight / height ^ 2

function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + " , so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + " so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + "so you are overweight.";
    }
}

bmiCalculator();


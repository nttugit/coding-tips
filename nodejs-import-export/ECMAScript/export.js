export const addTwoNumbers = (num1, num2) => num1 + num2;

/**
 * The formula for BMI is weight in kilograms 
 * divided by height in meters squared
 * @param {*} weight in kilograms
 * @param {*} height in centimeters
 */
export const calculateBMI = (weight, height) => {
    height /= 100;
    const result = weight / (height * height);
    return result.toFixed(2);
};

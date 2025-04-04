// stringCalculator.js
function add(numbers) {
    //basic implementation
    if (numbers === '') return 0;

    // Replace newlines with commas

    let delimiter = ',';
    let numbersString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
        const delimiterSection = numbers.split('\n')[0];
        numbersString = numbers.substring(numbers.indexOf('\n') + 1);
        delimiter = delimiterSection.substring(2);
    }

    // Replace newlines with commas
    //const normalizedInput = numbers.replace(/\n/g, ',');

    // Replace newlines with commas and then custom delimiter with commas
    const normalizedInput = numbersString.replace(/\n/g, ',').split(delimiter).join(',');
    
    const nums = normalizedInput.split(',').map(n => parseInt(n, 10));

    return nums.reduce((sum, n) => sum + n, 0);
}


  
module.exports = add;
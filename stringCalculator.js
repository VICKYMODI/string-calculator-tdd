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

     // Check for negative numbers
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    //return nums.reduce((sum, n) => sum + n, 0);

    // Filter out numbers greater than 1000 before summing
    return nums
        .filter(n => n <= 1000)  // Only keep numbers less than or equal to 1000
        .reduce((sum, n) => sum + n, 0);
}


  
module.exports = add;
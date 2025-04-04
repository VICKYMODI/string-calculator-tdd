// stringCalculator.js
function add(numbers) {
    //basic implementation
    if (numbers === '') return 0;

    // Replace newlines with commas
    const normalizedInput = numbers.replace(/\n/g, ',');
    
    const nums = normalizedInput.split(',').map(n => parseInt(n, 10));

    return nums.reduce((sum, n) => sum + n, 0);
}


  
module.exports = add;
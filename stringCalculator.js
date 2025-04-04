// stringCalculator.js
function add(numbers) {
    //basic implementation
    if (numbers === '') return 0;

    // Replace newlines with commas

    //let delimiter = ',';
    let delimiters = [',', '\n'];
    let numbersString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
        const delimiterSection = numbers.split('\n')[0];
        numbersString = numbers.substring(numbers.indexOf('\n') + 1);
        //delimiter = delimiterSection.substring(2);

        // Handle delimiters with multiple characters
        if (delimiterSection.includes('[') && delimiterSection.includes(']')) {
            const regex = /\[([^\]]+)\]/g;
            let match;
            while ((match = regex.exec(delimiterSection)) !== null) {
                delimiters.push(match[1]);
            }
        } else {
            // Simple delimiter
            delimiters.push(delimiterSection.substring(2));
        }

    }
    // Replace all delimiters with a common delimiter
    let processedString = numbersString;
    for (const delimiter of delimiters) {
        processedString = processedString.split(delimiter).join(',');
    }


    // Split and convert to numbers
    const nums = processedString
        .split(',')
        .map(n => parseInt(n, 10))
        .filter(n => !isNaN(n)); // Filter out any non-number values

    // Check for negative numbers
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    // Filter out numbers greater than 1000 before summing
    return nums
        .filter(n => n <= 1000)  // Only keep numbers less than or equal to 1000
        .reduce((sum, n) => sum + n, 0);
}



module.exports = add;
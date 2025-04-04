// stringCalculator.js
function add(numbers) {
    if (numbers === '') return 0;
    
    let delimiters = [',', '\n'];
    let numbersString = numbers;
    
    // Check for custom delimiter
    if (numbers.startsWith('//')) {
      const delimiterSection = numbers.split('\n')[0];
      numbersString = numbers.substring(numbers.indexOf('\n') + 1);
      
      // Handle multiple delimiters or delimiters with multiple characters
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
    
    // Sum numbers, ignoring those greater than 1000
    return nums
      .filter(n => n <= 1000)
      .reduce((sum, n) => sum + n, 0);
  }
  
  module.exports = add;
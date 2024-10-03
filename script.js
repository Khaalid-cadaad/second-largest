// Good Luck 💪🏾
function secondLargest(arr) {
    // Create a Set to store unique values
    const uniqueNumbers = new Set(arr);
    
    // Convert the Set back to an array and sort it in descending order
    const sortedUniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => b - a);
    
    // Return the second element in the sorted array
    return sortedUniqueNumbers[1];
}

// Examples
console.log(secondLargest([23, 66, 50, 12, 6])); // ➞ 50
console.log(secondLargest([65, 34, 100, 22, 85])); // ➞ 85
console.log(secondLargest([67, 22, 19, 12, 80])); // ➞ 67
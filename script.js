function findFirstNonRepeatingChar() {
  const inputString = prompt("Enter a string:");
  
  if (!inputString) {
    alert("No input provided.");
    return;
  }
  
  const charCount = {};
  
  // Count occurrences of each character in the input string
  for (let char of inputString) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  // Find the first non-repeating character
  for (let char of inputString) {
    if (charCount[char] === 1) {
      alert(`The first non-repeating character is: ${char}`);
      return char;
    }
  }
  
  // If no non-repeating character found
  alert("No non-repeating character found.");
  return null;
}

findFirstNonRepeatingChar();

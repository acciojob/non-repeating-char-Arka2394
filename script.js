//your JS code here. If required.
function findFirstNonRepeatingChar(str) {
  const charCount = {};

  // Count the occurrences of each character in the string
  for (const char of str) {
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // Return null if no non-repeating character found
}

// Take input from user with prompt()
const inputString = prompt("Enter a string:");
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);

// Show output via alert()

  alert( `${firstNonRepeatingChar}`);

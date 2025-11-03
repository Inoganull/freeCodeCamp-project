function countWords(sentence) {
    const trimmedSentence = sentence.trim();
  
    if (trimmedSentence.length === 0) {
      return 0;
    }
  
    const wordsArray = trimmedSentence.split(/\s+/);
  
    return wordsArray.length;
  }
  
  
  console.log(countWords("Hello world"));
  console.log(countWords(""));
  console.log(countWords("Complete the challenges!"));
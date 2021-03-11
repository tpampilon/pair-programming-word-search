//Pair Programming Excercise by Ted Pampilon and Josiah Pilon

const transpose = function(matrix) {
  const rows = matrix.length;
  const newArr = [];
    
  for (let j = 0; j < matrix[0].length; j++) {
    newArr[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newArr[j][i] = matrix[i][j];
    }
  }
  return newArr;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let ans = false;

  for (const wordOf of horizontalJoin) {
    if (wordOf.includes(word)) {
      ans = true;
    }
  }

  let transposed = transpose(letters);
  let mapped = transposed.map(ls => ls.join(''));

  for (const wordOf of mapped) {
    if (wordOf.includes(word)) {
      ans = true;
    }
  }

  return ans;
};


module.exports = wordSearch;
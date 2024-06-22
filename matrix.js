const matrix = [];

for (let i = 0; i < 50; i++) {
  const row = [];
  for (let j = 0; j < 50; j++) {
    const randomValue = Math.random();
    row.push(randomValue < 0.8 ? 0 : 1);
  }
  matrix.push(row);
}

function countNeigh(matrix, i, j) {
  let count = 0;
  if (i > 0 && matrix[i - 1][j] === 1) count++;
  if (i < matrix.length - 1 && matrix[i + 1][j] === 1) count++;
  if (j > 0 && matrix[i][j - 1] === 1) count++;
  if (j < matrix[0].length - 1 && matrix[i][j + 1] === 1) count++;
  return count;
}


const transformMatrix = matrix.map((row, i) =>
  row.map((value, j) => {
    if (value === 1 && countNeigh(matrix, i, j) === 0) {
      return 0;
    }
    if (value === 0 && countNeigh(matrix, i, j) > 1) {
      return 1;
    }
    return value;
  })
);

// Вывод матриц на каждом этапе
console.log("Исходная матрица:");
console.log(matrix);
console.log("Преобразованная матрица:");
console.log(transformMatrix);
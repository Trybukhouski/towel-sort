
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return (matrix === undefined) ? [] : matrix.map((el, i) => {
    return (i % 2) === 0 ? el : el.reverse();
  }).flat();
}


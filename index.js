const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let sum = 0;
let positiveCount = 0;
let negativeCount = 0;
let maxElement = numbers[0];
let maxElementIndex = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productOfPositive = 1;

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];

  if (numbers[i] > 0) {
    sum += numbers[i];}
  

  if (currentNumber > 0) {
    positiveCount++;

    productOfPositive *= currentNumber;

    if (currentNumber % 2 === 0) {
      sumEvenPositive += currentNumber;
      evenPositiveCount++;
    } else {
      sumOddPositive += currentNumber;
      oddPositiveCount++;
    }
  }

  if (currentNumber > maxElement) {
    maxElement = currentNumber;
    maxElementIndex = i;
  }

  if (currentNumber < 0) {
    negativeCount++;
  }
}

const message = `
 Sum of positive elements: ${sum}
 Number of positive elements: ${positiveCount}
 Maximum element: ${maxElement}
 Index of the maximum element: ${maxElementIndex}
 Number of negative elements: ${negativeCount}
 Number of odd positive elements: ${oddPositiveCount}
 Number of even positive elements: ${evenPositiveCount}
 Sum of even positive elements: ${sumEvenPositive}
 Sum of odd positive elements: ${sumOddPositive}
 Product of positive elements: ${productOfPositive}
`;

alert(message);
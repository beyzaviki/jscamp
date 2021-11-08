const divisorsOfNumber = (number) => {
  const divisors = [];
  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const sumOfItsDivisors = (...divisors) => {
  let total = 0;
  divisors.forEach((divisor) => {
    total += divisor;
  });
  return total;
};

const checkNumbersIsFriend = (numberOne, numberTwo) => {
  let result = false;
  if (numberOne !== numberTwo) {
    const sumDivisiorsOfNumberOne = sumOfItsDivisors(
      ...divisorsOfNumber(numberOne)
    );
    const sumDivisiorsOfNumberTwo = sumOfItsDivisors(
      ...divisorsOfNumber(numberTwo)
    );
    if (
      sumDivisiorsOfNumberOne === numberTwo &&
      sumDivisiorsOfNumberTwo === numberOne
    ) {
      result = true;
    }
  }
  return result;
};
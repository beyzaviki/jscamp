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
  
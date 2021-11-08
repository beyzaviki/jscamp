//1000'e kadarki tüm asal sayıları listeleyen
const isItPrime = (number) => {
    let result = true;
    for (let i = 2; i < number - 1; i++) {
      if (number % i === 0) {
        result = false;
      }
    }
    return result;
  };

const calculateAllPrimeNumbersUpToThousand = () => {
    const primeNumbers = [];
    for (let i = 1; i < 1000; i++) {
      if (isItPrime(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers;
  };

  console.log(calculateAllPrimeNumbersUpToThousand());
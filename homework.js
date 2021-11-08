//Asal sayı olup olmadığını bulma
function isPrime(...nums){
    let prime = []; nonPrime = [];
    var buff = true;
    nums.map(item => {
        if(item < 2){
            buff = false
        }
        else if(item === 2){
            buff = true
        }
        else{
            for(let i=2; i<item; i++){
                if(item % i === 0){
                    //console.log(item, ':ASAL DEĞİL!')
                    buff = false
                    break;
                }
                buff = true
            }
        }
        buff ? prime.push(item) : nonPrime.push(item)
    })
    console.log('asal: ', prime)
    console.log('asal değil: ', nonPrime)
}
isPrime(1,2,3,4,5,6,7,8,9,10,11,12,13)

//parametre olarak girilen iki sayının arkadaş sayı olup olmadığını bulma
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

  //1000'e kadarki tüm mükemmel sayıları listeleyen
for(let sayi = 1;sayi <= 1000; sayi++){
    let kalan = 0;

    for (let i = 1; i <= sayi/2; i++){
        if (sayi % i == 0){
            kalan += i;
        }
    }

    if (kalan == sayi){
        console.log("%d bu rakam mükemmel sayı\n", sayi);
    }
}

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
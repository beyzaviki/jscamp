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
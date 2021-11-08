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

isPrime(1,2,3,5,6,7,8,9,10,11,12,13)

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
const asalnumara = 1000;
for(let i = 1;i <= asalnumara;i++){
    let kirilma = 0;
    
    for(let j = 2;j <= asalnumara;j++){
        if(i % j == 0){
            kirilma = 1;
            break;
        }
    }
    if(i>1 && kirilma == 0){
        console.log(i);
    }
}
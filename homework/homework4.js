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
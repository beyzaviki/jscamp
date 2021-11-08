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
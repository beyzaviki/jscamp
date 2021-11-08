function addToCart(quantity,productName="elma"){

      console.log("sepete eklendi : ürün : " + productName +" adet: " + quantity)

}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("hello world")

}
sayHello()

let sayHello2 = function (){
      console.log("hello world 2")

}
sayHello2();

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("elma",5,10)
addToCart2("armut",2,20)
addToCart2("limon",3,15)

let product1 = {productName: "elma", unitPrice:10, quantity:5}
function addToCart3(product){
    console.log("ürün : "+product.productName)
    console.log("adet: "+product.quantity)
    console.log("fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName: "elma", unitPrice:10, quantity:5}
let product3 = {productName: "elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
sayi2=100
console.log(sayi1)


function addToCart4(products){
    console.log(products)
}

let products = [
    {productName: "elma", unitPrice:10, quantity:5},
    {productName: "armut", unitPrice:10, quantity:5},
    {productName: "karpuz", unitPrice:10, quantity:5}
]
addToCart4(products)

function add(bisey,...numbers){ //rest
    let total = 0;
    for(let i=0;i<numbers.length;i++){
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
    
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30,10,600,500,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadolusehirleri]] = [
    {name:"iç anadolu", population :"20M"},
    {name:"marmara", population :"30M"},
    {name:"karadeniz", population :"10M"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadolusehirleri)

let newproductName, newunitPrice, newquantity
({productName:newproductName, unitPrice:newunitPrice, quantity:newquantity}
 = {productName: "elma", unitPrice:10, quantity:5})

 console.log(newproductName)
 console.log(newunitPrice)
 console.log(newquantity)














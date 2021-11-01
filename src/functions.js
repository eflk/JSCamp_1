function addToCart(product='yumurta', quantity) {
    console.log("Speete eklendi: " 
    + product + ", Adet: " + quantity)
}
addToCart()
addToCart("elma",12)
addToCart("armut",1)


let sayHello = (ad = "Hello")=> {
    console.log(ad)
}

sayHello("emre")


function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("elma",2,10)
addToCart2("armut", 1,15)

function addToCart3(product) {
    console.log("ProductName: " + product.productName)
    console.log("Quantity: " + product.quantity)
    console.log("Unit Price: " + product.unitPrice)


}
let item = { productName: "egg", quantity: 0, unitPrice: 15 }

addToCart3(item)

let item2 = { productName: "ketcup", quantity: 1, unitPrice: 15 }

let item3 = { productName: "watermelon", quantity: 1, unitPrice: 15 }

item2 = item3

item2.productName = "karpuz"
item3.productName = "ff"
console.log(item2.productName)

function addToCart4(products) {
    console.log(products)
}

let products = [{productName: "watermelon", quantity: 1, unitPrice: 15},
    {productName: "ketcup", quantity: 1, unitPrice: 15 }]

addToCart4(products)

//rest operator

function sum(...params) {
    let total = 0;
    for (let i = 0; i < params.length; i++) {
        total += params[i]
        
    }
    return total
}

console.log(sum(10,20,30))

//Spread operator

let numbers = [10,20,40]
    //how array give as parameter to sum function if gets inputs as function params...
    //We need to use spread operator for this.
    // If you put 3 dot left side of the array variable the array will be spread as function param
console.log(...numbers)
console.log(sum(...numbers))

//Destructuring assignment

let [ad, soyad] = ["Emre", "Felek"]
console.log(ad)
console.log(soyad)


let products3 = [{productName: "watermelon", quantity: 1, unitPrice: 15},
    {productName: "ketcup", quantity: 1, unitPrice: 15 },
["asd","dsa"]
]

console.log(products3.productName);


let newProductName, newUnitPrice, newQuantity

//Parantez içerisinde almamızın sebebi JS {} parantezlerini function sanıyor. 
//Parantez ile bunun fonksiyon olmadığını bir "Destructuring assignment" olduğunu belirtiyoruz.
({productName:newProductName, quantity: newQuantity, unitPrice: newUnitPrice } = {productName: "ketcup", quantity: 1, unitPrice: 15 })

console.log(newProductName);
console.log(newQuantity);
console.log(newUnitPrice);


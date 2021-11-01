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
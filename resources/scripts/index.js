const baseUrl = 'https://localhost:7142/api/inventory'
let masterProductList = []

function handleOnLoad() {
    getProducts()
}

function getProducts() { //GET = Show ALL products from inventory
    const getProductsApiUrl = baseUrl
    fetch(getProductsApiUrl).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        json.forEach((product)=>{
            if(product.OutOfStock != 1) {
                masterProductList.push(product)
            }
        })
        renderCardFormatToDOM()
    }).catch(function(e){
            console.log(e)
    })
}


function renderCardFormatToDOM() { //GET = Show ALL products from inventory
    let html = ''
    masterProductList.forEach((product)=>{
            if(product.OutOfStock != 1) {
                html += `<div id="${product.productID}" onclick="onCardClick(this.id)" class="card" style="width: 18rem;"> 
                <img class="card-img-top" src="${product.productImage}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${product.productName}</h5>
                  <p class="card-text">Price: $${product.productPrice}</p>
                </div>
              </div>`
            }
        })
        document.getElementById('productList').innerHTML = html
}

function onCardClick(id) {
    // product detail page; navbar and footer hardcoded; actual body all written in html string in javascript; call fetch to get one
    let product;
    masterProductList.forEach((product)=>{
        if(product.productID = id) {
            window.localStorage.setItem("focusedProduct", JSON.stringify(product)) //key, value
            window.location.replace('\oneproduct.html')
            product = JSON.parse(window.localStorage.getItem("focusedProduct"))
        }
    })
}

function getHomeProducts() { //GET = Show ALL products from inventory
    const getProductsApiUrl = baseUrl
    fetch(getProductsApiUrl).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        json.forEach((product)=>{
            if(product.OutOfStock != 1) {
                masterProductList.push(product)
            }
        })
        renderHomeCardToDOM()
    }).catch(function(e){
            console.log(e)
    })
}

function renderHomeCardToDOM() { //GET = Show ALL products from inventory
    let html = ''
    let counter = 0;
    masterProductList.forEach((product)=>{
        if(counter < 3) {
            if(product.OutOfStock != 1) {
                    html += `<div id="${product.productID}" onclick="onCardClick(this.id)" class="card" style="width: 18rem;"> 
                    <img class="card-img-top" src="${product.productImage}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${product.productName}</h5>
                      <p class="card-text">Price: $${product.productPrice}</p>
                      </div>
                  </div>`
                }
                counter++;
        }
        })
        document.getElementById('productList').innerHTML = html
}
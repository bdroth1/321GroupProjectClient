let masterProductList = []
let masterOrderList = []

function getOrders() {
    const getOrdersApiUrl = ''
    fetch(getOrdersApiUrl).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        json.forEach((order)=>{
            masterOrderList.push(order)
        })
        renderOrderTableFormatToDOM()
    }).catch(function(e){
            console.log(e)
    })
}

function renderOrderTableFormatToDOM() {
    let html = '<table class="table">'
        html += `<thead>
            <th scope="col">Order ID</th>
            <th scope="col">Order Date</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Number of Items</th>
            <th scope="col">Status</th>
        </thead>`
        masterProductList.forEach((product)=>{
            html += `<tbody>
                <tr>
                <th scope="row">${product.orderID}</th>
                <td>${product.orderDate}</td>
                <td>${product.customerID}</td>
                <td>${product.numberItems}</td>
                <td>${product.orderStatus}</td>
                </tr>
                </tbody>`
        })
        html += '</table>'
        document.getElementById('inventoryList').innerHTML = html
}

function getInventory() {
    const getInventoryApiUrl = 'https://localhost:7142/api/inventory'
    fetch(getInventoryApiUrl).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        json.forEach((product)=>{
            masterProductList.push(product)
        })
        renderTableFormatToDOM()
    }).catch(function(e){
            console.log(e)
    })
}

function renderTableFormatToDOM() {
        let html = '<table class="table">'
        html += `<thead>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Available Quantity</th>
            <th scope="col">Out of Stock</th>
        </thead>`
        masterProductList.forEach((product)=>{
            html += `<tbody>
                <tr>
                <th scope="row" onclick="onInventoryRowClick(this.id)">${product.productID}</th>
                <td>${product.productName}</td>
                <td>${product.availableQty}</td>
                <td>${product.outOfStock}</td>
                </tr>
                </tbody>`
        })
        html += '</table>'
        document.getElementById('inventoryList').innerHTML = html
    }

    function onInventoryRowClick() {
        let product;
        masterProductList.forEach((product)=>{
            if(product.productID = id) {
                window.localStorage.setItem("focusedInventory", JSON.stringify(product)) //key, value
                // window.location("client\products.html")
                product = JSON.parse(window.localStorage.getItem("focusedInventory"))
            }
        })
    }
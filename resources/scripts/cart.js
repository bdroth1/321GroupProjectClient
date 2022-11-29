var fadeTime = 300;
var shippingRate = 5.00; 
let masterCartList = [];

function getCartItems() {
    const getCartApiUrl = ''
    fetch(getCartApiUrl).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        json.forEach((cartProduct)=>{
            masterCartList.push(cartProduct)
        })
        renderCartTableToDOM()
    }).catch(function(e){
            console.log(e)
    })
}

function renderCartTableToDOM() {
        let html = '<table class="table">'
        html += `<thead>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
            <th scope="col">Total Price</th>
        </thead>`
        masterCartList.forEach((cartProduct)=>{
            html += `<tbody>
                <tr>
                <td><img class="card-img-top" src="${cartProduct.productImage}" alt="Product Image"></td>
                <td>${cartProduct.productName}</td>
                <td>${cartProduct.productPrice}</td>
                <td class="product-quantity"><input type="number" min="1" step="1" class="form-control"></td>
                <td class="product-removal"><button type="button" class="btn btn-dark">Remove Product</button></td>
                <td class="product-line-price">${cartProduct.productPrice}</td>
                </tr>
                </tbody>`
        })
        html += '</table>'
        document.getElementById('cartList').innerHTML = html
    }


/* Assign actions */
$('.product-quantity input').change(function() {
  updateQuantity(this);
});

$('.product-removal button').click(function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
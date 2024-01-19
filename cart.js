

document.addEventListener('DOMContentLoaded', function () {
    
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    
    var cartList = document.getElementById('cart-items');

    
    cartItems.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - ' + item.price + ' LKR';
        cartList.appendChild(listItem);
    });
});

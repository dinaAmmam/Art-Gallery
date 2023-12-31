document.addEventListener('DOMContentLoaded', function () {
    // Get the product ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Retrieve the selected product from localStorage
    var selectedProduct = JSON.parse(localStorage.getItem('peopleList'))[productId];
    selectedName = selectedProduct.name;
    selectedImage = selectedProduct.image;
    selectedPrice = selectedProduct.price;
    selectedDetails = selectedProduct.details;

    var html = "";
    let num =0;
    html += "<h1> Details about that product </h1>"
        html += "<div class=container >"
        html += " <h3>product name :<br>" + selectedProduct.name +
            "</h3><br> <div class =img><img width=200 height=200  src='" + selectedProduct.image + "'></div><br> <h3>price:</h3><p>" + selectedProduct.price +
            "</p><h3>product details:</h3><p>" + selectedProduct.details + "</p>"
        html +="<button onclick='add()'>Add to cart</button>"   
        html += "</div>";

    document.querySelector("#pdetails").innerHTML = html;
    /////////////////////////////////////////////////////
    
});
function add(){

    if(localStorage.getItem("userlogedin") == null){
        alert('please log in first ')
        window.location.href = "../html/login.html";
    }
    else{
            let cartItems;
            if (localStorage.getItem("cartItems") == null) {
             cartItems = [];
            } else {
             cartItems = JSON.parse(localStorage.getItem("cartItems"));
             //userlogedin = JSON.parse(localStorage.getItem("userlogedin"));
            }
            //////////////
            let cartItemsjs={
                name: selectedName,
                image: selectedImage,
                price: selectedPrice,
                details: selectedDetails
            };
    
    
            cartItems.push(cartItemsjs);

            //userlogedin.push();

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
           // localStorage.setItem("userlogedin", JSON.stringify(userlogedin));
            alert("added successfully to cart")
    


    }
}

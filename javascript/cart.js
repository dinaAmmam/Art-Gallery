function showData(){
    var cartItems;
if (localStorage.getItem("cartItems") == null) {
    cartItems = [];
} else {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
}

//add to html page ur products
var html = "";
let total =0;
cartItems.forEach(function (element, index) {
    var t = Number(element.price.replace("$", ""));
    total += t
});

cartItems.forEach(function (element, index) {

    ////
    html += "<tr >"
    html += "<td class=tds>" + element.name + "</td>"; 
    html += "<td class=tds ><img width=50 height=50  src='" + element.image + "'></td>";
    html += "<td class=tds>" + element.price + "</td>";
    html += "<td class=tds>" + '<button onclick="deleteData(' +
    index +
    ')"id="del">Remove from cart</button></td>';
    html += "</tr>";


});
   html += "<tr><td class=tds colspan=2>Total price: <td class=tds colspan=2>"+total+"</td></td></tr>"




//html += "</div>";
document.querySelector("#carttbody").innerHTML = html;

}
document.onload = showData();




function deleteData(index) {
    var cartItems;
    if (localStorage.getItem("cartItems") == null) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify
        (cartItems));
        showData();
}
function redirect(){
    window.location.replace("../html/checkout.html");


}


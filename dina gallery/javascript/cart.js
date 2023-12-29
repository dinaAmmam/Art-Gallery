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
   /* html += "<div class=containercart >"
    html += "<p>"+ element.name +
        "</p><br> <div class =img><img width=200 height=200  src='" + element.image + "'></div><br><p>" + element.price+"<br>"
        html += '<button onclick="deleteData(' + index + ')"id="del">Remove from cart</button>';

    html += "</div><br>";*/

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
/*username = document.getElementById('user-name');
email = document.getElementById('email');
num= document.getElementById('number');
address = document.getElementById('address');
function isusernamevalidate(){
    return username.match(/^[A-Za-z]{4,10}$/); 
}


//check E-mail function
function isemailvalidate(){
    return email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}
function isusernamevalidate(){

    return username.value.match(/^[A-Za-z]{4,10}$/); 
}
function isnumvalidate(){
    return num.value.match(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/);
}

//check password function
function isaddvalidate(){
    return address.value;
}
email.addEventListener('blur' , function(){
    if(!isemailvalidate()){
        email.className = "incorrect";
        emailError.innerText = "please enter valid email!!!";

    }else{
        email.className ="correct";
        emailError.innerText ="";

    }
});

address.addEventListener('blur' , function(){
    if(!isaddvalidate()){
        address.className = "incorrect";
        addError.innerText = "please enter address!!!";

    }else{
        address.className ="correct";
        addError.innerText = "";

    }
});

num.addEventListener('blur' , function(){
    if(!isnumvalidate()){
        num.className = "incorrect";
        numberError.innerText = "please enter valid number!!!";

    }else{
        num.className ="correct";

    }
});


username.addEventListener('blur', function(){
    if(!isusernamevalidate()){
        username.className = "incorrect";
        nameError.innerText="please enter valid name!!!";
    }else{
        username.className="correct";
        nameError.innerText="";

    }
});


/*if(isemailvalidate() && isusernamevalidate()){
    
}
this.document.forms[0].addEventListener('submit', function (e) {
    alert("confirmed")

    });
    this.document.forms[0].addEventListener('submit', function (e) {
        if (!(isusernamevalidate() && isemailvalidate() && isnumvalidate() )) {
            e.preventDefault();
            alert("Complete Your Data");
    
        }else{
            alert("confirmed")
        }
    })


/*var html = "";
        peopleList.forEach(function(element, index){
            html += "<tr >"
            html += "<td class=tds>" + element.name + "<br>" + element.price + "<br>"+ element.details+ "<br>"+  "</td>"

            html += "<td class=tds ><img width=200 height=200  src='" + element.image + "'></td>";

            html += "</tr>";
    
            
        });
        document.querySelector("#GalleryTable tbody").innerHTML = html*/
/*carlink= document.querySelector("#cart")
    if(localStorage.getItem("userlogedin") == null){
        carlink.style.display ="none"
    }*/
function redirect(){
    window.location.replace("../html/checkout.html");


}


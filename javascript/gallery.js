document.addEventListener('DOMContentLoaded', function () {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    //add to html page ur products
    var html = "";
  
    peopleList.forEach(function (element, index) {
        html += "<div class=container >"
        html += " <h3>product name:</h3><br> <p>"+ element.name +
            "</p><br> <div class =img><img width=200 height=200  src='" + element.image + "'></div><br> <h3>price:</h3><p>" + element.price +"<br>"
        html += "<a href='pdetails.html?id=" + index + "' class='gbtn'>Read more</a> </div>"

    });


    document.querySelector("#main").innerHTML = html;
});



























/*// Check if "peopleList" exists in local storage
let peopleList;

if (localStorage.getItem("peopleList") === null) {
    // If it doesn't exist, initialize as an empty array
    peopleList = [];
} else {
    // If it exists, parse the stored JSON string
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
}


// Create a new object
var product1 = { name: "salwa", price: "20", details: "bhhjh", image: '../images/2jpg.jpg' };
let loginsucess = false;
for (let i = 0; i< peopleList.length; i++){
    if(!(product1.name == peopleList[i].name )){
        loginsucess = true;
        break;
    }
} 
if(loginsucess){
    peopleList.push(product1);
}



// Add the new object to the array



// Store the updated array back in local storage
localStorage.setItem("peopleList", JSON.stringify(peopleList));

// Now, "peopleList" in local storage contains the updated array*/

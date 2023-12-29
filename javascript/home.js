document.addEventListener('DOMContentLoaded', function () {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    // Add products to the HTML page
    var html = "";
    peopleList.forEach(function (element, index) {
        // Replace "../images/" with "images/"
        var imagePath = element.image.replace("../images/", "images/");
        html += "<div class='img'><img  src='" + imagePath + "'></div>";
        html += "<a href='../html/pdetails.html?id=" + index + "' class='hbtn'>Show product</a> </div>"
    });

    document.querySelector("#images").innerHTML = html;

});
function redirect(){
    window.location.replace("../html/pdetails.html");
}

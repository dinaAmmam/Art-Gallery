//validate form
imgInput = document.querySelector('.img')
imgHolder = document.querySelector('.imgholder')
function validateForm(){
    var name =  document.getElementById("productName").value ;
    var price = document.getElementById("price").value ;
    var details = document.getElementById("details").value ;
    image = document.getElementById("uploadimg").value ;
    img= document.getElementById("i").src;

    if(name.trim()==""){
        alert("enter valid name");
        return false
    }
    if(price.trim()==""){
        alert("enter price");
        return false
    }
    if(details.trim()==""){
        alert("enter details");
        return false
    }
    if(image==""){
        alert("please add image");
        return false
    }
    return true;
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";
    peopleList.forEach(function(element, index){
        html += "<tr >"
        html += "<td class=tds>" + element.name + "</td>"
        html += "<td class=tds>" + element.price + "</td>"
        html += "<td class=tds>" + element.details + "</td>"
        html += "<td class=tds ><img width=50 height=50  src='" + element.image + "'></td>";
        html += "<td class=tds>" + '<button onclick="deleteData(' +
            index +
            ')"id="del">delete</button></td>';
            html += `<td class=tds> <button onclick="updateData(${index},event)" >update</button></td>`;

        html += "</tr>";

        
    });
    document.querySelector("#crudTable tbody").innerHTML = html


}
uploadimg.onchange = function(){
    if(uploadimg.files[0].size < 1000000){   // 1MB = 1000000
        var fileReader = new FileReader()

        fileReader.onload = function(e){
            var imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(uploadimg.files[0])
    }

    else{
        alert("This file is too large!")
    }
}

document.onload = showData();
// function updateData(index) {
//     var peopleList;
//     if (localStorage.getItem("peopleList") == null) {
//         peopleList = [];
//     } else {
//         peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }

//     // Display the update form
//     document.getElementById("submit").style.display = "none";
//     document.getElementById("Update").style.display = "block";

//     // Set the values in the update form
//     document.getElementById("productName").value = peopleList[index].name;
//     document.getElementById("price").value = peopleList[index].price;
//     document.getElementById("details").value = peopleList[index].details;
//     document.getElementById("i").src = peopleList[index].image;

//     // Update button click handler
//     document.querySelector("#Update").onclick = function () {
//         if (validateForm() == true) {
//             // Update the item in the peopleList array
//             peopleList[index].name = document.getElementById("productName").value;
//             peopleList[index].price = document.getElementById("price").value;
//             peopleList[index].details = document.getElementById("details").value;
//             peopleList[index].image = document.getElementById("i").src;

//             // Update the item in localStorage
//             localStorage.setItem("peopleList", JSON.stringify(peopleList));

//             // Refresh the displayed data
//             showData();

//             // Clear the form values
//             document.getElementById("productName").value = "";
//             document.getElementById("price").value = "";
//             document.getElementById("details").value = "";
//             document.getElementById("i").src = "";

//             // Hide the update form and show the submit button
//             document.getElementById("submit").style.display = "block";
//             document.getElementById("Update").style.display = "none";
//         }
//     };
// }
//submit
function addData() {

    if (validateForm() == true) {
        var name = document.getElementById("productName").value;
        var price = document.getElementById("price").value;
        var details = document.getElementById("details").value;
        img= document.getElementById("i").src;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            price: price,
            details: details,
            image:img
        })

        localStorage.setItem("peopleList", JSON.stringify
            (peopleList));
        showData();
        document.getElementById("productName").value = "";
        document.getElementById("price").value = "";
        document.getElementById("details").value = "";
        //document.getElementById("uploadimg").value= "";
        document.getElementById("i").src= "../images/photo.png";


    }
}
function setdata(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
  peopleList[gindex].name = document.getElementById("productName").value; 
  peopleList[gindex].price=document.getElementById("price").value  ;
    peopleList[gindex].details = document.getElementById("details").value ;
    peopleList[gindex].image =document.getElementById("i").src;
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
}

function deleteData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) { 
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify
        (peopleList));
    showData();
}
/*function update(index){
    alert("jda")
    document.getElementById("productName").value = peopleList[index].name;
    document.getElementById("price").value = peopleList[index].price;
    document.getElementById("details").value = peopleList[index].details;
    document.getElementById("i").src= peopleList[index].image;
    
}*/


let gindex=0
function updateData(index,e) {
    gindex=index
e.preventDefault()
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    document.getElementById("productName").value = peopleList[index].name;
    document.getElementById("price").value = peopleList[index].price;
    document.getElementById("details").value = peopleList[index].details;
    document.getElementById("i").src= peopleList[index].image;
// alert("jadhk")
//     document.getElementById("submit").style.display= "none"

//     //document.getElementById("Update").style.display= "block"

//     var peopleList;
//     if (localStorage.getItem("peopleList") == null) {
//         peopleList = [];
//     } else {
//         peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }


    // document.querySelector("#Update").onclick = function () {
    //     if (validateForm() == true) {
    //         peopleList[index].name = document.getElementById("productName").value;
    //         peopleList[index].price = document.getElementById("price").value;
    //         peopleList[index].details = document.getElementById("details").value;
    //         peopleList[index].image = document.getElementById("uploadimg").value;



    //         localStorage.setItem("peopleList", JSON.stringify(peopleList));

    //         showData()

    //         document.getElementById("productName").value = "";
    //         document.getElementById("price").value = "";
    //         document.getElementById("details").value = "";
    //         document.getElementById("img").value = "";
    //         document.getElementById('i').src="";


    //         document.getElementById("submit").style.display = "block"
    //         document.getElementById("Update").style.display= "none"
    //     }

    // }

}
////////////////////////////



/////////////////////////////

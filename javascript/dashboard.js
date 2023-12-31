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

}


document.addEventListener('DOMContentLoaded', function () {
    if(localStorage.getItem("userlogedin") == null){
        alert('you are not logged in')
        window.location.href = "../html/register.html";
    }else{
        localStorage.removeItem("userlogedin");
        alert('loged out succssfully')
        window.location.href = "../index.html";

    }

 })
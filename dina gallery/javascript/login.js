
this.document.forms[0].addEventListener('submit', function (e) {
    // Get entered values in the form
        const username = document.getElementById('user-name').value;
        const pass = document.getElementById('password').value;
    // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem("users"))  || [];;
        let loginsucess = false;
    for (let i = 0; i< users.length; i++){
        if((username == users[i].name && pass == users[i].pass )){
            loginsucess = true;
            localStorage.setItem('userlogedin', JSON.stringify(users[i]))
            localStorage.setItem("flag", JSON.stringify(1));
            break;
        }
        else{
            localStorage.removeItem("userlogedin");
        }
    } 
    if(!loginsucess){
        e.preventDefault();
        alert("You are not member please register first!!");
        localStorage.removeItem("userlogedin");
        window.location.replace("../html/register.html");
    }else{
        alert("Login successful");
    }
    });




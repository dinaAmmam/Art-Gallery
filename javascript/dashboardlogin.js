this.document.forms[0].addEventListener('submit', function (e) {
    // Get entered values in the form
        const username = document.getElementById('user-name').value;
        const pass = document.getElementById('password').value;
    // Retrieve users from local storage
        let loginsucess = false;

        if((username == 'dina' && pass == 342001 )){
            loginsucess = true;
        }
    if(!loginsucess){
        e.preventDefault();
        alert("You are not admin you can't open dashboard!!");
        window.location.replace("../index.html");
    }else{
        alert("welcome to dashboard");
  

    }
    });
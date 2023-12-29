window.addEventListener('load', function(){
   //get & validate username
    username = document.getElementById('user-name');
    username.focus();
    email = document.getElementById('email');
    username.addEventListener('blur', function(){
        if(!isusernamevalidate()){
            username.className = "incorrect";
            nameError.innerText="please enter valid name!!!";
            username.focus();
            username.select();
        }else{
            username.className="correct";
            nameError.innerText="";
            email.focus();
        }
    });//end of username blur

    // validate email
    num = document.getElementById('number');
    email.addEventListener('blur' , function(){
        if(!isemailvalidate()){
            email.className = "incorrect";
            emailError.innerText = "please enter valid email!!!";
            email.focus();
            email.select();
        }else{
            email.className ="correct";
            emailError.innerText ="";
            num.focus();
        }
    }); //end of email blur

    // validate number
    pass = document.getElementById('password');
    num.addEventListener('blur' , function(){
        if(!isnumvalidate()){
            num.className = "incorrect";
            numberError.innerText = "please enter valid number!!!";
            num.focus();
            num.select();
        }else{
            num.className ="correct";
            numberError.innerText ="";
            pass.focus();
        }
    }); //end of number blur
    //password validate
    pass.addEventListener('blur' , function(){
        if(!ispassvalidate()){
            pass.className = "incorrect";
            passError.innerText = "please enter valid password!!!";
            pass.focus();
            pass.select();
        }else{
            pass.className ="correct";
            passError.innerText ="";
        }
    }); //end of password blur
 
    this.document.forms[0].addEventListener('submit', function (e) {
        if (!(isusernamevalidate() && isemailvalidate() && isnumvalidate() && ispassvalidate())) {
            e.preventDefault();
            alert("Complete Your Data");
        }else{
            alert("register succefully")
           //let existuserdata= JSON.parse(localStorage.getItem('userdata'))|| [];

           //////////
            let users;
            if (localStorage.getItem("users") == null) {
                users = [];
            } else {
                users = JSON.parse(localStorage.getItem("users"));

            }
            //////////////

            let usersjs={

                name: username.value,
                email: email.value,
                num: num.value,
                pass: pass.value,
            };
            //existuserdata.push(usersjs);
            //////////////////
    
            users.push(usersjs);
    
            localStorage.setItem("users", JSON.stringify(users));
            //////
            //let arrayusersjson = JSON.stringify(existuserdata);
            //localStorage.setItem('userdata', arrayusersjson);
        }


            

    });//end of submit
    
});//end of load

//check user name function
function isusernamevalidate(){
    //if(username.value.trim() && 3 < username.value.trim().length && username.value.trim().length<10){
    //    return true;
    //}
    //else{
    //    return false;
    //}  
    return username.value.match(/^[A-Za-z]{4,10}$/); 
}

//check E-mail function
function isemailvalidate(){
    return email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

//check number function
function isnumvalidate(){
    return num.value.match(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/);
}
//check password function
function ispassvalidate(){
    return pass.value.match(/^[0-9]{5,7}$/);
}




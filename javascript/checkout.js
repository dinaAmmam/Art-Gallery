//username = document.getElementById('user-name');
//email = document.getElementById('email');
//num= document.getElementById('number');
//address = document.getElementById('address');
/*function isusernamevalidate(){
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
}); */

//document.querySelector("#p").innerHTML = (`Thank you ,${JSON.parse(localStorage.getItem('userlogedin')).name} for your trust ,<br> this is your shipping details `)


/*if(isemailvalidate() && isusernamevalidate()){
    
}
this.document.forms[0].addEventListener('submit', function (e) {
    alert("confirmed")

    });*/
   /* this.document.forms[0].addEventListener('submit', function (e) {
        if (!(isusernamevalidate() && isemailvalidate() && isnumvalidate() )) {
            e.preventDefault();
            alert("Complete Your Data");
    
        }else{
            alert("confirmed")
        }
    })*/

        //email code #1
        /*Email.send({
            SecureToken : "c97e9075-e903-446a-9463-3525e0817852",
            To : JSON.parse(localStorage.getItem('userlogedin')).email,
            From : "dina.ammam34@gmail.com",
            Subject : "testing email from " + email.value,
            Body : ebody
        }).then(
          message => alert(message)
        );
    
    carlink= document.querySelector("#cart")
        if(localStorage.getItem("userlogedin") == null){
            carlink.style.display ="none"
        }*/
        /*function sendmail(){
            (function(){
                emailjs.init("Yg9tNwhXyNUHX4sX-");

            })();
            var params = {
                sendername: JSON.parse(localStorage.getItem('userlogedin')).name,
                replyto: JSON.parse(localStorage.getItem('userlogedin')).email,
                number: JSON.parse(localStorage.getItem('userlogedin')).number,
                //address: document.querySelector("#address").value

            };
            var serviceID ="service_vmtvgrm";
            var templateID ="template_evghhfa";

            emailjs.send(serviceID, templateID , params)
            .then(res => {
                alert("confirm email send successfully !!")

            })
            .catch();
        }
    

        document.forms[0].addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission
           
        
            sendMail();
        });*/
        
       /* function sendmail(){
            (function(){
                emailjs.init("Yg9tNwhXyNUHX4sX-");

            })();
            var params = {
                sendername: "dina",
                replyto: "dina.ammam34@gmail.com",
                number: 1234,
                address: "mnnn",

            };
            var serviceID ="service_vmtvgrm";
            var templateID ="template_evghhfa";

            emailjs.send(serviceID, templateID , params)
            .then(res => {
                alert("confirm email send successfully !!")

            })
            .catch();
        }*/
        window.addEventListener('load', function () {
           
            
            document.forms[0].addEventListener('submit', function (e) {
                e.preventDefault(); // Prevent the default form submission
               
            
                sendMail();
            });
            
            function sendMail() {
                (function () {
                    emailjs.init("Yg9tNwhXyNUHX4sX-"); // Account Public Key
                })();
        
                var params = {
                    to: JSON.parse(localStorage.getItem('userlogedin')).email,
                    name: JSON.parse(localStorage.getItem('userlogedin')).name,
                };
        
                var serviceID = "service_vmtvgrm"; // Email Service ID
                var templateID = "template_evghhfa"; // Email Template ID
        
                emailjs.send(serviceID, templateID, params)
                    .then(res => {
                        alert("Email sent successfully!!");
                    })
                    .catch(error => {
                        console.error("Error sending email:", error);
                    });
            }
        });

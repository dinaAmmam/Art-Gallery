const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
//add even listener on form 
const submit = document.getElementsByClassName("form")[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("clicked")
    //html to be send in mail
    let ebody = `
    <b>Name: </b>${userName.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Subject: </b>${subject.value}
    <br>        
    `



    //email code
    Email.send({
        SecureToken : "c97e9075-e903-446a-9463-3525e0817852",
        To : 'dina.ammam34@gmail.com',
        From : "dina.ammam34@gmail.com",
        Subject : "testing email from " + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})
carlink= document.querySelector("#cart")
    if(localStorage.getItem("userlogedin") == null){
        carlink.style.display ="none"
    }

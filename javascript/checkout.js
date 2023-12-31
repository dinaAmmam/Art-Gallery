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

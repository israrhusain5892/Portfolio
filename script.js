var typed = new Typed('.dev-text', {
   strings: ['full stack Developer', 'Mern Stack Developer'],
   typeSpeed: 50,
   backSpace: 100,
   backDelay: 1000,
   loop: true
});

//for refreshing page when click any nav link
var buttons = document.querySelectorAll('header nav ul li a');

buttons.forEach(button => {
   button.addEventListener('click', (e) => {

      if (e.target.class = "skill") {
         setTimeout(() => { location.reload(); }, 500);
       }
      else if (e.target.class = "about") {
        location.reload();
      }
      else if (e.target.class = "service") {
         location.reload();
      }
      // else {
      
      //    location.reload();
      // }

   })
})

document.querySelector('.text-btn').addEventListener('click',()=>{
   setTimeout(() => { location.reload(); }, 300);
   //  location.reload()
})

document.querySelector('.top-btn').addEventListener('click',()=>{
   setTimeout(() => { location.reload(); }, 600);
   
})

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});

// project1
const imgwrapper = document.querySelector('.project0 .project-img');
const btn = document.getElementById('visit1');
const wrapper0 = document.querySelector('.project-img-wrapper');

imgwrapper.addEventListener("mouseenter", (e) => {
   btn.classList.add('show-btn');
})
imgwrapper.addEventListener("mouseleave", (e) => {
   btn.classList.remove('show-btn');
})


//  projec2
const imgwrapper1 = document.querySelector('.project1 .project-img');
const btn1 = document.getElementById('visit2');

imgwrapper1.addEventListener("mouseenter", (e) => {
   btn1.classList.add('show-btn');

})
imgwrapper1.addEventListener("mouseleave", (e) => {
   btn1.classList.remove('show-btn');

})

// project 3
const imgwrapper3 = document.querySelector('.project2 .project-img');
const btn3 = document.getElementById('visit3');

imgwrapper3.addEventListener("mouseenter", (e) => {
   btn3.classList.add('show-btn');

})
imgwrapper3.addEventListener("mouseleave", (e) => {
   btn3.classList.remove('show-btn');

})

// project 4 
const imgwrapper4 = document.querySelector('.project3 .project-img');
const btn4 = document.getElementById('visit4');

imgwrapper4.addEventListener("mouseenter", (e) => {
   btn4.classList.add('show-btn');

})
imgwrapper4.addEventListener("mouseleave", (e) => {
   btn4.classList.remove('show-btn');

})


// contact form validation and email submision

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener("submit", (e) => {
   e.preventDefault(); // Prevent form from sumitting until validation is complete
   let isValid = true;

   // Clear previous error messages
   document.querySelector(".firstname-error").innerHTML = "";
   document.querySelector(".lastname-error").innerHTML = "";
   document.querySelector(".email-error").innerHTML = "";
   document.querySelector(".msg-error").innerHTML = "";
   document.querySelector(".subject").innerHTML = "";

   // Get values from form inputs
   const firstName = document.getElementById("firstname").value.trim();
   const lastName = document.getElementById("lastname").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();
   const subject = document.getElementById("subject").value.trim();

   // First Name Validation
   if (firstName === "") {
      document.querySelector(".firstname-error").innerHTML = "First Name is required.";
      isValid = false;
   } else if (firstName.length < 2) {
      document.querySelector(".firstname-error").innerHTML = "First Name must be at least 2 characters.";
      isValid = false;
   }

   // Last Name Validation
   if (lastName === "") {
      document.querySelector(".lastname-error").innerHTML = "Last Name is required.";
      isValid = false;
   } else if (lastName.length < 2) {
      document.querySelector(".lastname-error").innerHTML = "Last Name must be at least 2 characters.";
      isValid = false;
   }

   // Email Validation
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
   if (email === "") {
      document.querySelector(".email-error").innerHTML = "Email is required.";
      isValid = false;
   } else if (!email.match(emailPattern)) {
      document.querySelector(".email-error").innerHTML = "Enter a valid email address.";
      isValid = false;
   }

   if (subject === "") {
      document.querySelector('.subject-error').innerHTML = "subject is required!"
      isValid = false;
   }

   // Message Validation
   if (message === "") {
      document.querySelector(".msg-error").innerHTML = "Message is required.";
      isValid = false;
   } else if (message.length < 10) {
      document.querySelector(".msg-error").innerHTML = "Message must be at least 10 characters.";
      isValid = false;
   }


   if (isValid) {

      var data = {
         service_id: 'service_2stwbvn',
         template_id: 'template_mbdjebm',
         user_id: 'ORKCFC5s5oo-gJ8Xz',
         template_params: {
            'username': 'israrhusin5892@gmail.com',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
            'message': `${message}`,
            'from_name': `${firstName + " " + lastName}`,
            'subject': `${subject}`,
            'email': `${email}`
         }
      };

      const loader = document.getElementById('loader');
      const button = document.querySelector('.send-btn');
      loader.style.display = 'inline-block';
      button.disabled = true;

      fetch('https://api.emailjs.com/api/v1.0/email/send', {
         method: 'POST', // Specify the request method
         headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
         },
         body: JSON.stringify(data)
      })
         .then(response => {
            if (!response.ok) {
               loader.style.display = 'none';
               button.disabled = false;
               document.querySelector('.successMessage').innerHTML = "some thing went error!!";
               document.querySelector('.successMessage').style.color = "red";
               throw new Error('Network response was not ok ' + response.statusText);
               return response.json();
            }

            else {
               loader.style.display = 'none';
               button.disabled = false;
               document.querySelector('.successMessage').innerHTML = "Message sent successfully!!"
               document.getElementById("firstname").value = "";
               document.getElementById("lastname").value = "";
               document.getElementById("email").value = "";
               document.getElementById("message").value = "";
               document.getElementById("subject").value = "";
            }
            // Parse the JSON response
         })
         .catch(error => {
            console.error('Error:', error); // Handle errors
         });



   }
})







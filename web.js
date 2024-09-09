
    //quickroute
     // COMPLAIN BUTTON
const complainBtn = document.querySelector('.complain-btn');
const complainForm = document.querySelector('.complain-form');

complainBtn.addEventListener('click', () => {
  complainForm.style.display = 'block';
  complainBtn.style.display = 'block';
});
     
// Add a button to toggle the form
var toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", function() {
  var complainForm = document.querySelector(".complain-form");
  if (complainForm.style.display === "none") {
    complainForm.style.display = "block";
  } else {
    complainForm.style.display = "none";
  }
});
  // SLIDES for websites
  const carouselIndicators = document.querySelectorAll('.carousel-indicators button');

carouselIndicators.forEach((indicator) => {
  indicator.addEventListener('click', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = carouselInner.children;
    const activeItem = carouselInner.querySelector('.active');

    activeItem.classList.remove('active');
    carouselItems[indicator.dataset.bsSlideTo].classList.add('active');

    // Add animation effect
    carouselInner.classList.add('animate');
    setTimeout(() => {
      carouselInner.classList.remove('animate');
    }, 100);
  });
});
//searchbar
 // Get the search input and button elements
 const searchInput = document.getElementById('search-input');
 const searchButton = document.getElementById('search-button');
 const searchResults = document.getElementById('search-results');
 
 // Get all service elements
 const services = document.querySelectorAll('.pagescontainer > div');
 
 // Add event listener to search button
 searchButton.addEventListener('click', () => {
   // Get the search term
   const searchTerm = searchInput.value.trim().toLowerCase();
 
   // Clear previous search results
   searchResults.innerHTML = '';
 
   // Loop through all services
   services.forEach((service) => {
     // Get the service name
     const serviceName = service.querySelector('h2').textContent.toLowerCase();
 
     // Check if service name matches search term
     if (serviceName.includes(searchTerm)) {
       // Create a list item for the search result
       const li = document.createElement('li');
       li.textContent = serviceName;
       li.addEventListener('click', () => {
         // Scroll to the service element
         service.scrollIntoView();
       });
       searchResults.appendChild(a);
     }
   });
 });
 document.addEventListener('click', (e) => {
   if (!e.target.closest('#search-results') && !e.target.closest('#search-input') && !e.target.closest('#search-button')) {
     searchResults.innerHTML = '';
   }
 });

 //contact button
 function checkInput() {
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const time = document.getElementById("time").value;

  if (username === "") {
    alert("Please enter a valid username.");
    return;
  }

  if (phone === "" || phone.length < 10) {
    alert("Please enter a valid phone number.");
    return;
  }

  if (time === "") {
    alert("Please select a preferred time.");
    return;
  }

  // If all inputs are valid, submit the form
  alert("Form submitted successfully!");
  document.getElementById("username").value = "";
document.getElementById("phone").value = "";
document.getElementById("time").value = "";

}

  function validateForm() {
const email = document.getElementById("email").value;
const textarea = document.getElementById("textarea").value;
const emailError = document.getElementById("email-error");
const textareaError = document.getElementById("textarea-error");
const formError = document.getElementById("form-error");

emailError.textContent = "";
textareaError.textContent = "";
formError.textContent = "";

if (email === "") {
  emailError.textContent = "Please enter a valid email address.";
  return false;
}

if (!validateEmail(email)) {
  emailError.textContent = "Please enter a valid email address.";
  return false;
}

if (textarea === "") {
  textareaError.textContent = "Please enter a message.";
  return false;
}

// If all inputs are valid, submit the form
formError.textContent = "Form submitted successfully!";
return true;
}

function validateEmail(email) {
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailRegex.test(email);
}


// Footer
  const fform = document.getElementById('contact-fform');
  const fformResponse = document.getElementById('fform-response');

  fform.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate a successful form submission
    setTimeout(() => {
      fformResponse.innerHTML = '<p style="color: green;">Message sent successfully!</p>';
      fform.reset(); // Reset the form fields
    }, 1000); // Wait 1 second before displaying the success message
  });

 // Send button click event handler
function sendButtonClick() {
  // Your send button logic here...

  // Display send successfully alert
  alert("Send Successfully");
}

 //cart btn
   
 function addToCartAlert() {
  document.getElementById("alert-message").innerHTML = "Added to cart successfully!";
  document.getElementById("alert-box").style.display = "block";
}

function closeAlert() {
  document.getElementById("alert-box").style.display = "none";
  
}



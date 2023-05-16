// const links = document.querySelectorAll('nav ul li a');
//     links.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default link behavior
//     const targetId = link.getAttribute('href');
// const target = document.querySelector(targetId);
// target.scrollIntoView({ behavior: 'smooth' });
//  });
// });

//  const form = document.getElementById("myForm");
//  from.addEventListener("submit", function(event) {
//  event.preventDefault();


// const name = form.elements["name"].value;
// const email = form.elements["email"].value;
// const message = form.elements["message"].value;
// if (name === "" || email === "" || message === "") {
// alert("Please fill out all fields")
//  return;
// }


// form.submit();

// });


function submitForm(){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

if (name === "" || email ==="" || subject ==="" || message ===""){
    alert("Please fill in all fields");
    return false;
}

alert("Form submitted")
return true;
}
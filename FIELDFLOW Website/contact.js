const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    form.reset();
});


const scriptURL = "https://script.google.com/macros/s/AKfycbzqg0szqQ4HSfm_VrnMnYozGP9-1IPzHH1jLqkAwJaI6o_wfNX25V8cD4TKFdI4by9MAw/exec";

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    name: e.target.phone.value,
    email: e.target.email.value,
    file: e.target.subject.value,
    name: e.target.message.value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(res => alert("Submitted successfully"))
  .catch(err => alert("Error occurred"));
});
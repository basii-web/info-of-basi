function scrollToSection(id)
{
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function submitForm()
{
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message)
    {
    document.getElementById("form-status").innerText =
      `Thanks ${name}! Your message has been sent 🚀`;
  } else {
    document.getElementById("form-status").innerText =
      "Please fill out all fields.";
  }
  return false;
}
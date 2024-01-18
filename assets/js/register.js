// SPONSORS FORM SECTION

// CAPTURE FORM FIELDS
const errormsg = document.getElementById("errormsg");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const prefix = document.getElementById("prefix");
const email = document.getElementById("email");
const organization = document.getElementById("organization");
const continent = document.getElementById("continent");
const mobile_number = document.getElementById("mobile_number");
const country = document.getElementById("country");
const role = document.getElementById("role");
// const comment = document.getElementById("comment");
const submitBtn = document.getElementById("submit");

// ADD EVENT LISTENER

function handleSubmit(e) {
  e.preventDefault();
  const first_name_value = first_name.value;
  const last_name_value = last_name.value;
  const prefix_value = prefix.value;
  const email_value = email.value;
  const organization_value = organization.value;
  const continent_value = continent.value;
  const mobile_number_value = mobile_number.value;
  const country_value = country.value;
  const role_value = role.value;
// //   const comment_value = comment.value;

  if (
    !first_name_value ||
    !last_name_value ||
    !prefix_value ||
    !email_value ||
    !organization_value ||
    !continent_value ||
    !mobile_number_value ||
    !country_value ||
    !role_value
  ) {
    errormsg.innerHTML = "Please enter all required fields";

    setTimeout(() => {
      errormsg.innerHTML = "";
    }, 3000);
    return
  }

  console.log({
    first_name_value,
    last_name_value,
    prefix_value,
    email_value,
    organization_value,
    continent_value,
    mobile_number_value,
    country_value,
    role_value,
    // comment_value,
  });
  window.location.href = "/thanks.html"
}

submitBtn.addEventListener("click", handleSubmit);

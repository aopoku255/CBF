// SPONSORS FORM SECTION

// CAPTURE FORM FIELDS
const errormsg = document.getElementById("errormsg");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const job_title = document.getElementById("job_title");
const email = document.getElementById("email");
const company_name = document.getElementById("company_name");
const industry = document.getElementById("industry");
const mobile_number = document.getElementById("mobile_number");
const country = document.getElementById("country");
const enquiry = document.getElementById("enquiry");
const comment = document.getElementById("comment");
const submitBtn = document.getElementById("submit");

// ADD EVENT LISTENER

async function handleSubmit(e) {
  e.preventDefault();
  const first_name_value = first_name.value;
  const last_name_value = last_name.value;
  const job_title_value = job_title.value;
  const email_value = email.value;
  const company_name_value = company_name.value;
  const industry_value = industry.value;
  const mobile_number_value = mobile_number.value;
  const country_value = country.value;
  const enquiry_value = enquiry.value;
  const comment_value = comment.value;

  if (
    !first_name_value ||
    !last_name_value ||
    !job_title_value ||
    !email_value ||
    !company_name_value ||
    !industry_value ||
    !country_value ||
    !enquiry_value
  ) {
    errormsg.innerHTML = "Please enter all required fields";

    setTimeout(() => {
      errormsg.innerHTML = "";
    }, 3000);
    return;
  } else {
    const response = await axios.post("http://localhost:3001/api/v1/sponsors", {
      first_name: first_name_value,
      last_name: last_name_value,
      job_title: job_title_value,
      email: email_value,
      company_name: company_name_value,
      industry: industry_value,
      mobile_number: mobile_number_value,
      country: country_value,
      enquiry: enquiry_value,
      comment: comment_value,
    });
    if (response?.data?.status === "success") {
      window.location.href = "/thanks.html";
    } else {
      errormsg.innerHTML = response?.data?.data;
      setTimeout(() => {
        errormsg.innerHTML = "";
      }, 3000);
    }
  }
}

submitBtn.addEventListener("click", handleSubmit);

import { countries } from "./country.mjs";

countries
  .sort((a, b) => a - b)
  .map((c) => {
    const options = document.createElement("option");
    options.value = c.countryName;
    options.text = c.countryName;
    country.append(options);
  });

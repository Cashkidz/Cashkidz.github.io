{/* Profile section */}
const profilepic = "pic.png";
const logo = "logo.png";
const name = "John Tan";
const title = "HR";
const company = "Bountie";
const email = "JohnTanHR@Bountie.io";
const phone = "(+65) 9821 8213";
const website = "https://bountie.io";
const companyAddress = "Geylang East Avenue 2";
const googleMapUrl =
  "https://www.google.com/maps/place/Geylang+East+Ave+2/@1.3176923,103.8865871,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1822d93c1b81:0xdf90ba542311c150!8m2!3d1.3176923!4d103.8887758";

document.getElementById("profilepic").src = `./EditMe/${profilepic}`;
document.getElementById("logo").src = `./EditMe/${logo}`;
document.getElementById("name").innerHTML = name;
document.getElementById("title").innerHTML = title;
document.getElementById("company").innerHTML = company;
document.getElementById("email").innerHTML = email;
document.getElementById("emailLink").href = `mailto:${email}`;
document.getElementById("phone").innerHTML = phone.replace(/[\s()-]+/gi, "");
document.getElementById("phoneLink").href = `tel:${phone}`;
document.getElementById("website").innerHTML = website.replace(/(^\w+:|^)\/\//,"");
document.getElementById("websiteLink").href = website;
document.getElementById("companyAddress").innerHTML = companyAddress;
document.getElementById("googleMapUrl").href = googleMapUrl;

{/* Template section */}
const iconAddress = "icon_address.jpg";
const iconEmail = "icon_email.jpg";
const iconPhone = "icon_phone.jpg";
const iconWebsite = "icon_website.jpg";
const rightArrow = "right-arrow.svg";

document.getElementById("iconAddress").src = `./Assets/${iconAddress}`;

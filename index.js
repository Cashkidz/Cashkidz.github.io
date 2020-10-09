{/* Profile section */}

const profilepic = "HOL_circle_color.svg";
const logo = "HOL_logo_grey.png";
const name = "John Tan";
const title = "HR";
const company = "Bountie";
const email = "JohnTanHR@Bountie.io";
const phone = "(+65) 9821 8213";
const website = "https://Bountie.io";
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
document.getElementById("phone").innerHTML = phone;
document.getElementById("phoneLink").href = `tel:${phone}.replace(/[\s()-]+/gi, "")`;
document.getElementById("website").innerHTML = website.replace(/(^\w+:|^)\/\//,"");
document.getElementById("websiteLink").href = website;
document.getElementById("companyAddress").innerHTML = companyAddress;
document.getElementById("googleMapUrl").href = googleMapUrl;

{/* Template section */}
const iconEmail = "icon_email.svg";
const iconPhone = "icon_phone.svg";
const iconWebsite = "icon_website.svg";
const iconAddress = "icon_address.svg";
const iconRightArrow = "right-arrow.svg";

document.getElementById("iconEmail").src = `./Assets/${iconEmail}`;
document.getElementById("iconPhone").src = `./Assets/${iconPhone}`;
document.getElementById("iconWebsite").src = `./Assets/${iconWebsite}`;
document.getElementById("iconAddress").src = `./Assets/${iconAddress}`;

var arrows = document.getElementsByClassName('iconRightArrow');
for (var i = 0; i < arrows.length; i++) {
  arrows[i].src=`./Assets/${iconRightArrow}`;
}
console.log(arrows[0].src)

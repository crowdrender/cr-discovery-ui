import createSnackbarItem from"./modules/Snackbar.js";import loadPage from"./modules/LoadPage.js";function init(){const a=document.querySelector(".resend-verification-email");a&&a.addEventListener("click",async()=>{const a=await fetch("/resend-verification-email",{credentials:"same-origin",method:"POST"});400>a.status?createSnackbarItem("Email Resent"):createSnackbarItem("Error Sending Email")})}loadPage().then(init);
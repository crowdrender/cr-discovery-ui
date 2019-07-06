import loadPage from"./modules/LoadPage.js";function insertAfter(a,b){b.parentNode.insertBefore(a,b.nextSibling)}function formToJSON(a){return Array.prototype.reduce.call(a.elements,(a,b)=>{const c=Object.assign({},a);return c[b.name]=b.value,c},{})}function setupSteps(){const a=document.querySelector(".setup-steps");if(a){const b=a.children;Array.from(b).forEach(a=>{const b=a.querySelector(".heading");b.addEventListener("click",()=>{a.classList.contains("open")?a.classList.remove("open"):a.classList.add("open")})})}return a}function addEventListeners(a){const b=document.querySelector(".download-addon");b.addEventListener("click",()=>{a.children[0].classList.add("complete")})}function handlePasswordFormSubmission(a){const b=document.querySelector("form[action=\"/update-password\"");b.addEventListener("submit",async c=>{c.preventDefault();const d=await fetch("/update-password",{method:"post",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(formToJSON(b))});if(200===d.status)a.children[1].classList.add("complete");else{const a=document.querySelector(".password-error");if(!a){const a=await d.json(),c=document.createElement("div"),e=document.createElement("p");e.textContent=a.outcome||"An error occurred",c.classList.add("message","error","password-error"),c.appendChild(e),insertAfter(c,b)}else{const b=await d.json();a.textContent=b.outcome}}})}function init(){const a=setupSteps();addEventListeners(a),handlePasswordFormSubmission(a)}loadPage().then(init);
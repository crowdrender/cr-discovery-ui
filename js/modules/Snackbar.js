export default function createSnackbarItem(a){const b=document.querySelector(".snackbar-container");if(!b)return;const c=document.createElement("div");c.classList.add("snackbar-item","visible");const d=document.createElement("div");d.classList.add("snackbar-content");const e=document.createElement("p");e.innerText=a,d.appendChild(e),c.appendChild(d),b.appendChild(c),c.addEventListener("click",()=>{c.classList.remove("visible")}),setTimeout(()=>{c.classList.remove("visible"),setTimeout(()=>{b&&b.removeChild(c)},1e3)},3e3)}
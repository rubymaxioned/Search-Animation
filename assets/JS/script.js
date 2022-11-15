const btn = document.querySelector(".btn-image");
const input = document.querySelector(".search-text");
btn.addEventListener("click",myFunction);
function myFunction(){
    input.classList.add('show');
}
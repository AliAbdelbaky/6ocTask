const submitbtn = document.querySelector(".form .form-btn .submitBtn"),
    thanksDiv = document.querySelector(".thanks");
console.log(submitbtn);
submitbtn.addEventListener("click", (e) => {
    thanksDiv.classList.add("show");
    console.log("working");
})
const psf = document.querySelector(".form  input[type='password']"),
    toggleb = document.querySelector(".form .field i");
var a = 0;
toggleb.onclick = () => {

    if (psf.type == "password") {

        psf.type = "text";
        toggleb.classList.add("active")
    } else {
        psf.type = "password";
        toggleb.classList.remove("active");
    }
}
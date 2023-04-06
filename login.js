const form = document.querySelector(".login form"),
    continueb = form.querySelector(".button input"),
    errorr = form.querySelector(".error");
form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
}
continueb.onclick = () => {
    // ajax
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("POST", "php/login.php");
    xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response;
                    if (data == "success") {

                        location.href = "users.php";
                    } else {

                        errorr.textContent = data;
                        errorr.style.display = "block";

                    }
                }
            }
        }
        // ajax to php 
    let formData = new FormData(form);

    xhr.send(formData);
}
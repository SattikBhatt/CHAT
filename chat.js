const form = document.querySelector(".typing"),
    inputfield = form.querySelector(".type"),
    sendbtn = form.querySelector("button"),
    chatboxx = document.querySelector(".chatbox");


form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
}

//chatboxx.scrollBy(0, chatboxx.scrollHeight);

sendbtn.onclick = () => {
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("POST", "php/insertchat.php");
    xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // let data = xhr.response;
                    inputfield.value = "";
                    scrollToBottom();
                    // window.scrollTo(0, document.body.scrollHeight);

                }
            }
        }
        // ajax to php 
    let formData = new FormData(form);

    xhr.send(formData);
}

chatboxx.onmouseenter = () => {
    chatboxx.classList.add("active");
}
chatboxx.onmouseleave = () => {
    chatboxx.classList.remove("active");
}


setInterval(() => {
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("POST", "php/getchat.php");
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;

                chatboxx.innerHTML = data;
                if (!chatboxx.classList.contains("active"))
                    scrollToBottom();

            }
        }
    }
    let formData = new FormData(form);

    xhr.send(formData); //sending form data to php
    // xhr.send();
}, 500);

function scrollToBottom() {
    chatboxx.scrollTop = chatboxx.scrollHeight;
}
const searchh = document.querySelector(".users .search input"),
    searchb = document.querySelector(".users .search button"),
    userslist = document.querySelector(".users .users-list");

searchb.onclick = () => {
    searchh.classList.toggle("active");
    searchh.focus();
    searchb.classList.toggle("active");
    searchh.value = "";

}
searchh.onkeyup = () => {
    let searchterm = searchh.value;
    if (searchterm != "") {
        searchh.classList.add("active");
    } else {
        searchh.classList.remove("active");

    }
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("POST", "php/search.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                userslist.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchterm=" + searchterm);
}
setInterval(() => {
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("GET", "php/users.php");
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (!searchh.classList.contains("active")) {
                    userslist.innerHTML = data;
                }

            }
        }
    }
    xhr.send();
}, 500);
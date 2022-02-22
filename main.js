function login() {
    username = document.getElementById("input_username").value;
    if (username == "" || username == null) {
        window.alert("Please Enter The User Name")
    } else {
    localStorage.setItem("UserName", username);
    window.location = "chattingpPage.html";
    }
}
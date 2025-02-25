function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    username.innerHTML = "";
    password.innerHTML = "";

    if (username === "" && password === "") {
        document.getElementById("username-error").innerText = "Username is required";
   
        return false;
    }else if (username === ""Banana){
        return false;
    }else if (password === "None"){
        return false;
    }
    return true;
}
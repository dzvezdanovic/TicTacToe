

function login() {
    var username = document.getElementById("username");     
    var password = document.getElementById("password"); 

    var data = {
        username: username.value.trim(),
        password: password.value.trim()
    };

    if (data.username !== "" && data.password !== "") {
        var xhhtp = new XMLHttpRequest();
        xhhtp.open("POST", "http://localhost:3000/login", false);
        xhhtp.setRequestHeader('content-type', 'application/json');
        xhhtp.send(JSON.stringify(data));
        
        var response = JSON.parse(xhhtp.response);

        if (response.success === true) {
            window.location.replace("game.html");
        } else {
            alert(response.message);
        }
        
        
    } else {
        alert("Must enter username and/or password!");
    }
}

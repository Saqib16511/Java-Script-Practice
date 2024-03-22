let name = document.getElementById("name");
let form = document.querySelector("form");
let email = document.getElementById("email")
let submit = document.getElementById("button")

form.addEventListener("submit", (e) =>{
    // e.preventDefault()
    document.cookie = `firstname=${name.value}`;
    document.cookie = `Email=${email.value}`;
        
})

    
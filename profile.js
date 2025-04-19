document.addEventListener("DOMContentLoaded", function () {
    fetch("profile.json")
        .then(response => response.json())
        .then(data => {
            // Nimi
            document.getElementById("firstName").textContent = `${data.firstName} ${data.lastName}`;
           
            // Vanus
            document.getElementById("age").textContent = `Age: ${data.age}`;
            
            // E-post
            document.getElementById("email").textContent = `Email: ${data["email"]}`;
        })
        //.catch(error => console.error("JSON-i laadimine ebaõnnestus:", error));
});
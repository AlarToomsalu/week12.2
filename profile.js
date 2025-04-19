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
          
            // Kas nii oleks õige, et kui tahta panna email läbi jsoni ikooni alla??
           // const emailLink = document.getElementById("email");
           // emailLink.href = `emailto:${data["email"]}`; 
           
        })
        
});
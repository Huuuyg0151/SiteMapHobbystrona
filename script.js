document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;
        let errorMessage = "";

       
        if (name === "") {
            isValid = false;
            errorMessage += "Proszę podać swoje imię.\n";
        }

  
        if (email === "") {
            isValid = false;
            errorMessage += "Proszę podać swój adres email.\n";
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage += "Proszę podać poprawny adres email.\n";
        }

    
        if (message === "") {
            isValid = false;
            errorMessage += "Proszę wpisać wiadomość.\n";
        }

        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });

   
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100vw";
            modal.style.height = "100vh";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            modal.style.zIndex = "1000";

            const enlargedImage = document.createElement("img");
            enlargedImage.src = image.src;
            enlargedImage.style.maxWidth = "90%";
            enlargedImage.style.maxHeight = "90%";
            enlargedImage.style.boxShadow = "0 0 15px white";
            enlargedImage.style.border = "3px solid white";

            modal.appendChild(enlargedImage);
            document.body.appendChild(modal);

            modal.addEventListener("click", function () {
                document.body.removeChild(modal);
            });
        });
    });
});

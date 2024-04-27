/*customForm*/

document.addEventListener("DOMContentLoaded", function() {
    var userNum = document.querySelector(".userNum");

    // Fonction pour cacher le texte du formulaire
    function hideFormText() {
        userNum.classList.add("hidden");

        // Retirer l'écouteur d'événement après la première interaction
        document.removeEventListener("click", hideFormText);
        document.removeEventListener("mousemove", hideFormText);
    }

    // Ajouter un écouteur d'événement pour le clic sur le document
    document.addEventListener("click", hideFormText);
    // Ajouter un écouteur d'événement pour le déplacement de souris
    document.addEventListener("mousemove", hideFormText);
});

/*animationTicket*/

const speed = 4.5;
const r = gsap.timeline({ repeat: -1 });
const o = gsap.timeline({ repeat: -1 });
const h = gsap.timeline({ repeat: -1 });

r.to("#app", {
    "--r": "180deg",
    "--p": "0%",
    duration: speed,
    ease: "sine.in"
});
r.to("#app", {
    "--r": "360deg",
    "--p": "100%",
    duration: speed,
    ease: "sine.out"
});
o.to("#app", {
    "--o": 1,
    duration: speed/2,
    ease: "power1.in"
});
o.to("#app", {
    "--o": 0,
    duration: speed/2,
    ease: "power1.out"
});

h.to("#app", {
    "--h": "100%",
    duration: speed/2,
    ease: "sine.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed/2,
    ease: "sine.out"
});
h.to("#app", {
    "--h": "0%",
    duration: speed/2,
    ease: "sine.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed/2,
    ease: "sine.out"
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélection du bouton
    var showFormButton = document.getElementById("showFormButton");
    
    // Sélection de la div du formulaire
    var vismeFormDiv = document.querySelector(".visme_d");

    // Écouteur d'événement pour le clic sur le bouton
    showFormButton.addEventListener("click", function() {
        // Affichage du formulaire en changeant sa visibilité
        vismeFormDiv.style.display = "block";
    });
});
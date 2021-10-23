var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "assets/images/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "assets/images/sun.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "assets/images/moon.png";
    localStorage.setItem("theme", "light");
  }
};

// Récupération du champ à enregistrer
var champ = document.getElementById("icon");

// Vérification de l'existence d'une donnée enregistrée auparavant
// (ce ne sera le cas que si la page a été rafraîchie)
if (sessionStorage.getItem("dark-theme")) {
  // Restauration du contenu du champ
  champ.value = sessionStorage.getItem("dark-theme");
}

// Écoute des changements de valeur du champ
champ.addEventListener("click", function () {
  // Enregistrement de la saisie utilisateur dans le stockage de session
  sessionStorage.setItem("dark-theme", champ.value);
});

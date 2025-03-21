// Vérifie que le script est bien chargé
console.log("Script chargé");

// Données des projets
const projects = {
    projet1: {
        title: "Repar Fermetures - Site Vitrine",
        image: "img/reparfermetures.png",
        description: "Un site vitrine conçu pour Antonio, dirigeant de Repar Fermetures du 41."
    },
    projet2: {
        title: "Elo aime lire - Blog",
        image: "img/eloaimelire.png",
        description: "Un petit blog de lecture pour moi-même."
    },
    projet3: {
        title: "Fleur de Pau - Site e-commerce",
        image: "img/fleurdepau.png",
        description: "Site e-commerce pour une entreprise indépendante, pour des créations artisanales."
    }
};

// Fonction pour ouvrir la modale avec les infos du projet
function openProject(projectId) {
    console.log("Ouverture du projet :", projectId); // Debug

    const modal = document.getElementById("modal");
    const project = projects[projectId];

    if (!project) {
        console.error("Projet non trouvé:", projectId);
        return;
    }

    // Vérifie si l'élément 'project-title' existe
    const titleElement = document.getElementById("project-title");
    const imageElement = document.getElementById("project-image");
    const descriptionElement = document.getElementById("project-description");

    if (!titleElement || !imageElement || !descriptionElement) {
        console.error("Éléments de la modale introuvables !");
        return;
    }

    titleElement.innerText = project.title;
    imageElement.src = project.image;
    descriptionElement.innerText = project.description;

    modal.style.display = "flex";
}

// Fermer la modale
function closeProject() {
    console.log("Fermeture de la modale"); // Debug
    document.getElementById("modal").style.display = "none";
}

// Fermer la modale en cliquant en dehors du contenu
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeProject();
    }
});

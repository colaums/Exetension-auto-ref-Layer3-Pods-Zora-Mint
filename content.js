// Fonction pour ajouter ou remplacer les paramètres ref, referrer, et invite dans l'URL
function addOrReplaceParams() {
  const newRefParam = "0x7f7ACA6Ba43602a87A7919aB990a8CDd885DB9c0";  // Adresse commune pour ref et referrer
  const newInviteParam = "0x7f7ACA6Ba43602a87A7919aB990a8CDd885DB9c0";  // Adresse pour invite

  const url = new URL(window.location.href);

  // Remplacer ou ajouter le paramètre ref pour app.layer3.xyz
  if (url.hostname.includes("app.layer3.xyz")) {
    if (url.searchParams.has("ref")) {
      url.searchParams.set("ref", newRefParam);  // Remplacer l'adresse actuelle
      console.log("Paramètre ref remplacé par : " + newRefParam);
    } else {
      url.searchParams.append("ref", newRefParam);  // Ajouter le paramètre ref s'il n'existe pas
      console.log("Paramètre ref ajouté avec : " + newRefParam);
    }
  }

  // Remplacer ou ajouter le paramètre referrer pour pods.media
  if (url.hostname.includes("pods.media")) {
    if (url.searchParams.has("referrer")) {
      url.searchParams.set("referrer", newRefParam);  // Remplacer l'adresse actuelle
      console.log("Paramètre referrer remplacé par : " + newRefParam);
    } else {
      url.searchParams.append("referrer", newRefParam);  // Ajouter le paramètre referrer s'il n'existe pas
      console.log("Paramètre referrer ajouté avec : " + newRefParam);
    }
  }

  // Remplacer ou ajouter le paramètre referrer pour zora.co
  if (url.hostname.includes("zora.co")) {
    if (url.searchParams.has("referrer")) {
      url.searchParams.set("referrer", newRefParam);  // Remplacer l'adresse actuelle
      console.log("Paramètre referrer remplacé par : " + newRefParam);
    } else {
      url.searchParams.append("referrer", newRefParam);  // Ajouter le paramètre referrer s'il n'existe pas
      console.log("Paramètre referrer ajouté avec : " + newRefParam);
    }
  }

  // Remplacer ou ajouter le paramètre invite pour mint.boost.xyz
  if (url.hostname.includes("mint.boost.xyz")) {
    if (url.searchParams.has("invite")) {
      url.searchParams.set("invite", newInviteParam);  // Remplacer l'adresse actuelle
      console.log("Paramètre invite remplacé par : " + newInviteParam);
    } else {
      url.searchParams.append("invite", newInviteParam);  // Ajouter le paramètre invite s'il n'existe pas
      console.log("Paramètre invite ajouté avec : " + newInviteParam);
    }
  }

  // Si des modifications ont été apportées à l'URL, on remplace l'URL sans recharger la page
  if (url.searchParams.has("ref") || url.searchParams.has("referrer") || url.searchParams.has("invite")) {
    window.history.replaceState({}, document.title, url.toString());
  }
}

// Exécuter la fonction dès que le script est chargé
addOrReplaceParams();

// Surveillance pour détecter les changements d'URL (utile pour les sites avec une navigation dynamique)
let lastUrl = window.location.href;
setInterval(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href;
    addOrReplaceParams();
  }
}, 500);

console.log("Script de contenu chargé sur " + window.location.href);

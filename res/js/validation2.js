function validateForm() {
    // Récupérer les valeurs des champs
    var nom = document.getElementById('nom').value;
    var jour = document.getElementById('jour').value;
    var heure = document.getElementById('heure').value;
    var duree = document.getElementById('duree').value;
    var commentaire = document.getElementById('commentaire').value;

    // Effectuer la validation des champs
    if (nom === '' || jour === '' || heure === '' || duree === '' || commentaire === '') {
        // Afficher une alerte si des champs sont vides
        alert('Veuillez remplir tous les champs.');
        return false; // Empêcher la soumission du formulaire
    }

}
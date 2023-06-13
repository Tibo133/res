function validateForm() {
    // Récupérer les valeurs des champs
    var nom = document.getElementById('nom').value;
    var adresse = document.getElementById('adresse').value;
    var bas = document.getElementById('bas').value;
    var tarif = document.getElementById('tarif').value;
    var horairo = document.getElementById('horairo').value;
    var horairf = document.getElementById('horairf').value;

    // Effectuer la validation des champs
    if (nom === '' || adresse === '' || bas === '' || tarif === '' || horairo === '' || horairf === '') {
        // Afficher une alerte si des champs sont vides
        alert('Veuillez remplir tous les champs.');
        return false; // Empêcher la soumission du formulaire
    }

    // Validation spécifique à l'horaire d'ouverture
    if (!isValidHoraire(horairo)) {
        // Afficher une pop-up d'erreur si l'horaire d'ouverture est invalide
        alert('L\'horaire d\'ouverture est invalide. Veuillez le modifier.');
        return false; // Empêcher la soumission du formulaire
    }

    if (!isValidHoraire(horairf)){
        // Afficher une pop-up d'erreur si l'horaire d'ouverture est invalide
        alert('L\'horaire de fermeture est invalide. Veuillez le modifier.');
        return false; // Empêcher la soumission du formulaire
    }

    // Autres validations spécifiques si nécessaire

    return true; // Permettre la soumission du formulaire si tout est correct
}

function isValidHoraire(horaire) {
    // Vérifier si l'horaire est dans un format correct
    // Par exemple, vous pouvez utiliser une expression régulière pour vérifier le format
    var regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(horaire);
}

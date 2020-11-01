<?php

return [
    'list' => [
        'name'   => 'Nom',
        'email'  => 'Adresse Email',
        'status' => "Status d\'envoi' de l'email",
    ],
    'up_and_sent'   => 'Modifié avec succès !',
    'deleted'       => 'Toutes les données ont été supprimées',
    'purge'         => [
        'button' => 'Supprimer tout',
        'confirm' => [
            'title' => 'Êtes-vous sûr de vouloir supprimer la totalité des données avant leur expiration le :expiration ?',
            'body' => 'Vous ne recevrez pas le récapitulatif des tirages de cet évènement et les participants ne pourront plus écrire à leur père noël secrêt. Cette action ne peut être annulée.',
            'value' => 'Supprimer toutes les données',
            // Use !: not to be transformed by vue-i18n-generator
            'help' => 'Entrez "[+!:verification]" en dessous pour confirmer',
            'ok' => 'Purger',
            'cancel' => 'Annuler',
        ],
    ],
];

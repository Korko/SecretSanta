export default {
    "fr": {
        "organizer": {
            "list": {
                "name": "Nom",
                "email": "Adresse Email",
                "status": "Status de réception de l'email"
            },
            "up_and_sent": "Modifié avec succès !"
        },
        "common": {
            "internal": "Une erreur est survenue",
            "fetcher": {
                "load": "Charger",
                "loading": "Chargement en cours..."
            },
            "form": {
                "send": "Envoyer",
                "sending": "Envoi en cours",
                "sent": "Envoyé"
            },
            "modal": {
                "close": "Fermer"
            }
        },
        "dearsanta": {
            "list": {
                "date": "Date d'envoi",
                "body": "Corps du message",
                "status": "Status de réception de l'email",
                "empty": "Aucun email envoyé pour le moment"
            },
            "content": {
                "label": "Contenu du mail",
                "placeholder": "Cher Papa Noël..."
            }
        },
        "form": {
            "nav": {
                "what": "Qu'est-ce que c'est ?",
                "how": "Comment faire ?",
                "go": "Allez, c'est parti !",
                "faq": "FAQ"
            },
            "title": "Secret Santa .fr",
            "subtitle": "Offrez-vous des cadeaux... secrètement !",
            "fyi": "Pour votre information",
            "section": {
                "what": {
                    "title": "Qu'est-ce que c'est ?",
                    "subtitle": "Description du Secret Santa",
                    "heading1": "Le principe",
                    "content1": "Secret Santa est un moyen drôle et original de s'offrir anonymement des cadeaux entre amis, collègues...\nLe déroulement est simple : chaque participant reçoit, de façon aléatoire, le nom de la personne à qui il devra faire un cadeau.\nLe montant du cadeau est généralement fixé au préalable (2€, 5€, 10€...)\nLe but n'est pas forcément de faire un beau cadeau mais d'être créatif !",
                    "notice": "secretsanta.fr est entièrement gratuit et sans publicité.\nTout est payé par le développeur lui-même.\nSi cet outil vous plait, pensez à faire un don.\n{button}"
                },
                "how": {
                    "title": "Comment faire ?",
                    "subtitle": "Vous allez voir, c'est simple !",
                    "heading1": "Première étape : spécifier le nombre et les noms des participants",
                    "content1": "Grâce aux boutons \"Ajouter un participant\" et \"Enlever un participant\", il est possible d'ajuster le nombre de personnes.\nPour chaque personne, indiquez un nom/prénom ou un pseudonyme. Deux participants ne peuvent avoir le même nom, sinon il est impossible de les différencier.\nA noter que secretsanta.fr est conçu de façon à ce qu'une personne ne puisse pas se piocher elle-même.",
                    "heading2": "Deuxième étape : remplir les informations de contact et les exclusions",
                    "content2": "(Optionel) Ajoutez des exclusions. Si vous ne voulez pas que deux participants puissent se piocher l'un l'autre, remplissez le champ \"Exclusions\".",
                    "heading3": "Troisième étape : préparer l'e-mail",
                    "content3": "Il ne vous reste plus qu'à remplir le titre et le corps du courriel que les participants recevront.\nLe mot clef \"{TARGET}\" est obligatoire dans le corps du message afin de donner à chaque personne sa \"cible\".\n(Optionel) Vous pouvez aussi utiliser le mot clef \"{SANTA}\" qui sera remplacé par le nom du destinataire du message.",
                    "notice": "secretsanta.fr ne sauvegarde vos données que lorsque cela est requis.\nCelles-ci sont chiffrées pour être inutilisables sans action de votre part.\nAucune de ces données ne seront partagées et vous avez le contrôle total sur celles-ci.\nLe code source est disponible sur {link}"
                },
                "go": {
                    "title": "À vous de jouer !",
                    "subtitle": "Remplissez, cliquez et c'est parti !"
                }
            },
            "waiting": "Formulaire en cours de création. Si ce message reste affiché, essayez de rafraichir la page, sinon contactez moi par mail (<a href=\"mailto:&#x6a;&#x65;&#x72;&#x65;&#x6d;&#x79;&#x2e;&#x6c;&#x65;&#x6d;&#x65;&#x73;&#x6c;&#x65;&#x40;&#x6b;&#x6f;&#x72;&#x6b;&#x6f;&#x2e;&#x66;&#x72;\">&#x6a;&#x65;&#x72;&#x65;&#x6d;&#x79;&#x2e;&#x6c;&#x65;&#x6d;&#x65;&#x73;&#x6c;&#x65;&#x40;&#x6b;&#x6f;&#x72;&#x6b;&#x6f;&#x2e;&#x66;&#x72;</a>) ou via <a href=\"https://github.com/Korko\">GitHub</a>. Merci.",
            "success": "Envoyé avec succès !",
            "participants": {
                "title": "Détails des participants",
                "import": "Importer depuis un fichier",
                "importing": "Import en cours"
            },
            "participant": {
                "organizer": "Organisateur",
                "name": {
                    "label": "Nom ou pseudonyme",
                    "placeholder": "exemple : Paul ou Korko"
                },
                "email": {
                    "label": "Adresse e-mail",
                    "placeholder": "exemple : michel@aol.com"
                },
                "exclusions": {
                    "label": "Exclusions",
                    "placeholder": "Aucune exclusion"
                },
                "remove": "Enlever",
                "add": "Ajouter un participant"
            },
            "csv": {
                "title": "Importer une liste de participants depuis un fichier CSV",
                "help": "Comment créer un fichier CSV avec {excel} Microsoft Office Excel {elink} ou {calc} Libre Office Calc {elink}",
                "format": "Afin que votre fichier CSV fonctionne, voici le format attendu :",
                "column1": "Nom du participant",
                "column2": "Adresse e-mail",
                "column3": "Exclusions (noms séparés par une virgule)",
                "warning": "Attention, l'import de ces données supprimera les participants déjà renseignés.",
                "cancel": "Annuler",
                "import": "Importer",
                "importError": "Une erreur est survenue lors de l'import.",
                "importSuccess": "L'import a été effectué avec succès."
            },
            "mail": {
                "title": {
                    "label": "Titre du mail",
                    "placeholder": "ex : Soirée secretsanta du 23 décembre chez Martin"
                },
                "content": {
                    "label": "Contenu du mail",
                    "placeholder": "ex : Salut {SANTA}, pour la soirée secret santa, ta cible c'est {TARGET}. Pour rappel, le montant du cadeau est de 3€ !",
                    "tip1": "Utilisez \"{open}-santa{SANTA}{close}\" pour le nom de celui qui recevra le mail et \"{open}-target{TARGET}{close}\" pour le nom de sa cible.",
                    "tip2": "Conseil : Pensez à rappeler la date, le lieu ainsi que le montant du cadeau."
                },
                "post": "----\nPour écrire à votre Secret Santa, allez sur la page suivante : {link}\nvia SecretSanta.fr"
            },
            "data-expiration": "Date limite de stockage des emails",
            "submit": "Lancez l'aléatoire !",
            "paypal": {
                "alt": "PayPal, le réflexe sécurité pour payer en ligne"
            },
            "validation": {
                "title": {
                    "required": "Le titre de l'email est requis."
                },
                "content": {
                    "required": "Le contenu de l'email est requis.",
                    "contains": "Le contenu de l'email doit contenir le mot {TARGET} pour indiquer la cible."
                },
                "expiration": {
                    "required": "La date d'expiration est requise.",
                    "minValue": "La date d'expiration ne peut pas précéder demain.",
                    "maxValue": "La date d'expiration ne peut pas dépasser un an."
                },
                "participant": {
                    "name": {
                        "required": "Ce participant est requis (au moins 3 personnes).",
                        "unique": "Ce participant n'a pas un nom unique."
                    },
                    "email": {
                        "required": "Cette adresse email est requise.",
                        "format": "Le format de cette adresse est invalide."
                    }
                }
            }
        }
    }
}
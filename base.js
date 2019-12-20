const questObj = [
    {
        "question": "Suite à la réforme territoriale, combien la France métropolitaine compte-t-elle de régions ?",
        "bonne_reponse": '13',
        "reponse": ['13', '15', '17', '11'],
    },
    {
        "question": "Quels objets du quotidien le graphiste Robert Kalina a-t-il été chargé de décliner en 7 motifs différents ?",
        "bonne_reponse": 'LES BILLETS EN EUROS',
        "reponse": ['LES ASSIETTES EN PORCELAINES', 'LES PIECES DE MONNAIES (EUROS)', 'LES BILLETS EN EUROS', 'LES CROQUETTES KALINA'],
    },
    {
        "question": "En 1794, quel baron, mort à la bataille de la Moskova, est à l’origine de l’arrestation de Robespierre ?",
        "bonne_reponse": 'MERDA (CHARLES-ANDRE)',
        "reponse": ['MERDA (CHARLES-ANDRE)', 'NAPOLÉON 1ER', 'MIKHAÏL KOUTOUZOV', "IL C'EST RENDU LUI MÊME"],
    },
    {
        "question": "Quel genre d’animal est la tégénaire qui tisse des toiles dans les angles des greniers et des caves ?",
        "bonne_reponse": 'UNE ARAIGNÉE',
        "reponse": ['UN MOUSTIQUE', 'UN CAFARD', "UNE ABEÏLLE", "UNE ARAIGNÉE"],
    },
    {
        "question": "En géométrie, quel adjectif qualifie un angle de 180° ?",
        "bonne_reponse": "PLAT",
        "reponse": ["TORDU", "RECTANGLE", "PLAT", "RENVERSÉ"],
    },
    {
        "question": "En droit civil, quelle locution latine est utilisée pour désigner un bien n’appartenant à personne ?",
        "bonne_reponse": "RES NULLIUS",
        "reponse": ["RES NULLIUS", "OMNES", "PRIMUS VENERIT, PRIMUS SERVIVIT", "ASSURANCETOURIX"],
    },
    {
        "question": "Quel fruit a pour variétés Kioto, Bergeron, Big red et Rouge du Roussillon ?",
        "bonne_reponse": "ABRICOT",
        "reponse": ["FRAISE", "POMME", "ABRICOT", "PÊCHE"],
    },
    {
        "question": "Quel footballeur né en 1966 est le premier joueur Africain à recevoir le ballon d’or ?",
        "bonne_reponse": "GEORGE WEAH",
        "reponse": ["THÉOPHILE ABEGA", "SALIF KEÏTA", "ROGER MILLA", "GEORGE WEAH"],
    },
];


function question_aleatoire() {
    $('.reponse').css('background', '#2A0E5B').hover(function () {
        $(this).css('background', '#fba900').find('span').css('color', 'black')
    }, function () {
        $(this).css('background', '#2A0E5B').find('span').css('color', '#00bf00');
        $(this).find('.choix_reponse').css('color', 'white')
    });
    $('span').css('color', '#00bf00');
    $('.choix_reponse').css('color', 'white');
    const chiffre_ale = Math.floor(Math.random() * questObj.length);
    $.each(questObj.slice(chiffre_ale, chiffre_ale + 1), function(index , value) {
        $('#question').text(value.question);
        const reponse = value.reponse;
        for (let pos = reponse.length-1; pos >= 1; pos--) {
            const hasard = Math.floor(Math.random() * (pos + 1));
            const sauve = reponse[pos];
            reponse[pos] = reponse[hasard];
            reponse[hasard] = sauve;
        }
        $('.choix_reponse').each(function (index) {
            $(this).text(reponse[index])
        });
        $('.reponse').click(function f() {
            $('.reponse').unbind('click').hover(function () {
                $(this).css('background', '#2A0E5B');
                $(this).find('span').css('color', '#00bf00');
                $(this).find('.choix_reponse').css('color', 'white')
            });
            if ($(this).find('.choix_reponse').text() === value.bonne_reponse) {
                $(this).css('background', 'green');
                $(this).hover(function () {
                    $(this).css('background', 'green');
                });
                $(this).find('span').css('color', 'black');
                $(this).hover(function () {
                    $(this).find('span').css('color', 'black')
                });
                setTimeout(question_aleatoire, 2000);
            } else {
                $(this).css('background', 'red').hover(function () {
                    $(this).css('background', 'red')
                });
                $(this).find('span').css('color', 'black');
                $(this).hover(function () {
                    $(this).find('span').css('color', 'black')
                });
                setTimeout(question_aleatoire, 2000);
            }
        });
    });
}

question_aleatoire();


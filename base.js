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
        "bonne_reponse": 'CHARLES-ANDRE MERDA',
        "reponse": ['CHARLES-ANDRE MERDA', 'NAPOLÉON 1ER', 'MIKHAÏL KOUTOUZOV', "IL C'EST RENDU LUI MÊME"],
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
    {
        "question": "Quel grammairien français, évoqué dans les Femmes Savantes a été l’un des premiers membres de l’Académie Française ?",
        "bonne_reponse": "CLAUDE FAVRE",
        "reponse": ["CLAUDE FAVRE", "ÉMILE EGGER", "FRANÇOIS NOËL", "LOUIS DOMAIRON"],
    },
    {
        "question": "En médecine, quelle infection virale courante est une inflammation des amygdales ?",
        "bonne_reponse": "UNE ANGINE",
        "reponse": ["UNE ANGINE", "UNE PHARYNGITE", "LA GONORRHÉE", "LA GRIPPE"],
    },
    {
        "question": "A quel astre fait référence l’autre nom de la plante herbacée appelée Monnaie du pape ?",
        "bonne_reponse": "LA LUNE",
        "reponse": ["LA LUNE", "MARS", "LE SOLEIL", "MON FESSIER"],
    },
    {
        "question": "Quelle céréale cultivée en Ethiopie produit des graines parmi les plus petites au monde ?",
        "bonne_reponse": "TEFF",
        "reponse": ["TEFF", "AVOINE", "SORGHO", "MILLET"],
    },
    {
        "question": "Dans quel pays d’Afrique australe se trouve le désert côtier du Namib ?",
        "bonne_reponse": "NAMIBIE",
        "reponse": ["NAMIBIE", "MAMIBLUE", "NAMIBOU", "NAMIGLOU"],
    },
    {
        "question": "Quelle matière très résistante à la chaleur appelait-on autrefois Asbeste ?",
        "bonne_reponse": "AMIANTE",
        "reponse": ["AMIANTE", "CYPRINE", "CARBONE", "ZINC"],
    },
    {
        "question": "De quel pays l’Ibex 35 est-il le principal indice boursier ?",
        "bonne_reponse": "L'ESPAGNE",
        "reponse": ["L'ESPAGNE", "LA FRANCE", "L'ALLEMAGNE", "L'ITALIE"],
    },
    {
        "question": "Dans quelle grande ville américaine le Lieutenant Colombo mène-t-il ses enquêtes ?",
        "bonne_reponse": "LOS ANGELES",
        "reponse": ["LAS VEGAS", "MIAMI", "LOS ANGELES", "MANHATTAN"],
    },
    {
        "question": "De quelle arme un objet ensiforme a-t-il l’aspect ?",
        "bonne_reponse": "D’UNE EPÉE",
        "reponse": ["D’UNE EPÉE", "D'UN FUSIL", "D'UN ARC", "D'UNE MATRAQUE"],
    },
    {
        "question": "En halieutique, quel verbe désigne l’action de troubler l’eau pour faciliter la pêche ?",
        "bonne_reponse": "RABOUILLER",
        "reponse": ["BATTRE", "RABOUILLER", "BOUILLER", "URINER"],
    },
    {
        "question": "Quelle expédition ayant duré 8 mois a été organisée par André Citroën sur le continent Africain ?",
        "bonne_reponse": "LA CROISIÈRE NOIRE",
        "reponse": ["LA CROISIÈRE NOIRE", "LA CROISIÈRE JAUNE", "LA CROISIÈRE MAGENTA", "LA CROISIÈRE C4 PICASSO"],
    },
    {
        "question": "Quel mollusque bivalve est appelé clovisse en Provence ?",
        "bonne_reponse": "LA PALOURDE",
        "reponse": ["LA PALOURDE", "L'HUÎTRE", "LA MOULE", "LE PÉTONCLE"],
    },
    {
        "question": "Dans la mythologie grecque, qu'elle néréide fut changée en fontaine par Artémis afin d’échapper à Alphée ?",
        "bonne_reponse": "ARETHUSE",
        "reponse": ["ARETHUSE", "AMPHITRITE", "THÉTIS", "PSAMATHÉE"],
    },
    {
        "question": "Quel président Américain est mort le même jour que l’écrivain Aldous Huxley, le 22 novembre 1963 ?",
        "bonne_reponse": "JOHN FITZGERALD KENNEDY",
        "reponse": ["JOHN FITZGERALD KENNEDY", "HERBERT CLARK HOOVER", "JOHN TYLER", "BARACK HUSSEIN OBAMA"],
    },
    {
        "question": "Sur un tableau de 1834, quel peintre représente ses 3 sœurs écrivaines Emily, Charlotte et Anne ?",
        "bonne_reponse": "PATRICK BRANWELL BRONTË",
        "reponse": ["PATRICK BRANWELL BRONTË", "JEAN HIPPOLYTE FLANDRIN", "GIUSEPPE ELENA", "JOSEPH MALLORD WILLIAM TURNER"],
    },
    {
        "question": "Quelle est la nationalité du coureur cycliste Jarlinson Pantano ?",
        "bonne_reponse": "COLOMBIENNE",
        "reponse": ["ITALIENNE", "MONGOLIENNE", "CONGOLAISE", "COLOMBIENNE"],
    },
    {
        "question": "En anatomie, de quelle partie du pied parle-t-on lorsque l’on évoque l’hallux ?",
        "bonne_reponse": "LE GROS ORTEIL",
        "reponse": ["LE GROS ORTEIL", "LE TALON", "MÉTATARSE", "LE POIGNET"],
    },
    {
        "question": "Quel mot peut désigner à la fois une abstinence alimentaire, et le parlement Polonais ?",
        "bonne_reponse": "LA DIETE",
        "reponse": ["LA DIETE", "LA DALLE", "LA PAUVRETÉ", "LE SEVRAGE"],
    },
    {
        "question": "Quel prénom est commun à la marionnette de Jeff Panacloc et à l’animateur Morandini ?",
        "bonne_reponse": "JEAN-MARC",
        "reponse": ["LEAN-LUC", "J'EMMERDE", "JEAN-MARC", "JEAN-CHRISTOPHE"],
    },
    {
        "question": "Parmi les 7 péchés capitaux, lequel est synonyme de pingrerie ? ",
        "bonne_reponse": "L'AVARICE",
        "reponse": ["LA GOURMANDISE", "L'AVARICE", "LA PARESSE", "L'ORGUEIL"],
    },
    {
        "question": "Quelle confiserie à base de miel, d’amandes et de blancs d’œufs est une variante espagnole du nougat ?",
        "bonne_reponse": "LE TOURON",
        "reponse": ["LA NOUGATINE", "LE TOURON", "LE GAZ", "PASTELLAKI"],
    },
    {
        "question": "Sur quel continent peut-on croiser un serpent au corps très fin appelé serpent-liane ?",
        "bonne_reponse": "AMÉRIQUE DU SUD",
        "reponse": ["AMÉRIQUE DU SUD", "AMÉRIQUE DU NORD", "EUROPE", "AFRIQUE"],
    },
];
const reponseCase = $('.reponse');
let bonneReponse = 0;
let mauvaiseReponse = 0;
let questionRepondu = 1;
let coupRestant;
let questionTotal = questObj.length;
const question_repondu = $('.question_repondu');

function end() {
    $('#jeux').css('display', 'none');
    $('.fin').css('display', 'flex');
    question_repondu.text(questionRepondu - 1);
    $('.mauvaise_reponse').text(mauvaiseReponse);
    $('.bonne_reponse').text(bonneReponse);
}

function question_aleatoire() {
    $('.coup_restant').text(coupRestant);
    question_repondu.text(questionRepondu);
    reponseCase.css('background', '#2A0E5B').hover(function () {
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

        $('.reponse').click(function () {
            reponseCase.unbind('click').hover(function () {
                $(this).css('background', '#2A0E5B');
                $(this).find('span').css('color', '#00bf00');
                $(this).find('.choix_reponse').css('color', 'white');
            });
            if ($(this).find('.choix_reponse').text() === value.bonne_reponse) {
                $(this).css('background', 'green');
                $(this).hover(function () {
                    $(this).css('background', 'green');
                    $(this).find('span').css('color', 'black')
                });
                bonneReponse++;
            } else {
                $(this).css('background', 'red').hover(function () {
                    $(this).css('background', 'red')
                });
                $(this).find('span').css('color', 'black');
                $(this).hover(function () {
                    $(this).find('span').css('color', 'black')
                });
                coupRestant--;
                mauvaiseReponse++;
            }
            $('.reponse').each(function () {
                if ($(this).find('.choix_reponse').text() === value.bonne_reponse) {
                    $(this).css('background', 'green');
                    $(this).find('span').css('color', 'black');
                    $(this).hover(function () {
                        $(this).css('background', 'green');
                        $(this).find('span').css('color', 'black')
                    });
                }
            });
            questionRepondu++;
            questObj.splice(chiffre_ale, 1);
            setTimeout(question_aleatoire, 2000);
        });
    });

    if (coupRestant < 1) {
        end();
        $('.phrase_resultat').text('Dommage, Vous avez répondu avez perdu');
    }
    if (questionRepondu > 30) {
        end();
        $('.phrase_resultat').text('Félicitation, vous avez gagnez');
    }
}

$('#jouer').click(function () {
    $('#accueil').css('display', 'none');
    $('#jeux').css('display', 'block');
    const selection = $("select[name='Difficulté'] > option:selected");
    if (selection.val() === 'facile') {
        coupRestant = 10;
    }
    if (selection.val() === 'normale') {
        coupRestant = 8;
    }
    if (selection.val() === 'difficile') {
        coupRestant = 5
    }
    $('.question_total').text(questionTotal);
    question_aleatoire();
});

$('#rejouer').click(function () {
    window.location.reload()
});
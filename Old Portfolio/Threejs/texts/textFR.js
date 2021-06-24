const otherFR = {
  cvLink: "./documents/CV_Rachet_Guillaume_FR.pdf",
  commandPanel: "Couper le son : M \n  Se deplacer : ← ↑ → ↓",

  hireMe: {
    title: "Contact",
    mail: "guillaume.rachet@gmail.com",
    tel: "+33 6 65 19 45 06",
    address: "13 rue du Grand Noyer 78280 Guyancourt",
  },

  about: {
    title: "A Propos",
    text: "Actuellement en licence pro PRISM à Orsay, je souhaiterais effectuer une formation afin d'approfondir plus encore " +
      "ma spécialisation. J'utilise les technologies Javascript sous toutes leurs formes (React, Node, NoSQL...) que j'aime et qui me semblent être l'avenir du développement web.",
  },

  jobs: {
    title: "Experiences",
  },

  projects: {
    title: "Projets",
  },

  studies: {
    title: "Etudes",
  },

  buttonME: "CURSUS",
  buttonProject: "PROJETS",
  buttonContact: "CONTACT",
  titlePage: "Un jeune développeur web passionné par REACT.",

  titleCursus: "Mon projet préféré ? C’est le prochain.",
  mail: {
    sendWorking: "Email envoyé !",
    title: "Construisons quelque chose ensemble",
    mailInput: "Votre email",
    subjectInput: "Sujet",
    messageInput: "Message",
    buttonSend: "Envoyer",
  },
  titleSkills: "Ma veille technologique",
  skills: [
    {
      text: "Concevoir des applications ",
      skills: ["React/Redux", "Angular", "Symphony"]
    },
    {
      text: "API et Webservices",
      skills: ["NodeJS", "Express", "Google/Microsoft... API"]
    },
    {
      text: "Base de données",
      skills: ["NoSQL", "Firebase", "Couch DB", "Oracle"]
    },
    {
      text: "Devellopper des application mobiles",
      skills: ["React native"]
    },
    {
      text: "Mettre en production",
      skills: ["Nom de domaine/Hebergeurs", "FTP/SSH", "Google play"]
    },
    {
      text: "Gérer un projet et sa timeline",
      skills: ["GitHub/Lab/Bitbucket", "Méthode Agile", "Trello", "Uml"]
    },
  ]
}

const projectsFR = {
  projects: [
    {
      name: "Organisateur de voyage",
      description: "Placer des points d'intéret sur une carte pour organiser vos voyages.",

      url: "https://react-gmap-place-server-2be4c.firebaseapp.com/",
      githubUrl: "https://github.com/grachet/react-gmap-places-saver",
      src: "gmap",
    },
    {
      name: "Appli de calcul",
      description: "En react native, disponible uniquement sur le store Android.",

      url: "https://play.google.com/store",
      githubUrl: "https://github.com/grachet/react-linearization-app",
      src: "app",
    },
    {
      name: "Organiseur Web",
      description: "Appli Angular5 qui gère des palettes de couleurs, notes et listes d'objectifs par projet.",
      url: "http://note.rachet.fr",
      githubUrl: "https://github.com/grachet/web-note-app",
      src: "webnote",
    },
    {
      name: "Boiler Plate React/Redux/Auth/ MaterialUI/Firebase...",
      description: "Me permet de commencer rapidement un projet, disponible en open source.",
      url: "https://react-projects-boilerplate.firebaseapp.com/",
      githubUrl: "https://github.com/grachet/react-projects-boilerplate",
      src: "boiler",
    },
    {
      name: "Jeu en ligne",
      description: "Mon premier projet JS.",

      url: "https://space-game-attack.firebaseapp.com/",
      githubUrl: "https://github.com/grachet/space-attack",
      src: "game",
    }
  ]
}

const cvFR = {
  formation: {
    2020: {
      name: "Master 2 en développement logiciel",
      date: "2020 - 2021",
      description: "ETGL AFTI Orsay"
    },
    2019: {
      name: "Master 1 en développement logiciel",
      date: "2019 - 2020",
      description: "ETGL AFTI Orsay"
    },
    2018: {
      name: "Licence pro en développement web/mobile",
      date: "2018 - 2019",
      description: "Licence PRISM Orsay"
    },
    2017: {
      name: "DUT Informatique",
      date: "2017 - 2018",
      description: "Année spéciale (formation 1 an)"
    },
    2016: {
      name: "École d’ingénieurs BTP (3eme année)",
      date: "2014 – 2017",
      description: "Reconversion en milieu d'année, ISA BTP Anglet, ingénieur génie civil"
    },
    2015: {
      name: "École d’ingénieurs BTP (2eme année)",
      date: "2014 – 2017",
      description: "ISA BTP Anglet, ingénieur génie civil"
    },
    2014: {
      name: "École d’ingénieurs BTP (1ere année)",
      date: "2014 – 2017",
      description: "ISA BTP Anglet, ingénieur génie civil"
    },
    2013: {
      name: "BAC S - Sciences de l’ingénieur",
      date: "2014",
      description: "Mention bien"
    },
  },

  company: {
    2020: {
      name: [
        "Alternance | React.js | Nokia",
      ],
      date: "2020",
      description: [
        "Alternance 3 sem/mois à Nokia, plateforme web de génération de cours powerpoint en React.js",
      ]
    },
    2019: {
      name: [
        "Alternance | React.js | Nokia",
      ],
      date: "2019",
      description: [
        "Alternance 3 sem/mois à Nokia, plateforme web de génération de cours powerpoint en React.js",
      ]
    },
    2018: {
      name: [
        "Alternance | React.js | Nokia",
        "Stage 2 mois | React Native | Tuddl",
        "Freelance | React Native | Hitec"
      ],
      date: "2018",
      description: [
        "Alternance 3j/semaine à Nokia, plateforme web de génération de cours powerpoint en React.js",
        "Developpement d'un réseau social multi-support en react native",
        "Developpement d'une application multi-support en react native de linéarisation d'une cuve"
      ]
    },
    2017: {
      name: ["CDI étudiant 16h | Conseiller | LEROY MERLIN",
        "CDD 6 mois | Logisticien | LEROY MERLIN",
        "Interim | Ouvrier | RESINE 2000"
      ],
      date: "2014 – 2017",
      description: [
        "Conseiller/vendeur en matériaux de construction : " +
        " devis, conseil client",
        "Conseiller/logisticien en matériaux de construction : " +
        " conseil client, conduite de chariot élévateur, mise en rayon",
        "Pose de résine sur un parking à l’Aéroport d’Orly"
      ]
    },
    2016: {
      name: "STAGE 2 mois | Architecte | INTER ENERGIES",
      date: "2017 - 2018",
      description:
        "Bureau d’études de prix, modification de plans d’architecte" +
        " Chantier de climatisation réversible, plomberie, chauffage"
    },
    2015: {
      name: ["AUTO-ENTREPRENEUR | Plieur de parachute", "STAGE 2 mois | Ouvrier | BAB TP"],
      date: "2015",
      description: [
        "Plieur de parachute TANDEM à l’aérodrome Biarritz",
        "Enterrement de réseaux gaz, eau, électricité, télécoms",
      ]
    },
  },
}

const textFR = {
  projects: projectsFR,
  cv: cvFR,
  ...otherFR
}
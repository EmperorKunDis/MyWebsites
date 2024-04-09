function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
let language = {
  eng: {
    buttonLanguageMenu: "Language",
    buttonEnglish: "English",
    buttonGerman: "German",
    buttonCzech: "Czech",
    home: "Home",
    aboutme: "About Me",
    contacts: "Contacts",
    project: "Projects",
    devby: "© 2024 - Website developed by" + "Martin EmperorKunDis Švanda",
    calltoaction: "Call to Action",
    basedon: "Based on work of",
    welcome: "Hello there My name is",
    welcomejoke: "I'm NOT General Kenoby",
    contactsbot: "Contact",
  },
  de: {
    buttonLanguageMenu: "Sprache",
    buttonEnglish: "Englisch",
    buttonCzech: "Tschechisch",
    buttonGerman: "Deutsch",
    home: "Startseite",
    aboutme: "Über mich",
    contacts: "Kontakte",
    project: "Projekte",
    devby: "© 2024 - Website entwickelt von " + "Martin EmperorKunDis Švanda",
    calltoaction: "Aufruf zum Handeln",
    basedon: "Basierend auf der Arbeit von",
    welcome: "Hello there Meine name ist",
    welcomejoke: "Ich bin kein allgemeiner Kenobi",
    contactsbot: "Kontakte",
  },
  cz: {
    buttonLanguageMenu: "Jazyk",
    buttonEnglish: "Anglický",
    buttonGerman: "Nemecký",
    buttonCzech: "Český",
    home: "Domaci obrazovka",
    aboutme: "O mne",
    contacts: "Kontakty",
    project: "Projekty",
    devby: "© 2024 - Website vyvinuta " + "Martinem EmperorKunDis Švandou",
    calltoaction: "Zavolat do akce",
    basedon: "Zakladem byla prace : ",
    welcome: "Hello there Jmenuju se ",
    welcomejoke: "Ja nejsem General Kenoby",
    contactsbot: "Kontakt na me:",
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  if (window.location.hash == "#de") {
    buttonLanguageMenu.textContent = language.de.buttonLanguageMenu;
    buttonEnglish.textContent = language.de.buttonEnglish;
    buttonCzech.textContent = language.de.buttonCzech;
    buttonGerman.textContent = language.de.buttonGerman;
    home.textContent = language.de.home;
    aboutme.textContent = language.de.aboutme;
    contacts.textContent = language.de.contacts;
    project.textContent = language.de.project;
    devby.textContent = language.de.devby;
    calltoaction.textContent = language.de.calltoaction;
    basedon.textContent = language.de.basedon;
    welcome.textContent = language.de.welcome;
    welcomejoke.textContent = language.de.welcomejoke;
  } else if (window.location.hash == "#cz") {
    buttonLanguageMenu.textContent = language.cz.buttonLanguageMenu;
    buttonEnglish.textContent = language.cz.buttonEnglish;
    buttonGerman.textContent = language.cz.buttonGerman;
    buttonCzech.textContent = language.cz.buttonCzech;
    home.textContent = language.cz.home;
    aboutme.textContent = language.cz.aboutme;
    contacts.textContent = language.cz.contacts;
    project.textContent = language.cz.project;
    devby.textContent = language.cz.devby;
    calltoaction.textContent = language.cz.calltoaction;
    basedon.textContent = language.cz.basedon;
    welcome.textContent = language.cz.welcome;
    welcomejoke.textContent = language.cz.welcomejoke;
  }
}

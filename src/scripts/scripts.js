//--------------------------- Dropdown menu ----------------------------------------

const buttonLanguageMenu = document.querySelector("#buttonLanguageMenu");
const buttonEnglish = document.querySelector("#buttonEnglish");
const buttonGerman = document.querySelector("#buttonGerman");
const buttonCzech = document.querySelector("#buttonCzech");
const languageMenuText = document.querySelector("#languageMenuText");
const languageEnglishText = document.querySelector("#languageEnglishText");
const languageGermanText = document.querySelector("#languageGermanText");
const languageCzechText = document.querySelector("#languagCzechText");
const home = document.querySelector("#home");
const aboutme = document.querySelector("#aboutme");
const contacts = document.querySelector("#contacts");
const project = document.querySelector("#project");

buttonEnglish.onclick = language = "EN";
buttonGerman.onclick = language = "DE";
buttonCzech.onclick = language = "CZ";

function toggleLanguage(language) {
  if (language === "EN") {
    languageUpdateEN();
  }
  if (language === "DE") {
    languageUpdateDE();
  } else if (language === "CZ") {
    languageUpdateCZ();
  }
}

function languageUpdateEN() {
  buttonLanguageMenu.innerText = "Language";
  buttonEnglish.innerText = "English";
  buttonGerman.innerText = "German";
  buttonCzech.innerText = "Czech";
  home.innerText = "Home";
  aboutme.innerText = "About Me";
  contacts.innerText = "Contacts";
  project.innerText = "Projects";
}
function languageUpdateDE() {
  buttonLanguageMenu.innerText = "Sprache";
  buttonEnglish.innerText = "Englisch";
  buttonCzech.innerText = "Tschechisch";
  buttonGerman.innerText = "Deutsch";
  home.innerText = "Startseite";
  aboutme.innerText = "Über mich";
  contacts.innerText = "Kontakte";
  project.innerText = "Projekte";
}

function languageUpdateCZ() {
  buttonLanguageMenu.innerText = "Jazyk";
  buttonEnglish.innerText = "Anglický";
  buttonGerman.innerText = "Nemecký";
  buttonCzech.innerText = "Český";
  home.innerText = "Domaci obrazovka";
  aboutme.innerText = "O mne";
  contacts.innerText = "Kontakty";
  project.innerText = "Projekty";
}

        //--------------------------- Dropdown menu ----------------------------------------

        const buttonLanguageMenu = document.querySelector("#buttonLanguageMenu");
        const buttonEnglish = document.querySelector("#buttonEnglish");
        const buttonGerman = document.querySelector("#buttonGerman");
        const buttonCzech = document.querySelector("#buttonCzech");
        const languageMenuText = document.querySelector("#languageMenuText");
        const languageGermanText = document.querySelector("#languageGermanText");
        const languageCzechText = document.querySelector("#languagCzechText");
        const home = document.querySelector("#home");
        const aboutme = document.querySelector("#aboutme");
        const contacts = document.querySelector("#contacts");
        const projects = document.querySelector("#projects");
        buttonEnglish.onclick = languageUpdateEN;
        buttonGerman.onclick = languageUpdateDE;
        buttonCzech.onclick = languageUpdateCZ;



        function languageUpdateEN() {
          buttonLanguageMenu.innerText = "Language";
          buttonEnglish.innerText = "English";
          buttonGerman.innerText = "German";
          buttonCzech.innerText = "Czech";
          home.innerText = "Home";
          aboutme.innerText = "About Me";
          contacts.innerText = "Contacts";
          projects.innerText = "Projects";    
        }
      function languageUpdateDE() {
        buttonLanguageMenu.innerText = "Sprache";
        buttonEnglish.innerText = "Englisch";
        buttonCzech.innerText = "Tschechisch";
        buttonGerman.innerText = "Deutsch";
        home.innerText = "Startseite";
        aboutme.innerText = "Über mich";
        contacts.innerText = "Kontakte";
        projects.innerText = "Projekte";
      }

      function languageUpdateCZ() {
        buttonLanguageMenu.innerText = "Jazyk";
        buttonEnglish.innerText = "Anglický";
        buttonGerman.innerText = "Nemecký";
        buttonCzech.innerText = "Český";
        home.innerText = "Domaci obrazovka";
        aboutme.innerText = "O mne";
        contacts.innerText = "Kontakty";
        projects.innerText = "Projekty";
      }
        function toggleDropdown() {
            var dropdown = document.getElementById("myDropdown");
            dropdown.classList.toggle("show");
          }

          // Zavřít dropdown menu po kliknutí mimo něj
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

            
    
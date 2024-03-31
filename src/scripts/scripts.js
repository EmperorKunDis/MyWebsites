        //--------------------------- Dropdown menu -----------------------


    
        let home  = "Home";
        let about  = "About Me";
        let contact  = "Contacts";
        let project  = "Projects";

        let languageMenu = document.querySelector("#languageMenu");
        let languageEnglish = document.querySelector("#languageEnglish");
        let languageGerman = document.querySelector("#languageGerman");
        let languageCzech = documen.querySelector("#languageCzech");

        function updateWeb() {

            if (language == "EN") {
                languageMenu.innerText = "Language";
                languageEnglish.innerText = "English";
                languageCzech.innerText  = "Czech";
                languageGerman.innerText  = "German";
                home.innerText  = "Home";
                about.innerText  = "About Me";
                contact.innerText  = "Contacts";
                project.innerText  = "Projects";
            }
            else if (language == "DE") {  
                languageMenu.innerText = "Sprache";
                languageEnglish.innerText = "Englisch";
                languageCzech.innerText  = "Tschechisch";
                languageGerman.innerText  = "Deutsch";
                home  = "Startseite";
                about  = "Über mich";
                contact  = "Kontakte";
                project  = "Projekte";
            }
            else if (language == "CZ") {
                languageMenu.innerText = "Jazyk";
                languageEnglish.innerText = "Anglický";
                languageCzech.innerText  = "Český";
                languageGerman.innerText  = "Nemecký";
                home  = "Domaci obrazovka";
                about  = "O mne";
                contact  = "Kontakty";
                project  = "Projekty";
            } 
        }

        function translate() {
            document.getElementById("languageMenu").innerText = languageMenu;
            document.getElementById("languageEnglish").innerText = languageEnglish;
            document.getElementById("languageCzech").innerText = languageCzech;
            document.getElementById("languageGerman").innerText = languageGerman;
            document.getElementById("home").innerText = home;
            document.getElementById("about").innerText = about;
            document.getElementById("contact").innerText = contact;
            document.getElementById("project").innerText = project;
        }

        
   
        function languageUpdateEN() {
            var language = "EN"
            updateWeb();

        }
        function languageUpdateDE() {
            var language = "DE"
            updateWeb();
        }

        function languageUpdateCZ() {
            var language = "CZ"
            updateWeb();
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

            
    var myIndex = 0;
    carousel();
  
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "none";  
    setTimeout(carousel, 4500);    
    }
    
function myFunction() {
        var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
      } 

window.STUDENTBNB_CONFIG = {
  "countryCode": "PL",
  "countryName": "Polska",
  "locale": "pl-PL",
  "currency": "PLN",
  "domain": "studentbnb.pl",
  "apiBaseUrl": "/api/v1",
  "apiEnabled": false,
  "analyticsEnabled": false,
  "routes": {
    "city": "miasto.html",
    "listing": "ogloszenie.html",
    "publish": "dodaj-ogloszenie.html",
    "request": "szukam.html",
    "students": "studenci.html",
    "solidarity": "mieszkanie-miedzypokoleniowe.html",
    "privacy": "prywatnosc.html",
    "confirm": "potwierdz-email.html"
  },
  "networkSites": [
    {
      "code": "IT",
      "label": "Italia",
      "flag": "🇮🇹",
      "url": "https://studentbnb.it/"
    },
    {
      "code": "ES",
      "label": "España",
      "flag": "🇪🇸",
      "url": "https://studentbnb.es/"
    },
    {
      "code": "PT",
      "label": "Portugal",
      "flag": "🇵🇹",
      "url": "https://studentbnb.pt/"
    },
    {
      "code": "FR",
      "label": "France",
      "flag": "🇫🇷",
      "url": "https://studentbnb.fr/"
    },
    {
      "code": "DE",
      "label": "Deutschland",
      "flag": "🇩🇪",
      "url": "https://student-bnb.de/"
    },
    {
      "code": "PL",
      "label": "Polska",
      "flag": "🇵🇱",
      "url": "index.html"
    }
  ],
  "ui": {
    "select": "Wybierz",
    "allCities": "Wszystkie miasta",
    "allZones": "Wszystkie dzielnice",
    "domainPending": "Domena niemiecka do ustalenia",
    "checkEmail": "Sprawdź email, aby zakończyć weryfikację.",
    "demoVerification": "Tryb demonstracyjny: użyj przycisku poniżej, aby zasymulować link otrzymany emailem.",
    "genericError": "Nie udało się zakończyć operacji.",
    "login": "Zaloguj się",
    "verifiedEmail": "Email potwierdzony",
    "monthShort": "mies.",
    "expensesIncluded": "Opłaty w cenie",
    "expensesExcluded": "Opłaty osobno",
    "expensesIncludedLong": "Opłaty są wliczone w czynsz.",
    "expensesExcludedLong": "Szacowane opłaty dodatkowe:",
    "favorite": "Dodaj do ulubionych",
    "offersFound": "znalezionych ofert",
    "noOffers": "Brak zgodnych ofert",
    "noOffersHelp": "Opublikuj swoje potrzeby, aby wynajmujący mogli się z Tobą skontaktować.",
    "publishRequest": "Opublikuj potrzeby",
    "contactProtected": "Zapytanie zapisane. Kontakty są chronione dla zweryfikowanych użytkowników.",
    "contactStudent": "Skontaktuj się ze studentem",
    "profilesFound": "znalezionych profili",
    "invalidLinkTitle": "Link jest nieprawidłowy lub wygasł",
    "invalidLinkMessage": "Poproś o nowy link weryfikacyjny i spróbuj ponownie.",
    "emailConfirmedTitle": "Email potwierdzony",
    "emailConfirmedPublished": "Wpis został zapisany i czeka na moderację przed publikacją.",
    "emailConfirmedLogin": "Konto zostało zweryfikowane na tym urządzeniu."
  }
};


/* StudentBnB 2026-08-23 MAP FIX: direct, stable illustrated map */
(function(){
  function applyStableMap(){
    document.querySelectorAll('.brand small').forEach(function(e){e.textContent='Base & Belong';e.style.fontStyle='italic';});
    var m=document.querySelector('.country-market-map');
    if(!m) return;
    var top=m.querySelector('.market-map-top'); if(top) top.remove();
    var note=m.querySelector('.market-map-note'); if(note) note.remove();
    var img=m.querySelector('.market-map-image');
    if(img){ img.src='assets/img/country-map-illustrated.svg?v=20260823-mapfix2'; img.removeAttribute('srcset'); }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyStableMap); else applyStableMap();
  window.addEventListener('load',applyStableMap);
  setTimeout(applyStableMap,0);
})();

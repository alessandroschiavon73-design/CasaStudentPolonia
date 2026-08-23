window.STUDENTBNB_CONFIG = {
  brandLine: "Base & Belong",
  countryCode: "PL", countryName: "Polska", locale: "pl-PL", currency: "PLN", domain: "studentbnb.pl",
  apiBaseUrl: "/api/v1", apiEnabled: false, analyticsEnabled: false,
  routes: { city:"miasto.html", listing:"ogloszenie.html", publish:"dodaj-ogloszenie.html", request:"szukam.html", students:"studenci.html", solidarity:"mieszkanie-miedzypokoleniowe.html", privacy:"prywatnosc.html", confirm:"potwierdz-email.html" },
  networkSites: [
    {code:"IT",label:"Italia",flag:"🇮🇹",url:"https://studentbnb.it/"},
    {code:"ES",label:"España",flag:"🇪🇸",url:"https://studentbnb.es/"},
    {code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://studentbnb.pt/"},
    {code:"FR",label:"France",flag:"🇫🇷",url:"https://studentbnb.fr/"},
    {code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://student-bnb.de/"},
    {code:"PL",label:"Polska",flag:"🇵🇱",url:"https://studentbnb.pl/"}
  ],
  ui: {
    select:"Wybierz", allCities:"Wszystkie miasta", allZones:"Wszystkie dzielnice", domainPending:"Domena niemiecka do ustalenia",
    checkEmail:"Sprawdź email, aby zakończyć weryfikację.", demoVerification:"Tryb demonstracyjny: użyj przycisku poniżej, aby zasymulować link otrzymany emailem.", genericError:"Nie udało się zakończyć operacji.", login:"Zaloguj się", verifiedEmail:"Email potwierdzony", monthShort:"mies.", expensesIncluded:"Opłaty w cenie", expensesExcluded:"Opłaty osobno", expensesIncludedLong:"Opłaty są wliczone w czynsz.", expensesExcludedLong:"Szacowane opłaty dodatkowe:", favorite:"Dodaj do ulubionych", offersFound:"znalezionych ofert", noOffers:"Brak zgodnych ofert", noOffersHelp:"Opublikuj swoje potrzeby, aby wynajmujący mogli się z Tobą skontaktować.", publishRequest:"Opublikuj potrzeby", contactProtected:"Zapytanie zapisane. Kontakty są chronione dla zweryfikowanych użytkowników.", contactStudent:"Skontaktuj się ze studentem", profilesFound:"znalezionych profili", invalidLinkTitle:"Link jest nieprawidłowy lub wygasł", invalidLinkMessage:"Poproś o nowy link weryfikacyjny i spróbuj ponownie.", emailConfirmedTitle:"Email potwierdzony", emailConfirmedPublished:"Wpis został zapisany i czeka na moderację przed publikacją.", emailConfirmedLogin:"Konto zostało zweryfikowane na tym urządzeniu."
  }
};

(function(){
 const cfg=window.STUDENTBNB_CONFIG, sites=cfg.networkSites;
 function meta(k,v,c){let e=document.head.querySelector(`meta[${k}="${v}"]`);if(!e){e=document.createElement("meta");e.setAttribute(k,v);document.head.appendChild(e)}e.content=c}
 function link(rel,href,lang){let s=`link[rel="${rel}"]${lang?`[hreflang="${lang}"]`:""}`,e=document.head.querySelector(s);if(!e){e=document.createElement("link");e.rel=rel;if(lang)e.hreflang=lang;document.head.appendChild(e)}e.href=href}
 function apply(){
  document.querySelectorAll(".brand small").forEach(e=>{e.textContent="Base & Belong";e.style.fontStyle="italic"});
  const p=location.pathname.endsWith("/")?"":location.pathname.split("/").pop(), u=`https://${cfg.domain}/${p||""}`; link("canonical",u); meta("name","robots","index,follow,max-image-preview:large"); meta("property","og:site_name","StudentBnB — Base & Belong"); meta("property","og:title",document.title); meta("property","og:description",document.head.querySelector('meta[name="description"]')?.content||"Zakwaterowanie studenckie w Europie."); meta("property","og:url",u); meta("name","twitter:card","summary_large_image");
  if(!p||p==="index.html"){sites.forEach(s=>link("alternate",s.url,s.code.toLowerCase()));link("alternate","https://studentbnb.eu/","x-default")}
  const b=document.querySelector(".footer-international .footer-country-links");if(b)b.innerHTML=sites.map(s=>`<a href="${s.url}"${s.code===cfg.countryCode?' aria-current="page"':' target="_blank" rel="noopener"'}><span aria-hidden="true">${s.flag}</span> ${s.label}</a>`).join("")+'<a href="https://studentbnb.eu/" target="_blank" rel="noopener">🇪🇺 Europa</a>';
  const i=document.querySelector(".footer-international");if(i&&!i.querySelector(".europe-contact")){const x=document.createElement("p");x.className="europe-contact";x.innerHTML='<a href="mailto:contact@studentbnb.eu">contact@studentbnb.eu</a> · <em>Base & Belong</em>';i.appendChild(x)}
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply();
})();

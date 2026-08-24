window.STUDENTBNB_CONFIG = {"brandLine":"Base & Belong","countryCode":"PL","countryName":"Polska","locale":"pl-PL","currency":"PLN","domain":"studentbnb.pl","apiBaseUrl":"/api/v1","apiEnabled":false,"analyticsEnabled":false,"routes":{"city":"miasto.html","listing":"ogloszenie.html","publish":"dodaj-ogloszenie.html","request":"szukam.html","students":"studenci.html","solidarity":"mieszkanie-miedzypokoleniowe.html","privacy":"prywatnosc.html","confirm":"potwierdz-email.html"},"networkSites":[{"code":"IT","label":"Italia","flag":"🇮🇹","url":"https://studentbnb.it/"},{"code":"ES","label":"España","flag":"🇪🇸","url":"https://studentbnb.es/"},{"code":"FR","label":"France","flag":"🇫🇷","url":"https://studentbnb.fr/"},{"code":"DE","label":"Deutschland","flag":"🇩🇪","url":"https://student-bnb.de/"},{"code":"PL","label":"Polska","flag":"🇵🇱","url":"https://studentbnb.pl/"}],"ui":{"select":"Wybierz","allCities":"Wszystkie miasta","allZones":"Wszystkie dzielnice","login":"Zaloguj się"}};

(function () {
  const cfg = window.STUDENTBNB_CONFIG;
  const sites = cfg.networkSites;
  const ogImage = `https://${cfg.domain}/assets/img/room-1.webp`;

  function meta(key, value, content) {
    let element = document.head.querySelector(`meta[${key}="${value}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(key, value);
      document.head.appendChild(element);
    }
    element.content = content;
  }

  function link(rel, href, hreflang) {
    const selector = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ""}`;
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("link");
      element.rel = rel;
      if (hreflang) element.hreflang = hreflang;
      document.head.appendChild(element);
    }
    element.href = href;
  }

  function canonicalUrl() {
    const page = location.pathname.endsWith("/") ? "" : location.pathname.split("/").pop();
    const params = new URLSearchParams(location.search);
    const canonicalParams = new URLSearchParams();
    if (page === cfg.routes.city && params.get("city")) canonicalParams.set("city", params.get("city"));
    if (page === cfg.routes.listing && params.get("id")) canonicalParams.set("id", params.get("id"));
    const query = canonicalParams.toString();
    return `https://${cfg.domain}/${page || ""}${query ? `?${query}` : ""}`;
  }

  function updateSeo({title = document.title, description} = {}) {
    const desc = description || document.head.querySelector('meta[name="description"]')?.content || "Zakwaterowanie studenckie w Polsce.";
    const canonical = canonicalUrl();
    link("canonical", canonical);
    meta("property", "og:title", title);
    meta("property", "og:description", desc);
    meta("property", "og:url", canonical);
    meta("property", "og:image", ogImage);
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", desc);
    meta("name", "twitter:image", ogImage);
  }

  function addStructuredData() {
    let script = document.head.querySelector("#studentbnb-website-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "studentbnb-website-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"StudentBnB",url:`https://${cfg.domain}/`,inLanguage:cfg.locale});
  }

  function alignMap() {
    const map = document.querySelector(".country-market-map");
    if (!map) return;
    map.querySelector(".market-map-top")?.remove();
    map.querySelector(".market-map-note")?.remove();
    const image = map.querySelector(".market-map-image");
    if (image) {
      image.src = "assets/img/country-map-illustrated.svg";
      image.removeAttribute("srcset");
      image.style.display = "block";
      image.style.visibility = "visible";
      image.style.opacity = "1";
    }
    if (!map.querySelector(".demo-map-notice")) {
      const notice = document.createElement("p");
      notice.className = "demo-map-notice";
      notice.textContent = "Wersja demonstracyjna: widoczne ogłoszenia i profile są przykładami.";
      map.appendChild(notice);
    }
  }

  function apply() {
    document.querySelectorAll(".brand small").forEach(element => {
      element.textContent = "Base & Belong";
      element.style.fontStyle = "italic";
    });
    meta("name", "robots", "index,follow,max-image-preview:large");
    meta("property", "og:site_name", "StudentBnB — Base & Belong");
    meta("property", "og:type", "website");
    meta("name", "twitter:card", "summary_large_image");
    updateSeo();
    addStructuredData();

    const page = location.pathname.endsWith("/") ? "" : location.pathname.split("/").pop();
    if (!page || page === "index.html") {
      sites.forEach(site => link("alternate", site.url, site.code.toLowerCase()));
    }

    const box = document.querySelector(".footer-international .footer-country-links");
    if (box) {
      box.innerHTML = sites.map(site =>
        `<a href="${site.url}"${site.code === cfg.countryCode ? ' aria-current="page"' : ' target="_blank" rel="noopener"'}><span aria-hidden="true">${site.flag}</span> ${site.label}</a>`
      ).join("");
    }
    alignMap();
  }

  window.StudentBnBSEO = { update: updateSeo };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
(function () {
  if (document.querySelector("script[data-studentbnb-analytics]")) return;
  const script = document.createElement("script");
  script.src = "assets/js/analytics.js?v=20260824";
  script.defer = true;
  script.dataset.studentbnbAnalytics = "1";
  document.head.appendChild(script);
})();

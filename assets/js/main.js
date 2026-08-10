document.addEventListener("DOMContentLoaded", function () {
  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  function formatDate(str) {
    var parts = str.split("-");
    var y = parts[0], m = parts[1];
    return m ? (MONTHS[parseInt(m, 10) - 1] + " " + y) : y;
  }

  /* Render News & Milestones */
  var newsList = document.getElementById("news-list");
  if (newsList && typeof NEWS !== "undefined") {
    var sorted = NEWS.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
    newsList.innerHTML = sorted.map(function (item) {
      var titleHtml = item.link
        ? '<a href="' + item.link + '" target="_blank" rel="noopener">' + item.title + '</a>'
        : item.title;
      return (
        '<li class="news-item reveal">' +
          '<div class="news-date">' + formatDate(item.date) + '</div>' +
          '<div>' +
            '<span class="news-tag">' + item.tag + '</span>' +
            '<h3>' + titleHtml + '</h3>' +
            '<p>' + item.body + '</p>' +
          '</div>' +
        '</li>'
      );
    }).join("");
  }

  /* Render Publications */
  var pubContainer = document.getElementById("pub-groups");
  if (pubContainer && typeof PUBLICATIONS !== "undefined") {
    pubContainer.innerHTML = PUBLICATIONS.map(function (group) {
      var items = group.items.map(function (p) {
        var titleHtml = p.link
          ? '<a href="' + p.link + '" target="_blank" rel="noopener">' + p.title + '</a>'
          : p.title;
        var statusHtml = p.status ? '<span class="pub-status">' + p.status + '</span>' : "";
        return (
          '<li class="pub-item">' +
            '<span class="authors">' + p.authors + '</span> (' + p.year + '). ' +
            '<span class="title">' + titleHtml + '</span>. ' +
            '<span class="venue">' + p.venue + '</span>.' + statusHtml +
          '</li>'
        );
      }).join("");
      return (
        '<div class="pub-group reveal">' +
          '<h3>' + group.group + '</h3>' +
          '<ul class="pub-list">' + items + '</ul>' +
        '</div>'
      );
    }).join("");
  }

  /* Reveal-on-scroll — set up after News/Publications are injected above,
     so those dynamically-added elements get observed too. */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
    // Safety net: never let content stay permanently invisible.
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
        el.classList.add("in");
      });
    }, 2500);
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Active nav link on scroll */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a");
  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});

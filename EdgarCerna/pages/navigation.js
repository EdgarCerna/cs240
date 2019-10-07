function createHeaderFooter() {
    var h1 = document.createElement("h1");
    var header = document.createElement("header");
    var footer = document.createElement("footer");
    var nav = document.createElement("nav");
    var ul = document.createElement("ul");
    var li;

    h1.innerHTML = "Vactions";
    header.appendChild(h1);
    li = getli("chapter1.html", "New Orleans Vacation");
    ul.appendChild(li);
    li = getli("chapter2.html", "Kansas City Vacation");
    ul.appendChild(li);
    li = getli("chapter3.html", "Quintana Roo Vacation");
    ul.appendChild(li);
    li = getli("chapter4.html", "Quintana Roo Vacation 2");
    ul.appendChild(li);
    li = getli("chapter5.html", "Top 10 Popular Tourist Attractions");
    ul.appendChild(li);
    li = getli("chapter6.html", "About Popular Tourist Attractions");
    ul.appendChild(li);
    li = getli("chapter7.html", "Quintana Roo Vacation 3");
    ul.appendChild(li);
    li = getli("homework9.html", "Belize Cruise Package Calculator");
    ul.appendChild(li);

    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.insertBefore(header, document.body.childNodes[0]);

    nav = document.createElement("nav");
    ul = document.createElement("ul");
    li = getli("#", "Top");
    ul.appendChild(li);
    nav.appendChild(ul);
    footer.appendChild(nav);
    document.body.appendChild(footer);
}

function getli(ref, label) {
    var li = document.createElement("li");
    var a = document.createElement("a");

    a.setAttribute("href", ref);
    a.innerHTML = label;
    li.appendChild(a);
    return li;
}
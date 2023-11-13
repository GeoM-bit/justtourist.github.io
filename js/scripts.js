/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    const themeIcon = document.getElementById('theme-toggle');
    const searchButton = document.getElementById('searchButton');

    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        //down
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-fixed', 'is-visible', 'navbar-dark');
            searchButton.classList.remove("btn-outline-light");
            searchButton.classList.add("btn-outline-dark");
            themeIcon.classList.remove("icon-light");
            themeIcon.classList.add("icon-dark");
        }
        //up
        else if (currentTop <= headerHeight && mainNav.classList.contains('is-fixed')) {
            mainNav.classList.remove('is-fixed', 'is-visible', 'navbar-light');
            searchButton.classList.remove("btn-outline-dark");
            searchButton.classList.add("btn-outline-light");
            themeIcon.classList.remove("icon-dark");
            themeIcon.classList.add("icon-light");
        }
    });
});


// Obțineți URL-ul paginii curente
const currentPageUrl = window.location.href;

// Obțineți toate link-urile din bara de navigație
const navLinks = document.querySelectorAll('.nav-item a');

// Parcurgeți toate link-urile și actualizați clasa 'active'
navLinks.forEach(link => {
    if (currentPageUrl.includes(link.getAttribute('href'))) {
        link.parentElement.classList.add('active');
    } else {
        link.parentElement.classList.remove('active');
    }
});

// Obțineți elementele DOM relevante
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.querySelector('.search-results');

// Adăugați un eveniment de căutare atunci când se apasă butonul sau Enter
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Oprește comportamentul implicit al evenimentului keyup
        performSearch();
    }
});

const contentToSearch = [
    { title: 'Visiting Vienna', content: 'Eager to see Schönbrunn Palace, St. Stephen\'s Cathedral or Belvedere Museum?', originalPage: 'post.html' },
    { title: 'Visiting Paris', content: 'Wandering the streets of Paris to admire the Cathédrale Notre-Dame de Paris, the Eiffel Tower, the Louvre Museum and so much more.', originalPage: 'index.html' },
    { title: 'Visiting Prague', content: 'Exploring the wonderful Prague Castle, St. Vitus Cathedral, Lobkowicz Palace, the Spanish Synagogue and many more.', originalPage: 'index.html' },
    { title: 'Visiting Rome', content: 'The Colosseum, the Pantheon, Galleria Borghese, the Roman Forum are just a taste of what waits to be discovered.', originalPage: 'index.html' },

    // Adaugă mai multe secțiuni aici
];
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        alert('Please fill in the search field.');
        return; // Ieși din funcție dacă bara de căutare este goală
    }
    const searchResultsHTML = searchContent(searchTerm);
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    //searchResults.innerHTML = searchResultsHTML;
    window.location.href = `results-page.html?searchTerm=${encodedSearchTerm}&results=${encodeURIComponent(searchResultsHTML)}`;

}

function searchContent(term) {
    const filteredContent = contentToSearch.filter(item =>
        item.title.toLowerCase().includes(term) ||
        item.content.toLowerCase().includes(term)
    );

    if (filteredContent.length === 0) {
        return '<p>Search results:</p>Nothing was found.';
    }

    const resultsHTML = filteredContent.map((item, index) =>
        `<div class="search-result-item" data-index="${index}">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
    </div>`
    ).join('');
    const finalHTML = `<p>Search results:</p>${resultsHTML}`;

    return finalHTML;
}

// script.js
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;
    const mainNav = document.getElementById("mainNav");

    themeToggle.addEventListener("click", function () {
        // Toggle între clasele "light" și "dark" ale corpului
        body.classList.toggle("light");
        body.classList.toggle("dark");

        // Schimbă clasa și culoarea iconiței în funcție de tema curentă
        if (body.classList.contains("light")) {
            themeIcon.className = "fas fa-lightbulb";
            themeIcon.style.color = "black"; // sau orice altă culoare pentru light theme
            document.querySelectorAll(".post-title, .post-subtitle, .post-meta, a").forEach(element => {
                element.style.color = "white";
                console.log(element.tagName.toLowerCase());
                    element.addEventListener("mouseenter", function () {
                        this.style.color = "#0085A1";
                        this.style.cursor = "pointer";
                    });
                    element.addEventListener("mouseleave", function () {
                        this.style.color = "white";
                    });
                
            });
        } else {
            themeIcon.className = "fas fa-lightbulb";
            themeIcon.style.color = "white"; // sau orice altă culoare pentru dark theme
            document.querySelectorAll(".post-title, .post-subtitle, .post-meta, a").forEach(element => {
                element.style.color = "black";
                    element.addEventListener("mouseenter", function () {
                        this.style.color = "#0085A1";
                        this.style.cursor = "pointer";
                    });
                    element.addEventListener("mouseleave", function () {
                        this.style.color = "black";
                    });
                
            });
        }
    });
});




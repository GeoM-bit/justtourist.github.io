/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

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

//// Funcția pentru efectuarea căutării
//function performSearch() {
//    const searchTerm = searchInput.value;

//    // Aici puteți efectua logica de căutare
//    // De exemplu, afișați rezultatele în elementul 'searchResults'
//    window.location.href = 'pagina-rezultate.html?searchTerm=' + encodeURIComponent(searchTerm);
//}

const contentToSearch = [
    { title: 'About Me', content: 'This is what I do.', originalPage: 'about.html' },
    { title: 'Main Content', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', originalPage: 'about.html' },
    // Adaugă mai multe secțiuni aici
];
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        alert('Introduceți un termen de căutare.');
        return; // Ieși din funcție dacă bara de căutare este goală
    }
    const searchResultsHTML = searchContent(searchTerm);
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    //searchResults.innerHTML = searchResultsHTML;
    window.location.href = `pagina-rezultate.html?searchTerm=${encodedSearchTerm}&results=${encodeURIComponent(searchResultsHTML)}`;

}

function searchContent(term) {
    const filteredContent = contentToSearch.filter(item =>
        item.title.toLowerCase().includes(term) ||
        item.content.toLowerCase().includes(term)
    );

    if (filteredContent.length === 0) {
        return 'Niciun rezultat găsit.';
    }

    const resultsHTML = filteredContent.map((item, index) =>
        `<div class="search-result-item" data-index="${index}">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
    </div>`
    ).join('');

    return resultsHTML;
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

    themeToggle.addEventListener("click", function () {
        // Toggle între clasele "light" și "dark" ale corpului
        body.classList.toggle("light");
        body.classList.toggle("dark");

        // Schimbă clasa și culoarea iconiței în funcție de tema curentă
        if (body.classList.contains("light")) {
            themeIcon.className = "fas fa-lightbulb";
            themeIcon.style.color = "black"; // sau orice altă culoare pentru light theme
        } else {
            themeIcon.className = "fas fa-lightbulb";
            themeIcon.style.color = "white"; // sau orice altă culoare pentru dark theme
        }
    });
});




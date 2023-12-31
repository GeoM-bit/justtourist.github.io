﻿/*!
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
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-fixed', 'is-visible', 'navbar-dark');
            searchButton.classList.remove("btn-outline-light");
            searchButton.classList.add("btn-outline-dark");
            themeIcon.classList.remove("icon-light");
            themeIcon.classList.add("icon-dark");
        }
        else if (currentTop <= headerHeight && mainNav.classList.contains('is-fixed')) {
            mainNav.classList.remove('is-fixed', 'is-visible', 'navbar-light');
            searchButton.classList.remove("btn-outline-dark");
            searchButton.classList.add("btn-outline-light");
            themeIcon.classList.remove("icon-dark");
            themeIcon.classList.add("icon-light");
        }
    });
});

const currentPageUrl = window.location.href;

const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach(link => {
    if (currentPageUrl.includes(link.getAttribute('href'))) {
        link.parentElement.classList.add('active');
    } else {
        link.parentElement.classList.remove('active');
    }
});

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.querySelector('.search-results');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
    }
});

const contentToSearch = [
    { title: 'Visiting Vienna', content: 'Eager to see Schönbrunn Palace, St. Stephen\'s Cathedral or Belvedere Museum?', originalPage: 'post.html', index: '0' },
    { title: 'Visiting Paris', content: 'Wandering the streets of Paris to admire the Cathédrale Notre-Dame de Paris, the Eiffel Tower, the Louvre Museum and so much more.', originalPage: 'index.html', index: '1' },
    { title: 'Visiting Prague', content: 'Exploring the wonderful Prague Castle, St. Vitus Cathedral, Lobkowicz Palace, the Spanish Synagogue and many more.', originalPage: 'index.html', index: '2' },
    { title: 'Visiting Rome', content: 'The Colosseum, the Pantheon, Galleria Borghese, the Roman Forum are just a taste of what waits to be discovered.', originalPage: 'index.html', index: '3' },
    { title: 'Welcome to Just Tourist', content: 'Your Passport to European Adventures!', originalPage: 'about.html', index: '4' },
    { title: 'Who Am I?', content: 'I am an avid traveler, storyteller, and culture enthusiast dedicated to sharing the magic of European destinations...', originalPage: 'about.html', index: '5' },
    { title: 'What Sets Me Apart', content: 'I believe in going beyond the typical tourist attractions. My blog delves...', originalPage: 'about.html', index: '6' },
    { title: 'Join Me on the Adventure!', content: 'Whether you\'re an armchair traveler, a seasoned globetrotter, or someone planning your first European escapade...', originalPage: 'about.html', index: '7' },
    { title: 'Discover Vienna', content: 'A Guide to Must-Visit Attractions', originalPage: 'post.html', index: '8' },
    { title: '1. Schönbrunn Palace: A Royal Marvel', content: 'No visit to Vienna is complete without exploring the opulent Schönbrunn Palace... ', originalPage: 'post.html', index: '9' },
    { title: '2. St. Stephen\'s Cathedral: Gothic Grandeur', content: 'Dominating Vienna\'s skyline, St.Stephen\'s Cathedral is an architectural masterpiece...', originalPage: 'post.html', index: '10' },
    { title: '3. Belvedere Museum: Art and Culture', content: 'Art enthusiasts will find solace in the Belvedere Museum, home to an impressive collection of Austrian art...', originalPage: 'post.html', index: '11' },
    { title: '4. Hofburg Palace: Imperial Residences', content: 'Hofburg Palace, the former imperial palace, is a vast complex that chronicles Vienna\'s imperial history.', originalPage: 'post.html', index: '12' },
    { title: '5. The Vienna State Opera: A Symphony of Performances', content: 'For a taste of Vienna\'s cultural heartbeat, attend a performance at the Vienna State Opera', originalPage: 'post.html', index: '13' },
    { title: '6. Naschmarkt: Culinary Delights', content: 'Vienna\'s Naschmarkt is a paradise for food enthusiasts.This bustling market offers a diverse array...', originalPage: 'post.html', index: '14' },
    { title: 'Contact', content: 'I\'m excited to connect with you through my tourist blog. Whether you have questions, suggestions...', originalPage: 'contact.html', index: '15' },
];
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        alert('Please fill in the search field.');
        return; 
    }
    const searchResultsHTML = searchContent(searchTerm);
    const encodedSearchTerm = encodeURIComponent(searchTerm);
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

    const resultsHTML = filteredContent.map((item) =>
        `<div class="search-result-item" data-index="${item.index}">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
    </div>`
    ).join('');
    const finalHTML = `<p>Search results:</p>${resultsHTML}`;

    return finalHTML;
}

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
    const body = document.body;

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light");
        body.classList.toggle("dark");
        if (body.classList.contains("light")) {
            document.querySelectorAll(".post-title, .post-subtitle, .post-meta, .author").forEach(element => {
                element.style.color = "white";
                    element.addEventListener("mouseenter", function () {
                        this.style.color = "#0085A1";
                        this.style.cursor = "pointer";
                    });
                    element.addEventListener("mouseleave", function () {
                        this.style.color = "white";
                    });              
            });
            document.querySelectorAll(".table").forEach(element => {
                element.style.color = "white";
            })          
        } else {
            document.querySelectorAll(".post-title, .post-subtitle, .post-meta, .author").forEach(element => {
                element.style.color = "black";
                    element.addEventListener("mouseenter", function () {
                        this.style.color = "#0085A1";
                        this.style.cursor = "pointer";
                    });
                    element.addEventListener("mouseleave", function () {
                        this.style.color = "black";
                    });             
            });
            document.querySelectorAll(".table").forEach(element => {
                element.style.color = "black";
            })
        }
    });
});

function showHelp() {
    var helpModal = new bootstrap.Modal(document.getElementById('helpModal'));
    helpModal.show();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Oprire comportamentul implicit de trimitere a formularului

        // Poți adăuga aici cod pentru trimiterea datelor către server, dacă este necesar

        // Mesaj de succes
        var successMessage = document.createElement('div');
        successMessage.classList.add('alert', 'alert-success', 'mt-3', 'position-relative', 'success-message'); // Adăugăm clase pentru spațiere și poziționare relativă
        successMessage.innerHTML = '<p class="m-0">Form submitted successfully! Thank you for reaching out.</p>';

        // Buton de închidere
        var closeButton = document.createElement('button');
        closeButton.setAttribute('type', 'button');
        closeButton.classList.add('btn-close', 'position-absolute', 'top-0', 'end-0', 'm-2'); // Adăugăm clase pentru poziționare absolută
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.addEventListener('click', function () {
            successMessage.style.display = 'none';
        });

        // Adaugă butonul de închidere și mesajul de succes în pagina HTML
        document.getElementById('contactForm').appendChild(successMessage);
        successMessage.appendChild(closeButton);

        // Resetarea formularului după trimitere
        document.getElementById('contactForm').reset();
        // Închide automat notificarea după 3 secunde
        setTimeout(function () {
            successMessage.classList.add('fade-out');
            setTimeout(function () {
                successMessage.style.display = 'none';
                successMessage.classList.remove('fade-out'); // Eliminăm clasa pentru a pregăti pentru viitoare afișări
            }, 1000);
        }, 3000);
    
    });
});
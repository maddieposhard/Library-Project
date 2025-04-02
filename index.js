import { books } from './data.js'

function loadBooks() {
    const container = document.querySelector(".book-container");

    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${book.Title}</h3>
            <p>Author: ${book.Author}</p>
            <p>Genre: ${book.Genre.join(", ")}</p>
            <button class="btn" onclick="showDescription('${book.Description}')">Show Description</button>
            `;

        container.appendChild(card);
    });
}

window.showDescription = function(description) {
    alert(description);
};

window.onload = loadBooks;
// Search input and results container
const searchInput = document.getElementById("book-search");
const resultsContainer = document.getElementById("search-results");

// Trigger search when typing
searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim();

    if (query.length < 2) {
        resultsContainer.innerHTML = "";
        return;
    }

    searchBooks(query);
});

// Google Books API search function
async function searchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        displayBooks(data.items || []);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

// Display results on the page
function displayBooks(books) {
    resultsContainer.innerHTML = "";

    if (books.length === 0) {
        resultsContainer.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach(book => {
        const info = book.volumeInfo;

        const title = info.title || "No Title";
        const authors = info.authors ? info.authors.join(", ") : "Unknown Author";
        const thumbnail = info.imageLinks ? info.imageLinks.thumbnail : "default_book.png";

        const bookCard = `
            <div class="book-card">
                <img src="${thumbnail}" alt="${title}">
                <h3>${title}</h3>
                <p>${authors}</p>
                <button class="add-to-read" onclick="addToReadList('${encodeURIComponent(title)}')">Add to Read List</button>
            </div>
        `;

        resultsContainer.innerHTML += bookCard;
    });
}

// Add to your existing read-list container
function addToReadList(title) {
    title = decodeURIComponent(title);

    const list = document.getElementById("read-list");

    const item = document.createElement("li");
    item.textContent = title;

    list.appendChild(item);
}

const searchBox = document.getElementById('searchBox');
const resultsDiv = document.getElementById('searchResults');

searchBox.addEventListener('input', async () => {
  const query = searchBox.value.trim();
  resultsDiv.innerHTML = '';

  if (query.length < 2) return; // avoid empty searches

  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`);
  const data = await res.json();
  const books = data.docs;

  books.forEach(book => {
    const div = document.createElement('div');
    div.style.margin = "10px 0";
    div.style.background = "rgba(255,255,255,0.2)";
    div.style.padding = "10px";
    div.style.borderRadius = "10px";

    const title = book.title || 'Unknown';
    const author = (book.author_name && book.author_name[0]) || 'Unknown';
    const coverId = book.cover_i;
    const coverImg = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : 'https://via.placeholder.com/80x120.png?text=No+Cover';

    div.innerHTML = `
      <img src="${coverImg}" style="width:80px;height:120px;vertical-align:middle;margin-right:10px;">
      <strong>${title}</strong> by ${author}
      <button onclick="addToList('home', '${title}', '${author}', '${coverImg}')">Home</button>
      <button onclick="addToList('read', '${title}', '${author}', '${coverImg}')">Read List</button>
    `;

    resultsDiv.appendChild(div);
  });
});

// Save to localStorage
function addToList(listType, title, author, cover) {
  let list = JSON.parse(localStorage.getItem(listType)) || [];
  if (!list.some(b => b.title === title)) {
    list.push({ title, author, cover });
    localStorage.setItem(listType, JSON.stringify(list));
    alert(`${title} added to ${listType === 'home' ? 'Home' : 'Read List'}`);
  } else {
    alert(`${title} already in the list`);
  }
}

# library
 Virtual Book Explorer

Global Book Search + To-Read List + Read List (LocalStorage Powered)

The Virtual Book Explorer is a simple, elegant web application that lets users search for any book ever published and save it to their To Read or Read List.

Using the Open Library API, the app provides access to millions of books worldwide — with real covers, authors, and metadata.

Your app consists of two pages:
	•	index.html → Global book search + add books to lists
	•	home.html → Display saved “To Read List” & “Read List”

All data is saved using localStorage, so the lists persist even after page refresh.

⸻

🚀 Features

🔍 Global Book Search
	•	Users can search for any published book
	•	Powered by Open Library Search API
	•	Shows:
	•	Book title
	•	Author
	•	Cover image (if available)

📥 Save Books

Users can save books to two separate lists:
	•	To Read List
	•	Read List

Buttons automatically appear with every search result.

📦 Persistent Storage
	•	All saved books are stored in localStorage
	•	Lists remain saved even after refreshing or closing the browser

🎨 Custom Gothic UI
	•	Built using your custom Gothic-inspired styling
	•	Compatible with your existing .image-box, layout, and fonts

⸻

📁 File Structure
project-folder/
│
├── index.html        # Search page  
├── home.html         # Your read list display page  
├── app.js            # Handles search + saving books  
├── style.css         # Your UI styles  
└── README.md         # (This file)  
How It Works

1. Searching Books

The search field in index.html triggers calls to:
https://openlibrary.org/search.json?q=YOUR_QUERY
The API returns a list of books with:
	•	title
	•	author_name
	•	cover_i
	•	other metadata (ignored)

Results are then dynamically displayed.

⸻

2. Adding Books to Lists

Each search result includes buttons:
	•	Home → Saves to “To Read List”
	•	Read List → Saves to “Read List”
    localStorage.setItem("home", JSON.stringify(list));
localStorage.setItem("read", JSON.stringify(list));
3. Displaying Lists

Inside home.html, your existing .image-box containers are used to render the lists.

⸻

📦 Requirements

No backend required.
Only needs:
	•	A modern browser
	•	Internet connection (for Open Library API)

⸻

▶️ Running the Project

Just open index.html in your browser.
	1.	Search for any book
	2.	Add it to your list
	3.	Go to home.html
	4.	View your saved lists

⸻

🔧 Future Enhancements (Optional)

If you want, you can later add:
	•	❌ Remove book from list
	•	✔️ Mark “To Read” → “Read List” automatically
	•	⭐ Save favorites
	•	📱 Make it fully responsive for mobile
	•	🎨 More animations & UI polish

⸻

📝 Credits
	•	Open Library API — https://openlibrary.org
	•	Custom UI/UX by Muhammed Aman
	•	JavaScript integration by ChatGPT

⸻


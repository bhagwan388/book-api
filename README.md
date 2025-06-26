# 📚 Book Management REST API

This is a simple REST API built using **Node.js** and **Express** to manage a list of books. The data is stored **in memory** (no database used).

---

## 🚀 Features
- GET all books
- POST a new book
- PUT to update book by ID
- DELETE a book by ID

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- Postman (for testing)

---

## 📁 Project Structure
```
book-api/
├── index.js          # Main API server
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

## ⚙️ Setup Instructions

1. Clone this repo or create your own folder:
   ```bash
   mkdir book-api
   cd book-api
   ```

2. Initialize project and install dependencies:
   ```bash
   npm init -y
   npm install express
   ```

3. Create a file called `index.js` and paste in the code.

4. Update `package.json` scripts:
   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Visit `http://localhost:3000` in your browser or Postman.

---

## 🔁 API Endpoints

### 📖 GET All Books
```
GET /books
```
Returns an array of all books.

### ➕ POST Add a Book
```
POST /books
```
**Body (JSON):**
```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```

### ✏️ PUT Update a Book
```
PUT /books/:id
```
**Body (JSON):**
```json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```

### ❌ DELETE a Book
```
DELETE /books/:id
```
Deletes the book with the specified ID.

---

## 🧪 How to Test with Postman

1. Open Postman and start a new collection.
2. Use these requests:
   - `GET http://localhost:3000/books`
   - `POST http://localhost:3000/books` with JSON body
   - `PUT http://localhost:3000/books/1`
   - `DELETE http://localhost:3000/books/1`

---

## 👨‍💻 Author
**Bhagwan Arsewad**  
GitHub: [bhagwan388](https://github.com/bhagwan388)

---

## 📄 License
This project is licensed under the MIT License.

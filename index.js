const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data
let books = [];
let nextId = 1;

// Home route
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book Management REST API');
});

// Get all books (sorted)
app.get('/books', (req, res) => {
  const sortedBooks = books.sort((a, b) => a.id - b.id);
  res.status(200).json(sortedBooks);
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title?.trim() || !author?.trim()) {
    return res.status(400).json({ message: '❌ Both title and author are required.' });
  }

  const newBook = {
    id: nextId++,
    title: title.trim(),
    author: author.trim(),
    createdAt: new Date().toISOString()
  };

  books.push(newBook);
  res.status(201).json({ message: '✅ Book added successfully', book: newBook });
});

// Update a book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: `❌ Book with ID ${id} not found.` });
  }

  if (title?.trim()) book.title = title.trim();
  if (author?.trim()) book.author = author.trim();

  res.status(200).json({ message: '✅ Book updated successfully', book });
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `❌ Book with ID ${id} not found.` });
  }

  books.splice(index, 1);
  res.status(200).json({ message: `✅ Book with ID ${id} deleted.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

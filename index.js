// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book Management REST API');
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title?.trim() || !author?.trim()) {
    return res.status(400).json({ message: '❌ Title and author are required.' });
  }
  const newBook = {
    id: nextId++,
    title: title.trim(),
    author: author.trim(),
    createdAt: new Date().toISOString()
  };
  books.push(newBook);
  res.status(201).json({ message: '✅ Book added', book: newBook });
});

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: `❌ Book with ID ${id} not found.` });
  if (title?.trim()) book.title = title.trim();
  if (author?.trim()) book.author = author.trim();
  res.status(200).json({ message: '✅ Book updated', book });
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: `❌ Book with ID ${id} not found.` });
  books.splice(index, 1);
  res.status(200).json({ message: `✅ Book with ID ${id} deleted.` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

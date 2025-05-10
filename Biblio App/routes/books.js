const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

// Listar todos los libros
router.get('/', (req, res) => {
    connection.query('SELECT * FROM books', (err, books) => {
        res.render('books/index', {
            title: 'Biblioteca',
            currentPage: '/books', // ← Añade esto
            books: books
        });
    });
});

// Formulario para agregar libro
router.get('/add', (req, res) => {
    res.render('books/add', {
        title: 'Agregar Libro',
        currentPage: '/books'
    });
});

// Procesar formulario de agregar
router.post('/add', (req, res) => {
    const {name, author} = req.body;
    connection.query('INSERT INTO books SET ?', {name, author}, (err) => {
        if(err) throw err;
        res.redirect('/books');
    });
});

// Formulario de edición
router.get('/edit/:id', (req, res) => {
    connection.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, results) => {
        if(err) throw err;
        res.render('books/edit', {
            title: 'Editar Libro',
            currentPage: '/books',
            book: results[0]
        });
    });
});

// Procesar actualización
router.post('/update/:id', (req, res) => {
    const {name, author} = req.body;
    connection.query('UPDATE books SET ? WHERE id = ?', [{name, author}, req.params.id], (err) => {
        if(err) throw err;
        res.redirect('/books');
    });
});

// Eliminar libro
router.get('/delete/:id', (req, res) => {
    connection.query('DELETE FROM books WHERE id = ?', [req.params.id], (err) => {
        if(err) throw err;
        res.redirect('/books');
    });
});

module.exports = router;
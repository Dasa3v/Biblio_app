const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Configuración esencial
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/base'); // Asegúrate de tener este archivo

// Middleware para currentPage
app.use((req, res, next) => {
    res.locals.currentPage = req.path;
    next();
});

// Middleware para variables globales de vistas
app.use((req, res, next) => {
    res.locals.currentPage = req.path; // Automáticamente disponible en todas las vistas
    next();
});

// Configuración para archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Sirve todo el contenido de 'public'
app.use('/img', express.static(path.join(__dirname, 'public/img'))); // Ruta explícita para imágenes

// Rutas
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
app.use('/', indexRouter);
app.use('/books', booksRouter);

// Manejo de errores
app.use((req, res, next) => {
    res.status(404).render('error', {
        title: 'Página no encontrada',
        message: 'La página solicitada no existe',
        layout: 'layouts/base'
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', {
        title: 'Error del servidor',
        message: 'Ocurrió un error interno en el servidor',
        layout: 'layouts/base'
    });
});


module.exports = app;
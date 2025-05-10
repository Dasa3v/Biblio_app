const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Inicio',
        currentPage: '/' // ← Añade esto
    });
});

module.exports = router;
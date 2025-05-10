const mysql = require('mysql');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Usuario de MySQL
    password: '',          // Contraseña (vacía por defecto en XAMPP/WAMP)
    database: 'books'      // Nombre de la base de datos
});

// Conectar y exportar
connection.connect((error) => {
    if (error) {
        console.error('Error de conexión a MySQL:', error);
        process.exit(1); // Termina la aplicación si hay error
    } else {
        console.log('✅ Conectado a MySQL');
    }
});

module.exports = connection;
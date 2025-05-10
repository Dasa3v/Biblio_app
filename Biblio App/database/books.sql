-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS books COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE books;

-- Tabla principal de libros
CREATE TABLE IF NOT EXISTS books (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  author VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de ejemplo
INSERT INTO books (name, author) VALUES
('Cien años de soledad', 'Gabriel García Márquez'),
('Rayuela', 'Julio Cortázar'),
('La ciudad y los perros', 'Mario Vargas Llosa'),
('Ficciones', 'Jorge Luis Borges'),
('Pedro Páramo', 'Juan Rulfo');
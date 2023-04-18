//creando la base de datos
CREATE DATABASE crud;

use crud;

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone VARCHAR(15)
);

SHOW TABLES;

describe customer;
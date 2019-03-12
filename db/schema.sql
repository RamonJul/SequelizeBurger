
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger(
    id INT(20) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(20) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
)